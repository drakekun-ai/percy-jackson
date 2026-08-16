/* ============================================================
   content-heroes.js — Phase 2: Heroes & Monsters.
   Merges into the global LESSONS object.
   ============================================================ */

var LESSONS = typeof LESSONS === "undefined" ? {} : LESSONS;

LESSONS["h-perseus"] = {
  id: "h-perseus",
  phase: "p2",
  title: "Perseus",
  subtitle: "The original monster-slayer — Medusa, a flying horse, and a reflective shield",
  image: { file: "img/h-perseus.jpg", alt: "Perseus with the head of Medusa, Roman-era statue", artist: "Sailko", license: "CC BY 3.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Perseo_con_la_testa_di_medusa%2C_originale_di_et%C3%A0_flavia_o_traianea%2C_dalle_terme_presso_porta_laurentina%2C_01.JPG" },
  era: "Myth (pre-Trojan War generation)",
  where: "Argos, Seriphos",
  narrative: [
    "Perseus is Zeus's son by Danaë, a mortal princess whose own father locked her in a bronze underground chamber after a prophecy warned that her son would kill him. Zeus reaches her anyway, arriving as a shower of golden light. When the king discovers the resulting baby, he doesn't kill Perseus directly — killing a demigod outright invites divine punishment — so instead he sets Danaë and infant Perseus adrift at sea in a locked chest, technically not murder. They wash ashore safely on the island of Seriphos.",
    "Grown up, Perseus is manipulated by Seriphos's king into promising an impossible gift to get him out of the way: the head of Medusa, a Gorgon whose gaze turns any living thing to stone. This should be a suicide mission, except Perseus gets serious divine help — Athena gives him a polished bronze shield, Hermes gives him winged sandals and an unbreakable sword, and the nymphs supply a helm of invisibility (borrowed from Hades) and a magic pouch. The gods rarely equip a hero this thoroughly; it signals how seriously this particular task is meant to be taken.",
    { aside: "How you actually beat a Gorgon", text: "The trick isn't strength, it's the reflective shield: Perseus approaches Medusa looking only at her reflection in the polished bronze, never directly at her, and beheads her without ever meeting her gaze. It's the cleanest example in Greek myth of a hero winning through cleverness borrowed from Athena rather than brute force." },
    "From Medusa's severed neck spring Pegasus, the winged horse, and Chrysaor — proof that Medusa had been pregnant by Poseidon before her death (a detail worth remembering: Medusa's own myth, and why she was cursed in the first place, is covered in the bestiary lesson). On the flight home, Perseus spots Andromeda chained to a rock as a sacrifice to a sea monster, rescues her, marries her, and eventually uses Medusa's severed head one last time — turning his manipulative king to stone with a single glance before founding Mycenae, one of the most important cities in later Greek history.",
  ],
  facts: [
    { q: "Who are Perseus's parents?", a: "Zeus and Danaë, a mortal princess" },
    { q: "Why is Perseus sent to kill Medusa?", a: "A king manipulates him into promising it, to get him out of the way — expecting it to be a suicide mission" },
    { q: "What gifts do the gods give Perseus for the quest?", a: "Athena's polished shield, Hermes's winged sandals and sword, and a helm of invisibility and magic pouch from the nymphs" },
    { q: "How does Perseus avoid being turned to stone by Medusa?", a: "He looks only at her reflection in his polished shield, never directly at her" },
    { q: "What springs from Medusa's neck when she's beheaded?", a: "Pegasus, the winged horse, and Chrysaor — proof she was pregnant by Poseidon" },
    { q: "Who does Perseus rescue on his way home, and what does he do with Medusa's head at the end of the story?", a: "He rescues Andromeda from a sea monster, and later uses Medusa's head to turn his old enemy to stone" },
    { q: "What city does Perseus found?", a: "Mycenae" },
  ],
  match: [
    { prompt: "Perseus avoids Medusa's stone gaze by:", answer: "Looking at her reflection in a shield", options: ["Looking at her reflection in a shield", "Wearing a blindfold", "Closing his eyes entirely", "Using magic earplugs"] },
    { prompt: "Which winged horse springs from Medusa's neck?", answer: "Pegasus", options: ["Pegasus", "Arion", "Chrysaor", "Xanthus"] },
  ],
  links: [{ id: "g-athena" }, { id: "g-hermes" }, { id: "h-bestiary" }],
};

LESSONS["h-heracles"] = {
  id: "h-heracles",
  phase: "p2",
  title: "Heracles",
  subtitle: "The strongest man alive, and the twelve labors that were meant to break him",
  image: { file: "img/h-heracles.jpg", alt: "The Farnese Hercules", artist: "Glycon of Athens (copy of a Lysippos original)", license: "CC BY 2.5", commonsUrl: "https://commons.wikimedia.org/wiki/File:Herakles_Farnese_MAN_Napoli_Inv6001_n01.jpg" },
  era: "Myth (one generation before the Trojan War)",
  where: "Thebes, and effectively everywhere else",
  narrative: [
    "Heracles is Zeus's son by Alcmene, a mortal queen, and he's the single most famous strongman in Greek myth by a wide margin. Hera, predictably, despises him from birth — she even sends two serpents into his crib as an infant, which he strangles with his bare hands before he can walk.",
    "As an adult, Hera finally succeeds in tormenting him properly: she drives him into a genuine, temporary madness, during which he kills his own wife and children without recognizing them. When he comes back to himself and understands what he's done, he seeks purification and is told by the Oracle at Delphi that he must serve King Eurystheus for twelve years, completing whatever tasks he's given. That sentence becomes the Twelve Labors.",
    { aside: "The labors, at speed", text: "In order: kill the invulnerable Nemean Lion (he strangles it, since weapons can't pierce its hide); kill the multi-headed Hydra (Hydra heads regrow when cut unless the wound is cauterized — his nephew Iolaus helps, which technically disqualifies the labor, so he redoes an equivalent later); capture the Ceryneian Hind alive; capture the Erymanthian Boar; clean the Augean stables in a single day (he reroutes two rivers through them); kill the Stymphalian Birds; capture the Cretan Bull; steal the Mares of Diomedes; take the girdle of the Amazon queen Hippolyta; steal the cattle of the triple-bodied giant Geryon; steal the golden apples of the Hesperides; and, hardest of all, capture Cerberus from the underworld and bring him back alive." },
    "The pattern across all twelve is consistent: brute strength alone rarely works. He wins by improvising — cauterizing the Hydra's necks, rerouting rivers, tricking Atlas into taking the sky back after briefly holding it for him. Strength gets him into every labor; cleverness is what actually finishes each one.",
    { aside: "A way to hold all twelve in your head at once", text: "Don't memorize twelve isolated names — memorize four groups of three, each harder than the last. First, four local monsters (Lion, Hydra, Hind, Boar). Then two humiliating chores (the Stables, the Birds) — proof King Eurystheus was needling him, not just testing him. Then three captures that send him abroad (the Cretan Bull, the Mares of Diomedes, Hippolyta's Girdle). And finally three outright thefts from the edge of the known world, each guarded by something worse than the last (Geryon's cattle, the Hesperides' apples, and — the impossible one — Cerberus himself, guardian of the underworld's own gate). The labors don't just get harder at random; they get farther from home and closer to death, right up until the last one is literally a trip to the land of the dead and back." },
    "He eventually dies from poison unknowingly given to him by his own wife (who'd been tricked into thinking it was a love potion), and — unusually for a mortal hero — is granted true godhood on Olympus afterward, marrying Hebe, goddess of youth. Very few figures in Greek myth cross that line from human to god; Heracles is the clearest exception, and it's presented as the reward for enduring more suffering than any other hero in the mythology.",
  ],
  facts: [
    { q: "Who are Heracles's parents?", a: "Zeus and Alcmene, a mortal queen" },
    { q: "What does infant Heracles do to the serpents Hera sends into his crib?", a: "Strangles them with his bare hands" },
    { q: "Why does Heracles undertake the Twelve Labors?", a: "As penance after Hera drives him mad and he kills his own wife and children" },
    { q: "How does Heracles defeat the Hydra?", a: "He cauterizes each severed neck so the heads can't regrow, since cutting alone makes them multiply" },
    { q: "What is the hardest of the Twelve Labors?", a: "Capturing Cerberus from the underworld and bringing him back alive" },
    { q: "What happens to Heracles after his death?", a: "He is granted true godhood on Olympus and marries Hebe, goddess of youth — unusual for a mortal hero" },
    { q: "What is the general pattern across the Twelve Labors?", a: "Brute strength gets him started, but cleverness and improvisation are what actually complete each labor" },
  ],
  match: [
    { prompt: "How does Heracles defeat the Nemean Lion, whose hide weapons can't pierce?", answer: "He strangles it", options: ["He strangles it", "He burns it alive", "He poisons its food", "He drowns it"] },
    { prompt: "Who does Heracles marry after becoming a god?", answer: "Hebe", options: ["Hebe", "Hera", "Iole", "Deianira"] },
  ],
  links: [{ id: "g-hera" }, { id: "g-zeus" }, { id: "h-bestiary" }],
};

LESSONS["h-theseus"] = {
  id: "h-theseus",
  phase: "p2",
  title: "Theseus",
  subtitle: "The Minotaur, a thread through a maze, and Athens's national hero",
  image: { file: "img/h-theseus.jpg", alt: "Theseus, Attic kylix by the painter Aison", artist: "Aison (vase painter)", license: "CC BY 2.5", commonsUrl: "https://commons.wikimedia.org/wiki/File:Kylix_Theseus_Aison_MNA_Inv11365_n1.jpg" },
  era: "Myth (generation before Heracles's sons)",
  where: "Athens, Crete",
  narrative: [
    "Theseus is claimed by two fathers at once — Aegeus, the mortal king of Athens, and Poseidon — because Athenian myth-makers wanted their national hero to have both a legitimate mortal royal claim and genuine divine backing. He grows up away from Athens and travels to claim his birthright by choosing the hard, dangerous overland route instead of the safe sea voyage, clearing bandits and monsters along the way specifically to build a reputation before he arrives — an origin story deliberately built to echo Heracles's, since Athens wanted its hero to rival Thebes's.",
    "His defining myth is the Minotaur. Crete's King Minos demands a tribute from Athens: seven young men and seven young women, sent every nine years, to be fed to the Minotaur — a monster with a bull's head on a man's body, born from an affair between Minos's wife and a bull (a divine punishment on Minos, covered further in the bestiary lesson), and kept inside an inescapable Labyrinth built by the craftsman Daedalus. Theseus volunteers himself as one of the tribute.",
    { aside: "Ariadne's thread", text: "Minos's daughter Ariadne falls for Theseus on sight and gives him a ball of thread, on Daedalus's advice, to unspool as he enters the Labyrinth — so he can retrace his steps out after killing the Minotaur. It's the single most famous problem-solving trick in Greek myth, still called 'Ariadne's thread' today for any method of navigating a complex problem step by step." },
    "Theseus kills the Minotaur, escapes with the thread, and sails off with Ariadne — then abandons her on the island of Naxos on the way home, for reasons the myths never fully agree on. On top of that, he forgets a prearranged signal: he was supposed to swap his ship's black sail for a white one if he survived. He doesn't, and his father Aegeus, watching from a cliff and seeing the black sail, assumes his son is dead and throws himself into the sea — which is why that body of water is called the Aegean to this day. Theseus becomes king of Athens as an almost direct consequence of his own carelessness.",
  ],
  facts: [
    { q: "Who are Theseus's two claimed fathers?", a: "Aegeus, king of Athens, and Poseidon" },
    { q: "What is the tribute Athens must send to Crete?", a: "Seven young men and seven young women every nine years, to be fed to the Minotaur" },
    { q: "What is the Minotaur, and where is it kept?", a: "A bull-headed monster, kept in an inescapable Labyrinth built by Daedalus" },
    { q: "How does Theseus find his way out of the Labyrinth?", a: "Ariadne gives him a ball of thread to unspool and retrace" },
    { q: "What does Theseus do to Ariadne after escaping Crete?", a: "Abandons her on the island of Naxos" },
    { q: "Why is the Aegean Sea named after Theseus's father?", a: "Theseus forgot to swap his ship's sail to white as a signal of survival; seeing the black sail, Aegeus assumed him dead and threw himself into the sea" },
  ],
  match: [
    { prompt: "Who gives Theseus the thread to escape the Labyrinth?", answer: "Ariadne", options: ["Ariadne", "Athena", "Medea", "Phaedra"] },
    { prompt: "Who built the Labyrinth?", answer: "Daedalus", options: ["Daedalus", "Hephaestus", "Icarus", "Minos"] },
  ],
  links: [{ id: "g-poseidon" }, { id: "h-daedalus" }, { id: "h-bestiary" }],
};

LESSONS["h-jason"] = {
  id: "h-jason",
  phase: "p2",
  title: "Jason and the Argonauts",
  subtitle: "A stolen throne, a golden fleece, and a sorceress you really don't want to cross",
  image: { file: "img/h-jason.jpg", alt: "Jason, Attic cup by Douris", artist: "Douris (vase painter)", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Douris_cup_Jason_Vatican_16545.jpg" },
  era: "Myth (one generation before the Trojan War)",
  where: "Iolcus, the Black Sea coast (Colchis)",
  narrative: [
    "Jason is the rightful heir to the throne of Iolcus, stolen by his uncle Pelias. To get rid of him, Pelias sends Jason on what's meant to be an impossible errand: retrieve the Golden Fleece, a magical ram's hide guarded by a dragon that never sleeps, from the distant kingdom of Colchis. Jason assembles a crew of the era's biggest names for the voyage — the Argonauts, named for their ship, the Argo, and including Heracles and Atalanta among others — which makes this myth function almost like a team-up crossover for the entire heroic generation.",
    "He reaches Colchis, and King Aeetes sets him trial tasks clearly designed to kill him. He survives only because Aeetes's daughter, Medea — a powerful sorceress — falls in love with him and helps him with magic, on the condition that he marry her and take her with him. He agrees, she helps him steal the Fleece past the sleepless dragon, and they flee together.",
    { aside: "What Medea gives up, and what it costs later", text: "Medea doesn't help lightly: to slow her pursuing father down, she kills her own brother and scatters pieces of his body in the sea, forcing Aeetes to stop and gather them for burial. It's an extreme, disturbing act — and it sets up her reputation for the rest of mythology: someone whose loyalty, once betrayed, turns catastrophic. Later in life, when Jason abandons her for a political marriage to another princess, Medea takes the ultimate revenge and kills their own children rather than let Jason keep any happiness at all." },
    "Jason gets the throne, briefly, but the myth doesn't end well for him: he dies, in one version, killed by a piece of his own rotting ship, the Argo, falling on him as he sleeps beneath it — a quiet, almost anticlimactic end for a hero whose whole story was built on one spectacular quest.",
  ],
  facts: [
    { q: "Why is Jason sent to retrieve the Golden Fleece?", a: "His uncle Pelias, who stole his throne, sends him on what's meant to be an impossible, fatal errand" },
    { q: "What is the Argo, and who are the Argonauts?", a: "Jason's ship, and the crew of famous heroes (including Heracles and Atalanta) who sail with him" },
    { q: "Who helps Jason steal the Golden Fleece, and why?", a: "Medea, a sorceress and King Aeetes's daughter, in exchange for marriage" },
    { q: "What does Medea do to slow her father's pursuit?", a: "Kills her own brother and scatters his remains, forcing her father to stop and recover them" },
    { q: "What does Medea do when Jason later abandons her for another marriage?", a: "Kills their own children in revenge" },
  ],
  match: [
    { prompt: "Jason's ship is called the:", answer: "Argo", options: ["Argo", "Argus", "Argonaut", "Colchis"] },
    { prompt: "Who helps Jason steal the Golden Fleece?", answer: "Medea", options: ["Medea", "Ariadne", "Atalanta", "Circe"] },
  ],
  links: [{ id: "h-heracles" }, { id: "h-atalanta" }],
};

LESSONS["h-oedipus"] = {
  id: "h-oedipus",
  phase: "p2",
  title: "Oedipus",
  subtitle: "The clearest proof that in Greek myth, running from a prophecy is what fulfills it",
  image: { file: "img/h-oedipus.jpg", alt: "Oedipus and the Sphinx, Attic vase", artist: "Zde", license: "CC BY-SA 4.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Oedipus_and_Sphinx%2C_pelike%2C_450-440_BC%2C_Berlin_F_2355%2C_141646.jpg" },
  era: "Myth (generation before the Trojan War)",
  where: "Thebes",
  narrative: [
    "Before Oedipus is even born, an oracle warns King Laius of Thebes that his own son will kill him and marry his own mother. Laius's response is to have the newborn's ankles pinned together and left exposed on a mountainside to die. A shepherd finds the baby instead and passes him on; he's eventually adopted by the childless king and queen of Corinth, who raise him as their own and never tell him he's adopted.",
    "As a young man, Oedipus hears the same prophecy from an oracle and, believing his adoptive parents in Corinth are his birth parents, flees Corinth specifically to avoid ever harming them — which is exactly what puts him on the road to Thebes. On that road, he gets into a fight with an arrogant older stranger over right of way and kills him, not knowing it's Laius, his actual father.",
    { aside: "The Sphinx", text: "Thebes is being terrorized by the Sphinx, a monster with a lion's body, a woman's head, and wings, who kills anyone unable to answer her riddle: 'What walks on four legs in the morning, two at noon, and three in the evening?' Oedipus answers correctly — a human being, who crawls as an infant, walks upright as an adult, and uses a cane in old age. The Sphinx, defeated, kills herself, and Thebes rewards Oedipus with the vacant throne and the widowed queen's hand in marriage." },
    "The widowed queen is Jocasta — his own mother, unrecognized by either of them. The prophecy is now fully realized: he's killed his father and married his mother, entirely without intending to, entirely because both he and his parents tried actively to prevent it. Years later, a plague strikes Thebes, and Oedipus's own investigation into its cause — pursued with the same relentless intelligence that solved the Sphinx's riddle — is what finally uncovers the truth. Jocasta kills herself; Oedipus blinds himself with her brooch pins and goes into exile. It's considered one of the two or three defining tragedies of the entire Greek theatrical tradition, and it's the single cleanest illustration of the fate-and-prophecy rule from the earliest lesson in this course.",
  ],
  facts: [
    { q: "What prophecy is made about Oedipus before his birth?", a: "That he will kill his father and marry his mother" },
    { q: "How do his birth parents try to prevent the prophecy, and how does that attempt fail?", a: "They abandon him on a mountainside to die; a shepherd saves him and he's adopted by the king and queen of Corinth instead" },
    { q: "Why does Oedipus leave Corinth?", a: "To avoid harming the people he believes are his birth parents — which unknowingly puts him on the road to his real father" },
    { q: "What riddle does the Sphinx ask, and what is the answer?", a: "'What walks on four legs in the morning, two at noon, three in the evening?' — a human being, at different life stages" },
    { q: "How does Oedipus end up marrying his own mother?", a: "He solves the Sphinx's riddle, is rewarded with the vacant Theban throne, and marries the widowed queen — Jocasta, his mother, unrecognized by both" },
    { q: "What finally reveals the truth, and what happens to Oedipus and Jocasta?", a: "Oedipus's own investigation into a plague uncovers it; Jocasta kills herself and Oedipus blinds himself and goes into exile" },
  ],
  match: [
    { prompt: "What kills itself after Oedipus answers its riddle?", answer: "The Sphinx", options: ["The Sphinx", "The Minotaur", "The Hydra", "Medusa"] },
    { prompt: "Oedipus unknowingly marries:", answer: "His own mother", options: ["His own mother", "His own sister", "His own daughter", "His own aunt"] },
  ],
  links: [{ id: "o-rules" }, { id: "g-apollo" }, { id: "t-golden-age" }],
};

LESSONS["h-atalanta"] = {
  id: "h-atalanta",
  phase: "p2",
  title: "Atalanta",
  subtitle: "Faster than every man who tried to marry her — and it cost most of them their lives",
  image: { file: "img/h-atalanta.jpg", alt: "Atalanta, Attic lekythos, Cleveland Museum of Art", artist: "Daderot", license: "CC0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Atalanta_Lekythos%2C_500-490_BC%2C_Greek%2C_Attic%2C_attributed_to_Douris%2C_ceramic_-_Cleveland_Museum_of_Art_-_DSC08212.JPG" },
  era: "Myth (Argonaut generation)",
  where: "Arcadia, Calydon",
  narrative: [
    "Atalanta's father wanted a son and, on her birth, has her exposed on a mountainside to die — the same fate nearly given to Oedipus and Perseus, a grim pattern for unwanted infants across this mythology. She's found and raised by a she-bear, then by hunters, and grows up to become the fastest runner and one of the sharpest hunters in Greece, refusing from early on to marry at all.",
    "She joins the Calydonian Boar Hunt, a major team myth on the same scale as the Argonauts: a monstrous boar, sent by Artemis to punish Calydon's king for forgetting to honor her, is ravaging the countryside, and heroes from across Greece gather to kill it (Jason and several other Argonauts are also there — the heroic generation overlaps constantly, which is exactly why this app is built as one connected map instead of separate stories). Atalanta draws first blood on the boar, and Meleager, the hunt's leader, insists she receive the trophy hide, which causes a fatal dispute among the male hunters who resent a woman getting the honor.",
    { aside: "The footrace and the golden apples", text: "Later, pressured to finally marry, Atalanta agrees only on the condition that any suitor race her — and lose his life if he loses the race. Many die trying. Hippomenes finally beats her with help from Aphrodite, who gives him three golden apples to drop during the race; Atalanta, competitive by nature, keeps stopping to pick them up, and loses just barely. It's a rare Greek myth where the trick that wins isn't strength or cunning exactly, but knowing precisely what your opponent can't resist." },
    "She remains one of the very few named women in Greek myth who succeeds entirely on physical skill rather than divine favor alone or domestic virtue — a genuine outlier in a mythology mostly uninterested in that kind of heroine.",
  ],
  facts: [
    { q: "Why is Atalanta abandoned as an infant?", a: "Her father wanted a son" },
    { q: "What raises Atalanta after she's abandoned?", a: "A she-bear, then hunters" },
    { q: "What is the Calydonian Boar Hunt?", a: "A team hunt for a monstrous boar sent by Artemis to punish Calydon's king — drawing heroes from across Greece, including several Argonauts" },
    { q: "How does Hippomenes finally beat Atalanta in a footrace to win her marriage?", a: "Aphrodite gives him golden apples to drop, which Atalanta stops to pick up, costing her the race" },
    { q: "What makes Atalanta unusual among named women in Greek myth?", a: "She succeeds through physical skill rather than divine favor or domestic virtue alone" },
  ],
  match: [
    { prompt: "Which goddess helps Hippomenes win the race against Atalanta?", answer: "Aphrodite", options: ["Aphrodite", "Athena", "Artemis", "Hera"] },
    { prompt: "The Calydonian Boar was sent by:", answer: "Artemis", options: ["Artemis", "Ares", "Poseidon", "Hera"] },
  ],
  links: [{ id: "h-jason" }, { id: "g-artemis" }],
};

LESSONS["h-daedalus"] = {
  id: "h-daedalus",
  phase: "p2",
  title: "Daedalus and Icarus",
  subtitle: "The greatest craftsman in Greece builds his own son a way to die",
  image: { file: "img/h-daedalus.jpg", alt: "Mosaic of Daedalus, Zeugma Mosaic Museum", artist: "Dosseman", license: "CC BY-SA 4.0", commonsUrl: "https://commons.wikimedia.org/wiki/File:Gaziantep_Zeugma_Museum_Daedalus_mosaic_1873.jpg" },
  era: "Myth (roughly the generation of Theseus)",
  where: "Athens, Crete",
  narrative: [
    "Daedalus is the most brilliant inventor and craftsman in Greek myth who isn't a god — he designs the Labyrinth for King Minos of Crete specifically to contain the Minotaur (see Theseus's lesson), and later gives Ariadne the idea of the thread that lets Theseus escape it. Minos, furious that his own architect helped defeat his monster, imprisons Daedalus and his young son Icarus inside the very Labyrinth Daedalus built.",
    "Since Minos controls the sea and land routes off Crete, Daedalus reasons the sky is the one route left uncontrolled. He builds two sets of wings from feathers and wax, fitted to his and Icarus's arms, and they escape by flying.",
    { aside: "The one instruction Icarus doesn't follow", text: "Daedalus gives his son exactly one warning: don't fly too low, or sea spray will weigh the feathers down; don't fly too high, or the sun's heat will melt the wax. Icarus, exhilarated by flight, climbs higher and higher anyway. The wax melts, the wings come apart, and he falls into the sea and drowns. Daedalus survives and lands safely, but loses his son to the exact overreach the warning was built to prevent." },
    "The myth reads, deliberately, as a hubris story aimed at a child rather than at a king or a god — proof the Greeks applied the same rule (see the lesson on hubris) at every scale: ignore the limits you've been given, however thrilling it feels in the moment, and the fall is the same regardless of who you are.",
  ],
  facts: [
    { q: "What does Daedalus build for King Minos, and what does it contain?", a: "The Labyrinth, built to contain the Minotaur" },
    { q: "Why does Minos imprison Daedalus and Icarus?", a: "Daedalus had helped Theseus escape the Labyrinth by suggesting the thread trick to Ariadne" },
    { q: "How do Daedalus and Icarus escape Crete?", a: "Daedalus builds wings of feathers and wax, and they fly off the island" },
    { q: "What warning does Daedalus give Icarus, and what happens when he ignores it?", a: "Don't fly too low (sea spray) or too high (sun melts the wax) — Icarus flies too high, the wax melts, and he falls to his death" },
    { q: "What does the myth of Icarus illustrate?", a: "Hubris and overreach lead to a fall, regardless of age or status — the same rule that governs kings applies to a child" },
  ],
  match: [
    { prompt: "Icarus dies because:", answer: "He flew too close to the sun and his wax wings melted", options: ["He flew too close to the sun and his wax wings melted", "He flew too low and drowned", "He was shot down", "He ran out of strength"] },
    { prompt: "What does Daedalus build to contain the Minotaur?", answer: "The Labyrinth", options: ["The Labyrinth", "A bronze tower", "A pit", "A maze of mirrors"] },
  ],
  links: [{ id: "h-theseus" }, { id: "o-rules" }],
};

LESSONS["h-bestiary"] = {
  id: "h-bestiary",
  phase: "p2",
  title: "The Bestiary",
  subtitle: "The monsters that didn't get their own hero to headline — Medusa, the Sphinx's cousins, and the rest",
  image: { file: "img/h-bestiary.jpg", alt: "The Chimera of Arezzo, an Etruscan bronze", artist: "Unknown (Etruscan bronze)", license: "Public domain", commonsUrl: "https://commons.wikimedia.org/wiki/File:Chimera_Apulia_Louvre_K362.jpg" },
  era: "Myth",
  narrative: [
    "Most Greek monsters show up as an obstacle inside someone else's story, but a few deserve their own facts because they recur constantly across mythology. Start with Medusa: originally a beautiful mortal priestess of Athena, she's assaulted by Poseidon inside Athena's own temple — and Athena, in one of the mythology's more uncomfortable judgments, punishes Medusa rather than Poseidon, turning her hair to snakes and her gaze to stone. It's Perseus who later kills her (that lesson has the details), but Medusa's own origin is a story about misplaced blame, not simple monstrousness.",
    "The Hydra, killed by Heracles, is a many-headed serpent whose heads regrow doubled unless the wound is cauterized — a good general Greek-myth pattern where a threat that seems to punish direct force (cutting) requires a smarter method (fire) instead. Cerberus, Hades's three-headed guard dog, is the Hydra's sibling, both children of the monstrous Echidna and Typhon, a pair of primordial monsters powerful enough that even Zeus struggled against Typhon directly in one of the only fights he doesn't win easily.",
    { aside: "The Minotaur's origin", text: "The Minotaur (killed by Theseus) exists because King Minos once promised to sacrifice a beautiful bull to Poseidon and substituted a lesser bull instead — cheating a god, which never goes well in this mythology. Poseidon's punishment is to make Minos's wife fall in love with the original bull; their child is the Minotaur, a monster born specifically because a king tried to shortchange the sea god." },
    "A few more worth knowing at a glance: the Chimera, a fire-breathing hybrid of lion, goat, and serpent, killed by the hero Bellerophon riding Pegasus; the Sirens, whose song lures sailors to shipwreck, survived by Odysseus tying himself to his ship's mast; and the Cyclopes — not only the three primordial smiths from the very first lesson, but also a whole separate race of one-eyed giants, of whom Polyphemus (blinded by Odysseus) is the most famous.",
  ],
  facts: [
    { q: "What is Medusa's origin, before she becomes a monster?", a: "A mortal priestess of Athena, assaulted by Poseidon in Athena's temple — and punished by Athena for it" },
    { q: "How is the Hydra's regeneration defeated?", a: "By cauterizing each severed neck so the heads can't regrow" },
    { q: "Who are Cerberus and the Hydra's parents?", a: "The primordial monsters Echidna and Typhon" },
    { q: "Why does Poseidon curse Minos's wife to fall in love with a bull, producing the Minotaur?", a: "Minos cheated Poseidon by sacrificing a lesser bull instead of the one he promised" },
    { q: "How does Bellerophon kill the Chimera?", a: "Riding Pegasus, attacking it from the air" },
    { q: "How does Odysseus survive the Sirens' song?", a: "He has himself tied to his ship's mast so he can hear it without steering toward it" },
  ],
  match: [
    { prompt: "What defeats the Sirens' deadly song for Odysseus?", answer: "Being tied to the ship's mast", options: ["Being tied to the ship's mast", "Wax in his ears", "Sailing at night", "A gift from Circe that muted sound"] },
    { prompt: "The Minotaur's mother is:", answer: "Minos's wife, cursed by Poseidon", options: ["Minos's wife, cursed by Poseidon", "Medusa", "Echidna", "A nymph"] },
  ],
  links: [{ id: "h-perseus" }, { id: "h-heracles" }, { id: "h-theseus" }, { id: "t-troy" }],
};
