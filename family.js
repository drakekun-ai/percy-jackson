/* ============================================================
   family.js — the genealogy behind the Pantheon page. This is
   the "map" of this app: instead of countries on a coastline,
   it's gods and heroes on a family tree.

   Each node: id, name, gen (row, 0 = oldest), parents (ids of
   OTHER NODES only — a mortal or minor second parent is noted
   in `other` as plain text, not drawn as its own node, to keep
   the tree legible), lesson (id into LESSONS, optional),
   mortal (bool, draws a dashed circle), note (boundary-case
   explanation, shown in the side panel).
   ============================================================ */

const FAMILY_TREE = {
  nodes: [
    // gen 0 — before there were sides to be on
    { id: "chaos", name: "Chaos", gen: 0, lesson: "o-chaos", note: "Not a god with a personality — the yawning gap everything else opens out of." },
    { id: "gaia", name: "Gaia", gen: 0, lesson: "o-chaos" },
    { id: "uranus", name: "Uranus", gen: 0, lesson: "o-chaos" },

    // gen 1 — the Titans (only the plot-relevant two get nodes; the rest are covered in the lesson text)
    { id: "kronos", name: "Kronos", gen: 1, parents: ["gaia", "uranus"], lesson: "o-titans" },
    { id: "rhea", name: "Rhea", gen: 1, parents: ["gaia", "uranus"], lesson: "o-titans" },
    { id: "aphrodite", name: "Aphrodite", gen: 1, parents: ["uranus"], lesson: "g-aphrodite", note: "Born from sea-foam where Uranus's severed essence landed — older than the Olympians she sits among, and no one's daughter in the normal sense." },

    // gen 2 — the six siblings swallowed and freed
    { id: "hestia", name: "Hestia", gen: 2, parents: ["kronos", "rhea"], lesson: "g-hestia" },
    { id: "hades", name: "Hades", gen: 2, parents: ["kronos", "rhea"], lesson: "g-hades" },
    { id: "poseidon", name: "Poseidon", gen: 2, parents: ["kronos", "rhea"], lesson: "g-poseidon" },
    { id: "hera", name: "Hera", gen: 2, parents: ["kronos", "rhea"], lesson: "g-hera" },
    { id: "demeter", name: "Demeter", gen: 2, parents: ["kronos", "rhea"], lesson: "g-demeter" },
    { id: "zeus", name: "Zeus", gen: 2, parents: ["kronos", "rhea"], lesson: "g-zeus" },

    // gen 3 — the next generation of Olympians
    { id: "persephone", name: "Persephone", gen: 3, parents: ["zeus", "demeter"], lesson: "g-demeter" },
    { id: "athena", name: "Athena", gen: 3, parents: ["zeus"], lesson: "g-athena", note: "No mother in the normal sense — she came fully grown out of Zeus's skull. He'd swallowed her mother Metis whole first." },
    { id: "ares", name: "Ares", gen: 3, parents: ["zeus", "hera"], lesson: "g-ares" },
    { id: "hephaestus", name: "Hephaestus", gen: 3, parents: ["hera"], other: "some tellings give him no father at all — Hera's own answer to Athena", lesson: "g-hephaestus" },
    { id: "apollo", name: "Apollo", gen: 3, parents: ["zeus"], other: "mother: Leto, a minor Titan", lesson: "g-apollo" },
    { id: "artemis", name: "Artemis", gen: 3, parents: ["zeus"], other: "mother: Leto, a minor Titan", lesson: "g-artemis" },
    { id: "hermes", name: "Hermes", gen: 3, parents: ["zeus"], other: "mother: Maia, a nymph", lesson: "g-hermes" },
    { id: "dionysus", name: "Dionysus", gen: 3, parents: ["zeus"], other: "mother: Semele, a mortal princess", lesson: "g-dionysus", mortal: false, note: "The only Olympian with one mortal parent — which is exactly why his whole myth is about the line between human and divine." },

    // gen 4 — heroes, mostly one divine parent and one mortal
    { id: "perseus", name: "Perseus", gen: 4, parents: ["zeus"], other: "mother: Danaë, a mortal princess", lesson: "h-perseus", mortal: true },
    { id: "heracles", name: "Heracles", gen: 4, parents: ["zeus"], other: "mother: Alcmene, a mortal queen", lesson: "h-heracles", mortal: true },
    { id: "theseus", name: "Theseus", gen: 4, parents: ["poseidon"], other: "also claimed by King Aegeus of Athens, mortal — Athenian myth wanted it both ways", lesson: "h-theseus", mortal: true },
    { id: "jason", name: "Jason", gen: 4, other: "fully mortal — heir to the throne of Iolcus", lesson: "h-jason", mortal: true },
    { id: "atalanta", name: "Atalanta", gen: 4, other: "fully mortal — left exposed on a mountainside as a baby, raised by hunters", lesson: "h-atalanta", mortal: true },
    { id: "oedipus", name: "Oedipus", gen: 4, other: "fully mortal — the prince of Thebes who couldn't outrun a prophecy", lesson: "h-oedipus", mortal: true },
    { id: "daedalus", name: "Daedalus", gen: 4, other: "fully mortal — Athens's greatest craftsman", lesson: "h-daedalus", mortal: true },
  ],
};
