"""
fetch_images.py — pulls one representative image per lesson from Wikipedia
(via the REST summary API, which resolves to Wikimedia Commons) and saves it
locally to the project root, so the app has zero runtime dependency on
Wikipedia.

Images are saved flat, at the project root, alongside everything else —
NOT in an img/ subfolder. That's deliberate: this repo is published by
dragging files onto GitHub's web uploader, which silently flattens any
subfolder it's given (see the README's "Structure" section). A nested
img/ folder becomes loose files at the repo root with no warning, and the
site keeps requesting img/whatever.jpg and getting 404s. Keeping images
flat from the start means there's no folder for the uploader to flatten.

This is what produced the current image files and CREDITS.md — re-run it
if you add lessons and want to extend the same pipeline. It does NOT
automatically update CREDITS.md or the `image:` fields in the content
files; those still need a manual look (the "best" Wikipedia lead image
isn't always the most fitting one — see the picks in CREDITS.md for the
judgment calls already made).

Usage:  python tools/fetch_images.py
"""

import json
import os
import re
import urllib.parse
import urllib.request

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = PROJECT  # flat, deliberately — see the module docstring above

HEADERS = {"User-Agent": "GreekMythStudyApp/1.0 (personal offline study project)"}

# (lesson_id, Wikipedia article title to pull the lead image from, alt text)
CANDIDATES = [
    ("o-chaos", "Gaia", "Relief of Gaia, the Earth, from the Pergamon Altar"),
    ("o-titans", "Cronus", "Rhea handing Cronus a swaddled stone in place of baby Zeus, Attic vase"),
    ("o-titanomachy", "Titanomachy", "The Fall of the Titans, by Cornelis van Haarlem"),
    ("g-zeus", "Zeus", "The Zeus of Otricoli, a Roman marble copy of a Greek original"),
    ("g-hera", "Hera", "The Hera Campana, Louvre"),
    ("g-poseidon", "Poseidon", "Statue of Poseidon, National Archaeological Museum, Athens"),
    ("g-hades", "Hades", "Hades and Persephone, Attic vase painting"),
    ("g-demeter", "Demeter", "Demeter, Palazzo Altemps"),
    ("g-athena", "Athena", "The Mattei Athena, Louvre"),
    ("g-apollo", "Apollo Belvedere", "The Apollo Belvedere"),
    ("g-artemis", "Artemis", "The Diana of Versailles, Louvre"),
    ("g-ares", "Ares", "The Borghese Ares (Ares Ludovisi)"),
    ("g-aphrodite", "Aphrodite", "The Aphrodite of Cnidus, Palazzo Altemps"),
    ("g-hephaestus", "Hephaestus", "Hephaestus and Thetis, Attic kylix"),
    ("g-hermes", "Hermes", "Hermes Ingenui, a Roman copy after Polykleitos"),
    ("g-dionysus", "Dionysus", "Dionysus, Louvre"),
    ("g-hestia", "Hestia", "The Hestia Giustiniani"),
    ("h-perseus", "Perseus", "Perseus with the head of Medusa, Roman-era statue"),
    ("h-heracles", "Heracles", "The Farnese Hercules"),
    ("h-theseus", "Theseus", "Theseus, Attic kylix by the painter Aison"),
    ("h-jason", "Jason (mythology)", "Jason, Attic cup by Douris"),
    ("h-oedipus", "Oedipus", "Oedipus and the Sphinx, Attic vase"),
    ("h-atalanta", "Atalanta", "Atalanta, Attic lekythos, Cleveland Museum of Art"),
    ("h-daedalus", "Daedalus", "Mosaic of Daedalus, Zeugma Mosaic Museum"),
    ("h-bestiary", "Chimera (mythology)", "The Chimera of Arezzo, an Etruscan bronze"),
    ("t-bronze-age", "Mask of Agamemnon", "The so-called Mask of Agamemnon, Mycenae"),
    ("t-troy", "Trojan Horse", "The Mykonos vase, the earliest known depiction of the Trojan Horse"),
    ("t-dark-age", "Dipylon Amphora", "A Greek grave amphora, 8th century BC"),
    ("t-sparta-athens", "Leonidas I", "A helmed Spartan hoplite statue, often linked to Leonidas"),
    ("t-persian-wars", "Greco-Persian Wars", "A Greek hoplite fighting a Persian warrior, Attic vase"),
    ("t-golden-age", "Parthenon", "The Parthenon, Athens"),
    ("t-peloponnesian-war", "Peloponnesian War", "Map of the opposing alliances in the Peloponnesian War"),
    ("t-alexander", "Alexander the Great", "Alexander the Great, detail of the Alexander Mosaic"),
    # o-division and o-rules deliberately have no image — both are abstract/
    # rules-focused lessons with no single fitting subject.
]


def wiki_summary(title):
    url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(title.replace(" ", "_"))
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.load(resp)


def commons_filename_from_url(url):
    path = urllib.parse.unquote(urllib.parse.urlparse(url).path)
    parts = path.split("/")
    for i, p in enumerate(parts):
        if re.match(r"^\d+px-", p):
            return parts[i - 1]
    return parts[-1]


def commons_extmetadata(filename):
    url = (
        "https://commons.wikimedia.org/w/api.php?action=query&titles="
        + urllib.parse.quote("File:" + filename)
        + "&prop=imageinfo&iiprop=extmetadata&format=json"
    )
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        d = json.load(resp)
    for _, page in d.get("query", {}).get("pages", {}).items():
        info = page.get("imageinfo")
        if info:
            meta = info[0].get("extmetadata", {})
            return {
                "artist": re.sub("<[^>]+>", "", meta.get("Artist", {}).get("value", "")).strip(),
                "license": meta.get("LicenseShortName", {}).get("value", ""),
            }
    return {"artist": "", "license": ""}


def main():
    os.makedirs(IMG_DIR, exist_ok=True)
    for lesson_id, title, alt in CANDIDATES:
        try:
            summary = wiki_summary(title)
            thumb = summary.get("thumbnail", {}).get("source") or summary.get("originalimage", {}).get("source")
            if not thumb:
                print(lesson_id, "NO IMAGE for", title)
                continue
            thumb = thumb.split("?")[0]
            filename = commons_filename_from_url(thumb)
            meta = commons_extmetadata(filename)
            ext = os.path.splitext(thumb)[1].lower() or ".jpg"
            local_path = os.path.join(IMG_DIR, f"{lesson_id}{ext}")
            req = urllib.request.Request(thumb, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            with open(local_path, "wb") as f:
                f.write(data)
            commons_page = "https://commons.wikimedia.org/wiki/File:" + urllib.parse.quote(filename)
            print(f"{lesson_id}: {local_path}  license={meta['license']!r}  artist={meta['artist'][:60]!r}  {commons_page}")
        except Exception as e:
            print(lesson_id, "ERROR", e)


if __name__ == "__main__":
    main()
