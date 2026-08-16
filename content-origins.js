/* ============================================================
   content-origins.js — Phase 0: The Origins.
   Merges into the global LESSONS object.
   ============================================================ */

var LESSONS = typeof LESSONS === "undefined" ? {} : LESSONS;

LESSONS["o-chaos"] = {
  id: "o-chaos",
  phase: "p0",
  title: "Chaos, Gaia, and the First Family",
  subtitle: "How the Greeks explained the fact that anything exists at all",
  image: { file: "img/o-chaos.jpg", alt: "Relief of Gaia, the Earth, from the Pergamon Altar", artist: "Gryffindor", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_13_detail.jpg" },
  era: "Before time — this is the myth, not a date",
  narrative: [
    "Every mythology has to answer one annoying question first: what was there before there was anything? The Greek answer is Chaos — not \"chaos\" like a messy bedroom, but a yawning, formless gap. No earth, no sky, no gods. Just space with nothing in it yet.",
    "Out of that gap, things start separating themselves out, unprompted, the way oil separates from water. First comes Gaia — the Earth herself, not a ruler of the earth but the actual ground you'd be standing on. Then Tartarus, a pit so far below Gaia that if you dropped an anvil into it, it would fall for nine days before landing. Then Eros, the raw force of attraction that makes things want to combine. Out of Chaos alone also come Erebus (darkness) and Nyx (night) — and Nyx, working solo, produces Day. Nobody had to design any of this. It just happens, like water finding its level.",
    "Gaia then does something that sets the entire rest of Greek mythology in motion: she produces Uranus, the Sky, and — this is the important part — he's her son. She then takes him as a mate. Every single Greek god, without exception, descends from that first, deeply awkward family tree. Incest at the top isn't a scandal to hide; it's just how a world with one landmass and one sky bootstraps a family.",
    { aside: "Why this matters later", text: "Gaia isn't a background character who sets things up and exits. She keeps intervening for the entire mythology — she's the one who eventually turns on both Uranus and Kronos when they each become intolerable. Remember her; she's patient, and she's always still there." },
    "Gaia and Uranus have children: twelve Titans (Kronos and Rhea are the two who matter most for what's coming), plus the three Cyclopes — one-eyed giant smiths — and three Hecatoncheires, monstrous beings with a hundred hands each. And here's where the story turns dark: Uranus hates the Cyclopes and Hecatoncheires on sight. He finds them grotesque. So he shoves them back inside Gaia — back into the Earth itself — and keeps them there.",
    "Gaia is in physical pain, permanently, from carrying her own imprisoned children inside her. So she does what any furious parent would do if she happened to have god-tier powers: she forges a massive sickle, gathers her Titan children, and asks which of them is willing to stop their father. Only one says yes.",
  ],
  facts: [
    { q: "What exists before anything else, according to Greek myth?", a: "Chaos — a formless gap, not a god with a personality" },
    { q: "Who is Gaia?", a: "The Earth itself, one of the first beings to separate out of Chaos" },
    { q: "Who is Uranus, and what is his relationship to Gaia?", a: "The Sky — and Gaia's own son, whom she then takes as a mate" },
    { q: "What does Uranus do to the Cyclopes and Hecatoncheires?", a: "Shoves them back inside Gaia (the Earth) because he finds them monstrous" },
    { q: "What does Gaia forge, and why?", a: "A massive sickle, to arm a child willing to stop Uranus" },
    { q: "What is Tartarus?", a: "A bottomless pit far below the Earth — deep enough that a falling object takes nine days to reach it" },
  ],
  match: [
    { prompt: "What is Tartarus?", answer: "A bottomless pit below the earth", options: ["A bottomless pit below the earth", "The Greek word for chaos", "A mountain where gods live", "A sea monster"] },
    { prompt: "Gaia and Uranus's relationship is:", answer: "Mother and son", options: ["Mother and son", "Siblings", "Unrelated", "Cousins"] },
  ],
  links: [{ id: "o-titans", label: "The Titans" }],
};

LESSONS["o-titans"] = {
  id: "o-titans",
  phase: "p0",
  title: "The Titans and the Fall of Uranus",
  subtitle: "The first coup, and the wound that starts everything else",
  image: { file: "img/o-titans.jpg", alt: "Rhea handing Cronus a swaddled stone in place of baby Zeus, Attic vase", artist: "Attributed to the Nausicaä Painter (Met Museum)", license: "CC0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Rhea_handing_a_swaddled_stone_to_Cronus%2C_Attic_terracotta_pelike%2C_c._460%E2%80%93450_BC%2C_Met_06.1021.144.jpg_%28cropped%29.jpg" },
  era: "Before time",
  narrative: [
    "One Titan says yes to Gaia's plan: Kronos, the youngest and most ambitious of the twelve. Gaia arms him with the sickle, he ambushes his father, and he castrates Uranus — cutting him in a way that permanently ends his ability to rule. Uranus's blood falls on the earth and produces new beings (including the Furies, who exist specifically to punish crimes against family — which is a pointed detail, since Kronos just committed one). Uranus's severed essence falls into the sea, and where the sea foams around it, Aphrodite rises fully formed. She's therefore older than the Olympian generation she later hangs out with — technically an aunt figure who shows up to every party as if she's one of the cousins.",
    "With Uranus out of the way, Kronos takes over as king of the cosmos, and Rhea — his sister — becomes his queen. He frees his Titan siblings, and for a while this looks like a happy ending: the tyrant is gone, replaced by his own children.",
    { aside: "The pattern to notice", text: "This is the first of exactly two identical coups in a row. A parent fears being overthrown, tries to prevent it, and the prevention is what causes it. Watch for the same shape in the very next lesson — Greek myth loves repeating a structure once to teach it, then repeating it again with the stakes higher." },
    "But Kronos got the throne by betraying his own father, and Gaia — along with Uranus, from wherever a deposed sky god goes to sulk — makes him a prophecy: one of his own children will do to him exactly what he did to Uranus. Kronos's solution is not subtle. When his sister-wife Rhea gives birth, he swallows the baby whole, alive, one at a time, as each one is born. Hestia, Hades, Poseidon, Hera, Demeter — one after another, gone.",
    "Rhea is out of patience by the sixth pregnancy. When Zeus is born, she hides him away on the island of Crete and hands Kronos a rock wrapped in a baby blanket instead. Kronos, who has apparently never once looked closely at what he's swallowing, eats the rock without noticing. Zeus grows up in hiding, raised on Crete, while his five siblings sit — alive, aware, but trapped — inside their father.",
  ],
  facts: [
    { q: "Which Titan overthrows Uranus, and how?", a: "Kronos — he castrates him with a sickle Gaia forged" },
    { q: "How is Aphrodite born?", a: "From the sea foam where Uranus's severed essence fell into the ocean" },
    { q: "What prophecy is made about Kronos?", a: "That one of his own children will overthrow him, just as he overthrew his father" },
    { q: "How does Kronos try to prevent the prophecy?", a: "He swallows each of his children whole, alive, as soon as they're born" },
    { q: "How does Rhea save Zeus?", a: "She hides him on Crete and tricks Kronos into swallowing a rock wrapped in a blanket instead" },
    { q: "Name the five siblings Kronos swallowed before Zeus.", a: "Hestia, Hades, Poseidon, Hera, and Demeter" },
  ],
  match: [
    { prompt: "Aphrodite's birth makes her:", answer: "Older than the Olympian generation", options: ["Older than the Olympian generation", "Zeus's daughter", "A Titan by blood", "Younger than Dionysus"] },
    { prompt: "What does Rhea give Kronos in place of baby Zeus?", answer: "A rock wrapped in a blanket", options: ["A rock wrapped in a blanket", "A wooden doll", "Nothing — she simply hid Zeus", "A goat"] },
  ],
  links: [{ id: "o-chaos" }, { id: "o-titanomachy", label: "The Titanomachy" }],
};

LESSONS["o-titanomachy"] = {
  id: "o-titanomachy",
  phase: "p0",
  title: "The Titanomachy",
  subtitle: "Zeus comes back for his siblings, and the war lasts ten years",
  image: { file: "img/o-titanomachy.jpg", alt: "The Fall of the Titans, by Cornelis van Haarlem", artist: "Cornelis van Haarlem", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg" },
  era: "Before time",
  narrative: [
    "Zeus grows up on Crete without his father knowing he exists. As an adult, he returns — sometimes the story has him working as Kronos's cupbearer in disguise — and slips his father a drink laced with a substance that makes him vomit up everything he swallowed. They come back up in the exact reverse of the order they went down, like the last plate off a stack: Demeter first, then Hera, Poseidon, and Hades — and Hestia dead last, since she was swallowed first and sat at the very bottom the whole time. That's the detail worth holding onto: Hestia is simultaneously Kronos and Rhea's first-born and, by the moment she's freed, the last one out — which is exactly why some traditions call her both the eldest and the youngest Olympian at once.",
    "Six against one should be an easy fight, except it isn't, because Kronos is a Titan and Titans are not pushovers. He rallies most of the other Titans behind him, and what follows is the Titanomachy: a ten-year war for control of the universe, gods versus Titans, fought from Mount Olympus and Mount Othrys.",
    "It stays a stalemate until Zeus does something genuinely clever: he goes back down to Tartarus and frees the Cyclopes and Hecatoncheires — the monstrous siblings Uranus locked away back in the first lesson, whom Kronos never bothered to release either. Grateful, the Cyclopes forge weapons for the young gods: Zeus's thunderbolt, Poseidon's trident, and a helm of invisibility for Hades. The Hecatoncheires, each with a hundred hands, join the fight and start throwing mountains as projectiles.",
    { aside: "Why this decision matters", text: "Notice what actually wins the war: not brute force from the six gods, but freeing the prisoners everyone else had written off and abandoned. That's a recurring value in Greek myth — the powerful figure who shows mercy to someone locked away often gets repaid with exactly the advantage that decides everything." },
    "With that firepower, the gods win. The defeated Titans are imprisoned in Tartarus, guarded by the Hecatoncheires — the same beings who'd been imprisoned there themselves a generation earlier. A few Titans who stayed neutral or helped Zeus, like Prometheus and the ocean Titan Oceanus, are spared. The age of the Titans is over. The age of the Olympians begins.",
  ],
  facts: [
    { q: "How does Zeus free his swallowed siblings?", a: "He tricks Kronos into drinking something that makes him vomit them up" },
    { q: "What is the Titanomachy?", a: "The ten-year war between the Olympian gods and the Titans" },
    { q: "What turns the war in the gods' favor?", a: "Zeus frees the Cyclopes and Hecatoncheires from Tartarus, and they forge weapons and fight for him" },
    { q: "What weapon do the Cyclopes forge for Zeus?", a: "The thunderbolt" },
    { q: "What do the Cyclopes forge for Poseidon and Hades?", a: "Poseidon's trident and Hades's helm of invisibility" },
    { q: "Where are the defeated Titans imprisoned, and by whom?", a: "In Tartarus, guarded by the Hecatoncheires" },
    { q: "In what order do the five siblings come back out, and who's last?", a: "The exact reverse of swallowing order — Demeter, Hera, Poseidon, Hades, then Hestia last, since she went in first and sat at the bottom" },
  ],
  match: [
    { prompt: "Who forges the Olympians' signature weapons?", answer: "The Cyclopes", options: ["The Cyclopes", "Hephaestus", "The Hecatoncheires", "Prometheus"] },
    { prompt: "How long does the Titanomachy last?", answer: "Ten years", options: ["Ten years", "One day", "A hundred years", "Three years"] },
    { prompt: "Which sibling is vomited up last, because she was swallowed first?", answer: "Hestia", options: ["Hestia", "Demeter", "Hera", "Poseidon"] },
  ],
  links: [{ id: "o-titans" }, { id: "o-division", label: "Dividing the World" }],
};

LESSONS["o-division"] = {
  id: "o-division",
  phase: "p0",
  title: "Dividing the World",
  subtitle: "Three brothers draw lots for everything that exists",
  era: "Before time",
  narrative: [
    "War won, the three brothers — Zeus, Poseidon, and Hades — have to decide who rules what. They don't fight over it and they don't let birth order settle it either, even though Hades is technically the eldest (he just came out of Kronos last, having gone in first). Instead they draw lots. Zeus gets the sky and becomes king of the gods. Poseidon gets the sea. Hades gets the underworld — the realm of the dead. The earth and Mount Olympus itself are considered common ground, belonging to all three.",
    "Hades essentially loses the draw and knows it. He doesn't attend Olympian councils, doesn't marry into Olympian politics for a long time, and rules a kingdom nobody wants to visit. This is exactly why lists of \"the twelve Olympians\" almost never include him — he's a full sibling, just as powerful, but he lives downstairs and nobody invites him to the parties. Keep that distinction in mind: it trips people up constantly.",
    "Zeus becomes king not because he's the strongest fighter — Poseidon and Hades are just as strong — but because he was the one who organized the rescue and the war. Power in this family runs on competence and alliances as much as raw strength, which is a very Greek idea: even gods have to build a coalition.",
    { aside: "The rules of being a god", text: "A few things are true for every god from here on. They're immortal, but not invulnerable to pain — they can be wounded and it hurts, they just can't die from it. They eat ambrosia and drink nectar instead of human food; a mortal who eats it can be badly burned or even killed. Gods bleed ichor, a golden fluid, instead of blood. And an oath sworn on the River Styx is absolutely unbreakable — even for a god, breaking it brings catastrophic punishment. That single rule (the Styx oath) drives the plot of dozens of later myths, so it's worth remembering on its own." },
    "Olympus is established as the gods' home — a mountain in Greece in the literal telling, but functionally more like a palace that exists slightly outside normal geography. It has a throne room, and the twelve major seats in it are the twelve Olympians proper, a list that changes over time (a later lesson covers exactly who's in and who's out, and why).",
  ],
  facts: [
    { q: "How do Zeus, Poseidon, and Hades divide the cosmos?", a: "They draw lots" },
    { q: "What does each of the three brothers get?", a: "Zeus: the sky. Poseidon: the sea. Hades: the underworld" },
    { q: "Why is Hades usually left off lists of the twelve Olympians?", a: "He rules the underworld and doesn't live on Olympus or attend its councils, despite being a full sibling" },
    { q: "What do gods bleed instead of blood?", a: "Ichor, a golden fluid" },
    { q: "What happens if a god breaks an oath sworn on the River Styx?", a: "It brings catastrophic, unbreakable punishment — it's the one rule even gods can't get around" },
    { q: "What do gods eat and drink instead of human food?", a: "Ambrosia and nectar" },
  ],
  match: [
    { prompt: "Who gets the sea in the division of the cosmos?", answer: "Poseidon", options: ["Poseidon", "Hades", "Zeus", "Oceanus"] },
    { prompt: "What is the one oath even gods cannot break without catastrophic consequence?", answer: "An oath sworn on the River Styx", options: ["An oath sworn on the River Styx", "An oath sworn on Olympus", "A promise made to Gaia", "A promise made at a wedding"] },
  ],
  links: [{ id: "o-titanomachy" }, { id: "o-rules", label: "How These Stories Work" }],
};

LESSONS["o-rules"] = {
  id: "o-rules",
  phase: "p0",
  title: "How These Stories Actually Work",
  subtitle: "Hubris, xenia, fate, and prophecy — the operating system under every myth that follows",
  era: "Before time",
  narrative: [
    "Before diving into individual gods and heroes, it helps to know the unwritten rules every Greek story is quietly obeying. Skip this lesson and half of what happens later will feel arbitrary. Learn it and suddenly every myth makes the same kind of sense.",
    "First: hubris. It gets translated as \"pride,\" but that undersells it — hubris specifically means acting as though you're above the gods, or humiliating someone in a way that denies their dignity. It's not ambition, and it's not confidence. It's the specific act of forgetting your place in the hierarchy. Nearly every mortal who gets destroyed in Greek myth (and quite a few gods who get punished by other gods) is punished for hubris, not for being evil in some general sense.",
    "Second: xenia, guest-friendship. In a world without hotels, police, or reliable roads, the rule was that you took in travelers, fed them, and protected them — no questions asked — because you might be the traveler next time. Gods disguised themselves as beggars specifically to test it. Break xenia — abuse a guest, or abuse your role as a host — and you're marked for punishment as surely as if you'd insulted a god directly, because you basically did.",
    { aside: "Fate versus the gods", text: "Even Zeus cannot cancel a fate once the Fates — three sister-goddesses who spin, measure, and cut the thread of every life — have set it. Gods can delay a fate, disguise it, or make its arrival more painful, but they cannot undo it. This is why prophecies in Greek myth always come true, and always in a way nobody saw coming: the character who hears a prophecy and tries to dodge it is usually the exact person who makes it happen." },
    "Third, prophecy: it is never wrong, and the attempt to avoid it is always what causes it. Oedipus (later lesson) is the cleanest example, but it's everywhere — Kronos swallowing his children to dodge a prophecy is what guarantees Zeus grows up secretly and comes back furious. Once you know this rule, you can predict the shape of a huge number of Greek myths before you're told the ending.",
    "Last: the gods are not role models and the myths don't pretend otherwise. They're petty, jealous, vain, and vindictive as often as they're wise or just. That's not a flaw in the storytelling — it's the point. Greek religion wasn't asking \"how do I become like the gods,\" it was asking \"how do I survive living under forces this powerful and this unpredictable.\" Every rule above — respect the hierarchy, take in the stranger, don't fight what's fated — is survival advice dressed up as a story.",
  ],
  facts: [
    { q: "What is hubris?", a: "Acting as if you're above the gods, or humiliating someone in a way that denies their dignity — not just general pride" },
    { q: "What is xenia?", a: "Guest-friendship — the obligation to take in and protect travelers, which gods sometimes test in disguise" },
    { q: "Can even Zeus undo a fate set by the Fates?", a: "No — gods can delay or disguise a fate but cannot cancel it" },
    { q: "What almost always happens when a character tries to avoid a prophecy?", a: "The attempt to avoid it is exactly what causes it to come true" },
    { q: "Are the Greek gods generally portrayed as moral role models?", a: "No — they are often petty, jealous, and vindictive; the myths use them to explore how to survive under unpredictable power, not to model good behavior" },
  ],
  match: [
    { prompt: "Which concept describes acting as if you're above the gods?", answer: "Hubris", options: ["Hubris", "Xenia", "Fate", "Nemesis"] },
    { prompt: "Which concept describes the duty to protect a traveling stranger?", answer: "Xenia", options: ["Xenia", "Hubris", "Fate", "Nectar"] },
  ],
  links: [{ id: "o-division" }, { id: "g-zeus", label: "Zeus" }],
};
