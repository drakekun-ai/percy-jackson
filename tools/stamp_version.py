"""
stamp_version.py — bumps the ?v= cache-buster on every local <script>/<link>
reference AND bumps the service worker's CACHE name in sw.js, in one step.

Run this after changing any .js or .css file, before committing:

    python tools/stamp_version.py

Why both matter: browsers (and the installed phone app's service worker)
aggressively cache these files. The ?v= bump forces a normal browser to
refetch; the CACHE name bump is what makes the *service worker* throw away
its old precached copies and install the new ones — skip that half and an
already-installed phone app keeps running the old version indefinitely,
even after you've pushed new lessons.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

HTML_FILES = ["index.html", "lessons.html", "lesson.html", "review.html", "pantheon.html"]
SW_FILE = "sw.js"

VERSION_PATTERN = re.compile(r'\?v=(\d+)')
CACHE_PATTERN = re.compile(r'(const CACHE = "greek-myth-v)(\d+)(";)')


def current_version():
    text = (ROOT / SW_FILE).read_text(encoding="utf-8")
    m = CACHE_PATTERN.search(text)
    if not m:
        raise SystemExit("Could not find CACHE constant in sw.js")
    return int(m.group(2))


def main():
    old = current_version()
    new = old + 1

    for fn in HTML_FILES:
        path = ROOT / fn
        text = path.read_text(encoding="utf-8")
        new_text = VERSION_PATTERN.sub(f"?v={new}", text)
        if new_text != text:
            path.write_text(new_text, encoding="utf-8")
            print(f"{fn}: v{old} -> v{new}")

    sw_path = ROOT / SW_FILE
    sw_text = sw_path.read_text(encoding="utf-8")
    sw_text = CACHE_PATTERN.sub(rf"\g<1>{new}\3", sw_text)
    sw_path.write_text(sw_text, encoding="utf-8")
    print(f"sw.js: greek-myth-v{old} -> greek-myth-v{new}")


if __name__ == "__main__":
    main()
