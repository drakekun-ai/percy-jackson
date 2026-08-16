/* ============================================================
   content-threads.js — Phase 3: The Threads (real history).
   Merges into the global LESSONS object.
   ============================================================ */

var LESSONS = typeof LESSONS === "undefined" ? {} : LESSONS;

LESSONS["t-bronze-age"] = {
  id: "t-bronze-age",
  phase: "p3",
  title: "Before Greece: Minoans and Mycenaeans",
  subtitle: "Two real Bronze Age civilizations that the myths remember as a golden age",
  image: { file: "t-bronze-age.jpg", alt: "The so-called Mask of Agamemnon, Mycenae", artist: "Gleb Simonov", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Athens_%E2%80%94_Mask_of_Agamemnon.jpg" },
  era: "c. 3000–1100 BCE",
  where: "Crete, the Peloponnese (Mycenae, Pylos, Tiryns)",
  narrative: [
    "This is where mythology and archaeology start overlapping. Long before \"Greece\" as a unified idea existed, two real Bronze Age civilizations dominated the region — and the myths you've just spent two phases learning are, in part, folk memory of these two, dressed up centuries later.",
    "The Minoans, centered on the island of Crete, come first — a sophisticated, wealthy trading civilization with enormous unwalled palaces (Knossos, most famously), advanced plumbing, and a script called Linear A that still isn't fully deciphered. Their art is full of bulls: bull-leaping frescoes, bull figurines, bull-horn architecture. Notice that: a civilization genuinely obsessed with bulls, centered on a labyrinthine multi-room palace at Knossos, ruled in myth by a king named Minos — and the myth of the Minotaur, trapped in a labyrinth on Crete, suddenly looks less like pure invention and more like an exaggerated folk memory of an actual place. Minoan civilization declines sharply after a massive volcanic eruption on the nearby island of Thera (Santorini) around 1600 BCE, followed later by Mycenaean takeover of Crete itself.",
    { aside: "Why 'Mycenaean' at all", text: "The Mycenaeans are named after Mycenae, their most powerful city, which — not coincidentally — is the exact city Perseus is credited with founding in myth. Mycenaean Greece was a network of fortified, warrior-aristocratic palace-kingdoms (Mycenae, Pylos, Tiryns, Thebes), each ruled by a king (a wanax) with a heavily bureaucratic palace economy tracked in a script called Linear B — which, unlike Linear A, has been deciphered, and turns out to be an early form of Greek. That's the single most important fact in this lesson: the language in the palace record-tablets is recognizably Greek, meaning Mycenaean civilization is the real, direct ancestor of the Greek world, not a separate unrelated culture." },
    "Mycenaean civilization dominates mainland Greece for roughly 1600–1100 BCE — the same rough window myth assigns to the age of heroes: Heracles, Theseus, Jason, and the Trojan War all get placed by later Greek storytellers in this general era, treating it as their own legendary past the same way modern culture treats certain historical periods as more heroic and larger-than-life than the present. Then, around 1100 BCE, Mycenaean civilization collapses — the palaces are destroyed or abandoned, Linear B writing disappears entirely, and Greece enters a genuine dark age, covered in the next lesson.",
  ],
  facts: [
    { q: "What are the two real Bronze Age civilizations behind Greek myth's 'age of heroes'?", a: "The Minoans (Crete) and the Mycenaeans (mainland Greece)" },
    { q: "What does Minoan art's obsession with bulls, and the palace at Knossos, suggest about the Minotaur myth?", a: "That it's likely an exaggerated folk memory of a real bull-focused Minoan civilization centered on a large, maze-like palace" },
    { q: "What is Linear B, and why does it matter?", a: "A deciphered Mycenaean script that turns out to be an early form of Greek — proof Mycenaean civilization is the direct ancestor of the Greek world" },
    { q: "Which real city is Mycenaean civilization named after, and who founds it in myth?", a: "Mycenae — founded by Perseus in myth" },
    { q: "What happens to Mycenaean civilization around 1100 BCE?", a: "It collapses — palaces destroyed or abandoned, and Linear B writing disappears" },
  ],
  match: [
    { prompt: "Linear B, once deciphered, turned out to be an early form of:", answer: "Greek", options: ["Greek", "Egyptian", "Phoenician", "Hittite"] },
    { prompt: "The Minoan civilization was centered on the island of:", answer: "Crete", options: ["Crete", "Rhodes", "Cyprus", "Delos"] },
  ],
  links: [{ id: "h-theseus" }, { id: "h-perseus" }, { id: "t-troy" }, { id: "t-dark-age" }],
};

LESSONS["t-troy"] = {
  id: "t-troy",
  phase: "p3",
  title: "The Trojan War",
  subtitle: "Where Homer's epic meets an actual archaeological site — and where they diverge",
  image: { file: "t-troy.jpg", alt: "The Mykonos vase, the earliest known depiction of the Trojan Horse", artist: "Travelling Runes", license: "CC BY-SA 2.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Mykonos_vase.jpg" },
  era: "Traditionally dated c. 1250–1180 BCE",
  where: "Troy (Hisarlik, northwest Turkey)",
  narrative: [
    "The Trojan War is the hinge this entire course has been pointing toward: it's the story where mythology's gods and Bronze Age Mycenaean history collide most directly, immortalized in Homer's Iliad (which covers only a few weeks near the end of a ten-year siege) and Odyssey (which covers one Greek's ten-year journey home afterward).",
    "The myth's cause, as covered earlier, is the Judgment of Paris: Aphrodite bribes Paris of Troy with Helen, the most beautiful woman alive — already married to Menelaus, king of Sparta. Paris takes Helen to Troy (willingly or by abduction, depending on the telling), and Menelaus's brother Agamemnon, king of Mycenae, assembles a massive coalition of Greek kings to besiege Troy and get her back. Achilles, the greatest Greek warrior, and Hector, Troy's greatest defender and Paris's brother, anchor the two sides; the gods themselves take sides too — Hera and Athena for the Greeks (still bitter about losing the beauty contest), Aphrodite and Ares for Troy.",
    { aside: "The Trojan Horse and the Wooden Horse of history", text: "The war's ending is the most famous trick in all of Greek myth: the Greeks build a massive hollow wooden horse, hide their best soldiers inside it, and pretend to sail away, leaving the horse as a supposed offering. The Trojans drag it inside their own walls. That night, the hidden soldiers emerge and open the gates for the returning Greek army. Troy is burned to the ground. It's the origin of 'beware Greeks bearing gifts' and of 'Trojan horse' as a term for any hidden internal threat — vocabulary still in daily use roughly three thousand years later." },
    "Here's the genuinely striking part: Troy is a real place. Archaeologists have excavated a site called Hisarlik in northwest Turkey since the 1870s and found multiple destroyed and rebuilt cities layered on top of each other across centuries. One layer, conventionally called Troy VII, shows real evidence of a violent destruction around the traditional Bronze Age date for the war. Whether that destruction was actually caused by a Greek coalition over a stolen queen is unprovable and, honestly, unlikely in every mythologized detail — but a real war (or wars) over a real, wealthy, strategically located city at roughly the right time looks entirely plausible to most historians. Homer, writing centuries later, is best understood as compressing generations of half-remembered Mycenaean-era conflict into one legendary ten-year siege built around a small number of unforgettable characters.",
    "Achilles dies before the city falls (shot in his one vulnerable spot, the heel, by Paris — with Apollo's help, in most versions) and Ajax, Odysseus, and the rest of the Greek coalition scatter home afterward, several to disastrous ends. Odysseus's own ten-year journey home, tormented by Poseidon, is the subject of the Odyssey and worth knowing as its own story on your own time — this course's roadmap has room for it.",
  ],
  facts: [
    { q: "What two Homeric epics cover the Trojan War and its aftermath?", a: "The Iliad (the siege) and the Odyssey (Odysseus's journey home)" },
    { q: "What is the mythic cause of the Trojan War?", a: "Paris of Troy takes Helen, already married to Menelaus of Sparta, after Aphrodite bribes him with her in the Judgment of Paris" },
    { q: "Who leads the Greek coalition, and why him specifically?", a: "Agamemnon, king of Mycenae — Menelaus's brother" },
    { q: "How does the Trojan War myth end?", a: "The Greeks trick Troy with a hollow wooden horse hiding soldiers inside, then burn the city after being let in at night" },
    { q: "Is Troy a real archaeological site?", a: "Yes — Hisarlik in northwest Turkey, excavated since the 1870s, with a destruction layer (Troy VII) around the traditional date of the war" },
    { q: "How do most historians interpret the relationship between Homer's account and the archaeology?", a: "Homer likely compressed generations of real Mycenaean-era conflict over a real, strategically important city into one legendary siege" },
    { q: "How does Achilles die?", a: "Shot in his one vulnerable spot, the heel, by Paris (with Apollo's help in most versions)" },
  ],
  match: [
    { prompt: "The real archaeological site associated with Troy is called:", answer: "Hisarlik", options: ["Hisarlik", "Knossos", "Mycenae", "Ephesus"] },
    { prompt: "Which god helps Paris kill Achilles?", answer: "Apollo", options: ["Apollo", "Ares", "Aphrodite", "Poseidon"] },
  ],
  links: [{ id: "g-aphrodite" }, { id: "g-hera" }, { id: "t-bronze-age" }, { id: "h-bestiary" }],
};

LESSONS["t-dark-age"] = {
  id: "t-dark-age",
  phase: "p3",
  title: "The Dark Age and the Rise of the Polis",
  subtitle: "Three hundred years of near-silence, then city-states, an alphabet, and colonies everywhere",
  image: { file: "t-dark-age.jpg", alt: "A Greek grave amphora, 8th century BC", artist: "George E. Koronaios", license: "CC BY-SA 4.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Grave_amphora._8th_cent._B.C.jpg" },
  era: "c. 1100–800 BCE (Dark Age); city-states emerge c. 800 BCE onward",
  where: "Mainland Greece and the wider Aegean",
  narrative: [
    "After Mycenaean collapse around 1100 BCE, Greece goes dark in the most literal historical sense: writing disappears (Linear B dies with the palace bureaucracies that used it), population drops, monumental building stops, and trade contracts sharply. Historians call this roughly three-hundred-year stretch the Greek Dark Age, and it's genuinely dark to us too — very little written or archaeological evidence survives, which is exactly why the Trojan War and the age of heroes could get mythologized so heavily afterward: nobody alive when the myths were finally written down had reliable records of what had actually happened centuries earlier.",
    "What emerges from the other side, starting around 800 BCE, is something new: the polis, or city-state — a self-governing community built around a central city, its own laws, and its own citizen identity, rather than one unified Greek nation. This is the single most important structural fact about ancient Greece: it was never one country. It was hundreds of independent, often rival, city-states that happened to share a language, a religion, and a mythology, which is exactly why the next several lessons are about Greek cities fighting each other as often as fighting outsiders.",
    { aside: "The alphabet arrives", text: "Somewhere in this period, the Greeks adapt the Phoenician alphabet — crucially adding vowels, which Phoenician writing didn't use — creating the first alphabet efficient enough for widespread literacy. It's the direct ancestor of the alphabet this sentence is written in. Homer's epics, composed orally for generations, are finally written down using this new script, which is a large part of why they survived at all." },
    "Population pressure and land shortage in this period also drive a massive wave of Greek colonization: cities send out expeditions that found new, independent poleis all around the Mediterranean and Black Sea coasts — southern Italy and Sicily (\"Magna Graecia\"), the coast of modern Turkey, the Black Sea rim. This is why Greek culture, language, and myth show up archaeologically far outside modern Greece's borders: it isn't later empire-building, it's genuinely early, deliberate city-founding on a huge scale.",
  ],
  facts: [
    { q: "What happens to writing in Greece after the Mycenaean collapse?", a: "It disappears entirely for roughly three centuries — the Greek Dark Age" },
    { q: "What is a polis?", a: "A self-governing Greek city-state, with its own laws and citizen identity" },
    { q: "Why is 'Greece was never one country' the key structural fact of this era?", a: "Because it explains why so much later Greek history is city-states fighting each other, not a unified nation acting as one" },
    { q: "What writing system do the Greeks adapt during this period, and what do they add to it?", a: "The Phoenician alphabet, adding vowels for the first time" },
    { q: "What drives the wave of Greek colonization across the Mediterranean and Black Sea?", a: "Population pressure and land shortage at home" },
  ],
  match: [
    { prompt: "The Greeks adapted their alphabet from the:", answer: "Phoenicians", options: ["Phoenicians", "Egyptians", "Persians", "Minoans"] },
    { prompt: "A self-governing Greek city-state is called a:", answer: "Polis", options: ["Polis", "Agora", "Demos", "Ecclesia"] },
  ],
  links: [{ id: "t-bronze-age" }, { id: "t-sparta-athens" }],
};

LESSONS["t-sparta-athens"] = {
  id: "t-sparta-athens",
  phase: "p3",
  title: "Sparta and Athens: Two Different Greeces",
  subtitle: "Same language, same gods, radically different answers to how a society should work",
  image: { file: "t-sparta-athens.jpg", alt: "A helmed Spartan hoplite statue, often linked to Leonidas", artist: "Ticinese", license: "CC BY-SA 3.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Helmed_Hoplite_Sparta.JPG" },
  era: "c. 800–500 BCE",
  where: "Sparta (Laconia), Athens (Attica)",
  narrative: [
    "Understanding Sparta and Athens side by side matters more than understanding either alone, because nearly everything interesting about each city only makes sense as a reaction to a shared starting point and a completely different set of choices from there.",
    "Sparta conquers its neighboring region, Messenia, and instead of ruling it loosely, turns the entire conquered population into helots — state-owned serfs, permanently enslaved, who vastly outnumber actual Spartan citizens. That constant, structural fear of a helot uprising is the single fact that explains everything else about Sparta: the entire citizen society reorganizes itself into a permanent military machine to keep control. Every Spartan boy is taken from his family at age seven and raised communally in the agoge, a brutally harsh training system built to produce soldiers who value discipline and the group over the individual, above nearly everything else. Spartan citizens don't work; helots and a separate merchant class (perioikoi) handle all of that, freeing every citizen male for lifelong military service.",
    { aside: "Athenian democracy, the short version", text: "Athens goes the opposite direction. After a period of rule by aristocrats and then tyrants, a reformer named Cleisthenes reorganizes the city around 508 BCE into what's usually called the birth of democracy — direct rule by the citizen assembly (all adult male citizens, a much narrower group than 'everyone' by modern standards, but revolutionary for the time), voting directly on laws and policy rather than through representatives. It's messy, occasionally mob-driven, and excludes women, slaves, and foreigners entirely — but it's a genuinely new idea in how a state can be run, and the word itself, dēmokratia (\"rule of the people\"), is Athenian coinage that the modern world still uses unchanged." },
    "Neither city thought of itself as flawed compared to the other — Spartans saw Athenian democracy as chaotic and soft; Athenians saw Spartan life as grim and joyless. Both cities will eventually need each other to survive an outside threat far bigger than their rivalry (next lesson), and then, a few decades after that, turn that same rivalry into the war that ends the golden age of both of them (two lessons ahead).",
  ],
  facts: [
    { q: "What is a helot, and why does the helot population shape all of Spartan society?", a: "A state-owned serf from conquered Messenia; the constant fear of a helot uprising, since they vastly outnumbered citizens, drove Sparta to organize itself as a permanent military society" },
    { q: "What is the agoge?", a: "Sparta's brutal, compulsory, communal training system for boys starting at age seven, built to produce disciplined soldiers" },
    { q: "Who reorganizes Athens into what's usually called the birth of democracy, and around when?", a: "Cleisthenes, around 508 BCE" },
    { q: "What does 'dēmokratia' mean, and who coined it?", a: "'Rule of the people' — Athenian coinage" },
    { q: "Did Athenian democracy include women, slaves, or foreigners?", a: "No — it was limited to adult male citizens, still revolutionary for its time but far narrower than modern democracy" },
  ],
  match: [
    { prompt: "Sparta's harsh state-run training system for boys is called the:", answer: "Agoge", options: ["Agoge", "Ecclesia", "Gerousia", "Ephorate"] },
    { prompt: "Athens's state-owned serf class, the Spartan equivalent, was drawn from the conquered region of:", answer: "Messenia", options: ["Messenia", "Boeotia", "Attica", "Laconia"] },
  ],
  links: [{ id: "t-dark-age" }, { id: "t-persian-wars" }, { id: "t-peloponnesian-war" }],
};

LESSONS["t-persian-wars"] = {
  id: "t-persian-wars",
  phase: "p3",
  title: "The Persian Wars",
  subtitle: "Marathon, Thermopylae, Salamis — the underdog fight that made 'Greek' mean something",
  image: { file: "t-persian-wars.jpg", alt: "A Greek hoplite fighting a Persian warrior, Attic vase", artist: "Unknown", license: "CC0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Greek-Persian_duel_1.jpg" },
  era: "499–449 BCE",
  where: "Marathon, Thermopylae, Salamis, Plataea",
  narrative: [
    "The Persian Empire, by 500 BCE, is the largest empire the world has yet seen — stretching from Egypt to India — and Greece is, by comparison, a scattering of small, quarrelsome city-states. When Athens supports a failed revolt by Greek cities under Persian rule in Anatolia, the Persian king Darius I decides to punish Athens directly. This is, on paper, not supposed to be close.",
    "In 490 BCE, a Persian force lands at Marathon, north of Athens. The heavily outnumbered Athenian army (with a small force from Plataea) attacks first rather than waiting to be besieged, using a stronger center-refused, wing-heavy formation, and wins decisively. Tradition credits a messenger named Pheidippides with running the roughly 26 miles back to Athens to announce victory before collapsing dead — the origin, symbolically at least, of the modern marathon race.",
    { aside: "Thermopylae — the loss that mattered more than most wins", text: "Ten years later, Darius's son Xerxes invades with a vastly larger force. A small allied Greek force, famously including 300 Spartans under King Leonidas, holds the narrow coastal pass at Thermopylae for three days against overwhelming numbers, buying critical time for the rest of Greece to prepare, before being betrayed by a local who reveals a mountain path allowing Persians to outflank them. The defenders are wiped out. It's a battlefield loss that became one of history's most durable symbols of buying time through sacrifice — still invoked, constantly, as shorthand for exactly that idea." },
    "The war turns at sea. Themistocles, an Athenian statesman, convinces Athens to invest heavily in a navy and lures the much larger Persian fleet into the narrow straits of Salamis, where its size becomes a liability rather than an advantage; the more maneuverable Greek ships win decisively. A final land victory at Plataea in 479 BCE finishes the Persian invasion for good.",
    "The consequences run deep: Greek city-states, especially Athens, come out of this with a powerful shared identity as defenders of Greek freedom against an overwhelming outside power, and Athens specifically converts its wartime naval leadership into the Delian League — an alliance that, over the following decades, quietly turns into an Athenian empire in all but name, funding the very Golden Age covered in the next lesson.",
  ],
  facts: [
    { q: "Why does Persia invade Greece?", a: "In part to punish Athens for supporting a failed revolt by Greek cities under Persian rule" },
    { q: "What happens at the Battle of Marathon (490 BCE)?", a: "A heavily outnumbered Athenian force attacks first and wins decisively, inspiring the origin story of the modern marathon race" },
    { q: "What happens at Thermopylae?", a: "A small Greek force, including 300 Spartans under Leonidas, holds a narrow pass for three days before being outflanked and wiped out — buying time for the rest of Greece" },
    { q: "How is the Battle of Salamis won?", a: "Themistocles lures the larger Persian fleet into narrow straits where its size becomes a liability, and the more maneuverable Greek ships win" },
    { q: "What Athenian-led alliance emerges from the war, and what does it become?", a: "The Delian League — which gradually turns into an Athenian empire in all but name" },
  ],
  match: [
    { prompt: "Who leads the Spartan force at Thermopylae?", answer: "Leonidas", options: ["Leonidas", "Themistocles", "Miltiades", "Pausanias"] },
    { prompt: "The naval battle where the Greeks defeat the much larger Persian fleet is:", answer: "Salamis", options: ["Salamis", "Marathon", "Plataea", "Mycale"] },
  ],
  links: [{ id: "t-sparta-athens" }, { id: "t-golden-age" }],
};

LESSONS["t-golden-age"] = {
  id: "t-golden-age",
  phase: "p3",
  title: "The Golden Age of Athens",
  subtitle: "Democracy, the Parthenon, and the birth of Western philosophy and theatre — all in about fifty years",
  image: { file: "t-golden-age.jpg", alt: "The Parthenon, Athens", artist: "Steve Swayne", license: "CC BY 2.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg" },
  era: "c. 479–431 BCE",
  where: "Athens",
  narrative: [
    "Riding the prestige and the very real cash from leading the Delian League, Athens spends roughly the next half-century producing a concentration of achievement that's genuinely hard to overstate. Under the statesman Pericles — elected general fifteen times in a row and Athens's dominant political voice for over thirty years — Athens rebuilds and radically expands, funded partly by League treasury funds technically meant for shared defense, which is a real controversy at the time as well as now.",
    "The Parthenon, the temple to Athena crowning the Acropolis, is built in this period — a structure so architecturally refined that its columns actually curve almost imperceptibly to correct for optical illusions that would otherwise make straight lines look bowed. It's a fitting monument for a city that, in this same window, produces Socrates (who leaves no writings but teaches through relentless public questioning, and gets executed near the end of the century for 'corrupting the youth' and impiety), the historians Herodotus and Thucydides (essentially inventing history-writing as a discipline), and dramatists like Sophocles and Euripides, whose tragedies (including Oedipus, from an earlier lesson) are still performed today.",
    { aside: "Democracy at its most direct", text: "This is peak Athenian democracy in action: the Assembly, open to any adult male citizen, met roughly 40 times a year to vote directly on laws, war, and policy. Many public offices were filled by lottery rather than election, on the theory that any citizen should be capable of serving — a strikingly different idea of political equality than nearly any government before or since." },
    "None of this happens in isolation from power politics, though — Athenian wealth and confidence in this period come directly from an empire it's built on the backs of allied cities that increasingly resent paying tribute for protection they no longer feel they need. That resentment, and Sparta's growing alarm at Athenian power, is exactly what the next lesson turns into a war that ends the golden age less than fifty years after it starts.",
  ],
  facts: [
    { q: "Who dominates Athenian politics through most of this golden age?", a: "Pericles" },
    { q: "What major building project defines this era?", a: "The Parthenon, the temple to Athena on the Acropolis" },
    { q: "Name two intellectual figures produced by Athens in this period and what they're known for.", a: "Socrates (public philosophical questioning); Herodotus or Thucydides (essentially inventing history-writing); Sophocles or Euripides (tragic drama)" },
    { q: "How were many Athenian public offices filled, and what idea did that reflect?", a: "By lottery — reflecting the idea that any citizen should be capable of serving" },
    { q: "Where does the wealth funding Athens's golden age actually come from?", a: "Largely from Delian League treasury funds, technically meant for shared defense — a real controversy at the time" },
  ],
  match: [
    { prompt: "The temple to Athena on the Acropolis is the:", answer: "Parthenon", options: ["Parthenon", "Erechtheion", "Propylaea", "Agora"] },
    { prompt: "Athenian philosopher executed for 'corrupting the youth':", answer: "Socrates", options: ["Socrates", "Plato", "Aristotle", "Pericles"] },
  ],
  links: [{ id: "t-persian-wars" }, { id: "g-athena" }, { id: "h-oedipus" }, { id: "t-peloponnesian-war" }],
};

LESSONS["t-peloponnesian-war"] = {
  id: "t-peloponnesian-war",
  phase: "p3",
  title: "The Peloponnesian War",
  subtitle: "Athens and Sparta finally fight it out — and the golden age doesn't survive it",
  image: { file: "t-peloponnesian-war.png", alt: "Map of the opposing alliances in the Peloponnesian War", artist: "Kenmayer (translation)", license: "CC BY-SA 3.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Pelop_war_en.png" },
  era: "431–404 BCE",
  where: "Athens, Sparta, and their respective alliance networks across the Greek world",
  narrative: [
    "Athenian power, built on the Delian League, eventually alarms Sparta and its own alliance network (the Peloponnesian League) enough that a long-simmering rivalry boils over into direct war. This isn't a quick campaign — it drags on for 27 years, in two main phases separated by an uneasy peace, and it eventually pulls in nearly every Greek city-state on one side or the other.",
    "The two sides' strengths barely overlap, which shapes the whole war: Athens has the dominant navy and formidable city walls (including the Long Walls connecting the city to its port, Piraeus), while Sparta has the dominant land army. Pericles's strategy is to avoid land battles entirely, retreat the rural population behind Athens's walls, and let the navy raid Spartan territory while the city sits out a siege it can't lose as long as it controls the sea. It's a sound plan undone almost immediately by something no strategy accounted for: a devastating plague sweeps through overcrowded wartime Athens in 430 BCE, killing a large share of the population — Pericles himself among them.",
    { aside: "The Sicilian Expedition", text: "The single worst Athenian decision of the war comes partway through: instead of staying focused on Sparta, Athens launches a massive, expensive expedition to conquer Sicily, chasing glory and resources far from home. It ends in total catastrophe — the entire invading force is destroyed or captured, a loss of manpower and ships Athens never fully recovers from. It's one of history's clearest examples of a strong power overextending itself and paying for it far more than any single battlefield loss could explain." },
    "Sparta, with financial backing from Persia (a genuinely strange twist — Greece's old invader now bankrolling one Greek city against another), eventually builds a navy capable of matching Athens and wins the decisive naval battle at Aegospotami in 405 BCE, cutting off Athens's grain supply. Athens surrenders in 404 BCE. Its walls are torn down, its democracy briefly replaced with a Spartan-backed oligarchy, and its brief supremacy is over for good — though Athenian culture, philosophy, and drama keep producing major work for generations afterward, even as its political and military dominance never fully returns.",
  ],
  facts: [
    { q: "Who are the two main sides in the Peloponnesian War?", a: "Athens (with the Delian League) and Sparta (with the Peloponnesian League)" },
    { q: "What is Pericles's core wartime strategy?", a: "Avoid land battles, shelter behind Athens's walls, and use naval superiority to raid Spartan territory while outlasting a siege" },
    { q: "What disaster undermines that strategy almost immediately?", a: "A devastating plague sweeps overcrowded wartime Athens in 430 BCE, killing Pericles among many others" },
    { q: "What is the Sicilian Expedition, and how does it turn out?", a: "A massive, costly Athenian campaign to conquer Sicily, ending in the total destruction or capture of the entire invading force" },
    { q: "How does the war finally end?", a: "Sparta, backed by Persian money, builds a navy, wins at Aegospotami (405 BCE), cuts off Athens's grain supply, and forces its surrender in 404 BCE" },
  ],
  match: [
    { prompt: "The decisive naval battle that ends Athenian resistance is:", answer: "Aegospotami", options: ["Aegospotami", "Salamis", "Marathon", "Mycale"] },
    { prompt: "Which failed campaign badly weakened Athens mid-war?", answer: "The Sicilian Expedition", options: ["The Sicilian Expedition", "The invasion of Persia", "The siege of Sparta", "The Egyptian campaign"] },
  ],
  links: [{ id: "t-golden-age" }, { id: "t-sparta-athens" }, { id: "t-alexander" }],
};

LESSONS["t-alexander"] = {
  id: "t-alexander",
  phase: "p3",
  title: "Philip, Alexander, and the Hellenistic World",
  subtitle: "How a kingdom the old city-states looked down on ended up spreading Greek culture across three continents",
  image: { file: "t-alexander.jpg", alt: "Alexander the Great, detail of the Alexander Mosaic", artist: "Unknown artist", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg" },
  era: "359–323 BCE (Philip and Alexander); Hellenistic period to c. 30 BCE",
  where: "Macedon, then Persia, Egypt, and Central Asia",
  narrative: [
    "The Peloponnesian War leaves the old heavyweight city-states — Athens and Sparta both — permanently weakened, and decades of continued infighting afterward finish the job. Into that power vacuum steps Macedon, a kingdom to the north that most southern Greeks had traditionally dismissed as semi-barbaric and not fully Greek. King Philip II changes that dismissively held opinion the hard way: he reforms the Macedonian army around a longer spear (the sarissa) and a deeper, more disciplined phalanx formation, then defeats a combined Athenian-Theban army at the Battle of Chaeronea in 338 BCE, effectively ending independent city-state rule over mainland Greece for good.",
    "Philip is assassinated in 336 BCE, and his 20-year-old son Alexander inherits the throne — along with Philip's veteran army and a burning ambition to invade Persia, the empire that had menaced Greece for over a century (see the Persian Wars lesson). What follows is one of the most staggering military campaigns in world history: in roughly a decade, Alexander conquers the entire Persian Empire — Anatolia, Egypt (where he's crowned pharaoh and founds Alexandria), Mesopotamia, and Persia itself — then pushes on into Central Asia and northwest India, never losing a major battle, before his exhausted army finally refuses to go further.",
    { aside: "Why he matters beyond the conquests", text: "Alexander doesn't just conquer — he founds cities (more than a dozen named Alexandria) and actively promotes Greek language, culture, and city-planning across a territory stretching from Greece to India. He dies suddenly in Babylon in 323 BCE at only 32, probably from illness, without a clear heir, and his massive empire immediately fractures among his generals (the Diadochi) into several large successor kingdoms — most enduringly, Ptolemaic Egypt and the Seleucid Empire in the Near East." },
    "The roughly three centuries that follow are called the Hellenistic period — a fusion of Greek culture with Egyptian, Persian, and other regional traditions across a vastly larger territory than the old city-states ever touched directly. Greek becomes the common language of trade and administration from the Mediterranean to Central Asia; the great library and lighthouse at Alexandria in Egypt become symbols of the era's scholarship. This is also, not incidentally, the exact channel through which a rising power to the west — Rome — first absorbs deep Greek cultural influence, which is why so much of what later became 'Western' art, philosophy, and myth reached Rome, and then the rest of Europe, already stamped as Greek.",
  ],
  facts: [
    { q: "Why were Athens and Sparta both vulnerable to Macedonian conquest by the mid-4th century BCE?", a: "Decades of the Peloponnesian War and continued infighting had permanently weakened the old city-states" },
    { q: "What military reforms does Philip II make, and what battle secures Macedonian dominance over Greece?", a: "A longer spear (the sarissa) and a deeper phalanx; victory at Chaeronea (338 BCE)" },
    { q: "How much of the Persian Empire does Alexander conquer, and roughly how long does it take?", a: "The entire Persian Empire, plus parts of Central Asia and northwest India, in roughly a decade" },
    { q: "How does Alexander spread Greek culture beyond just conquering territory?", a: "By founding cities (many named Alexandria) and actively promoting Greek language, culture, and city-planning" },
    { q: "What happens to Alexander's empire after his death in 323 BCE?", a: "It fractures among his generals (the Diadochi) into successor kingdoms, most enduringly Ptolemaic Egypt and the Seleucid Empire" },
    { q: "What is the Hellenistic period, and why does it matter for later Western history?", a: "The centuries-long fusion of Greek and regional cultures after Alexander — the channel through which Rome absorbed Greek culture, later passing it on to the rest of Europe" },
  ],
  match: [
    { prompt: "The battle that ends independent Greek city-state rule is:", answer: "Chaeronea", options: ["Chaeronea", "Marathon", "Gaugamela", "Issus"] },
    { prompt: "Alexander is crowned pharaoh in:", answer: "Egypt", options: ["Egypt", "Persia", "Babylon", "India"] },
  ],
  links: [{ id: "t-peloponnesian-war" }, { id: "t-persian-wars" }],
};
