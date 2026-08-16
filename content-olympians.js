/* ============================================================
   content-olympians.js — Phase 1: The Pantheon.
   Merges into the global LESSONS object.
   ============================================================ */

var LESSONS = typeof LESSONS === "undefined" ? {} : LESSONS;

LESSONS["g-zeus"] = {
  id: "g-zeus",
  phase: "p1",
  title: "Zeus",
  subtitle: "King of the gods, and a genuinely terrible husband",
  domain: "Sky, thunder, law, kingship, hospitality",
  symbol: "Thunderbolt, eagle, oak tree",
  roman: "Jupiter",
  narrative: [
    "Zeus rules Olympus because he organized the rebellion that freed his siblings and won the Titanomachy — competence and coalition-building, not just strength. As king, his portfolio is huge: he's the god of the sky and storms, but also of law, oaths, kingship, and — importantly — of xenia, guest-friendship. He's the one most likely to show up disguised as a beggar to test whether you're a decent host.",
    "He's also, by a wide margin, the most unfaithful figure in a mythology full of unfaithful gods. His wife is Hera, but his list of affairs — with goddesses, Titans, nymphs, and mortal women — is so long it functions as the connective tissue for half of Greek mythology, because an enormous number of major heroes (Perseus, Heracles, Helen of Troy) exist specifically because Zeus had a child outside his marriage. He famously shape-shifts to do it: a swan, a bull, a shower of golden light, even Artemis's own likeness on one occasion, purely to get close to someone.",
    { aside: "The running joke that isn't really a joke", text: "Hera's entire mythological arc is largely a reaction to Zeus's affairs — she spends enormous energy punishing his lovers and his illegitimate children rather than Zeus himself, because Zeus, as king, is politically and physically untouchable even to his own wife. It's a bleak comment on where power actually lands consequences." },
    "As king, Zeus enforces the rules that hold the cosmos together, including the one rule that binds even him: an oath sworn on the River Styx cannot be broken. He's overthrown his own father, so he knows better than anyone how fragile a throne is — which is part of why he's paranoid about prophecies concerning his own children (see: Metis, and the birth of Athena).",
    "His weapon, the thunderbolt, was a gift from the Cyclopes for freeing them from Tartarus. He can hurl it as a literal weapon or use it more subtly — famously, mortals who see Zeus in his true divine form are incinerated by the sheer power radiating off him, which is exactly what happens to Semele, Dionysus's mother, when she insists on seeing her divine lover as he really is.",
  ],
  facts: [
    { q: "What is Zeus god of?", a: "The sky, thunder, law, kingship, and hospitality (xenia)" },
    { q: "Why does Zeus become king rather than Poseidon or Hades?", a: "He organized the rescue of his siblings and led the war against the Titans — competence and alliance-building, not just strength" },
    { q: "Who is Zeus's wife?", a: "Hera" },
    { q: "How does Zeus's behavior toward his marriage shape much of Greek mythology?", a: "His many affairs with goddesses, nymphs, and mortals produce many of mythology's major heroes and figures" },
    { q: "Who typically bears the punishment for Zeus's affairs — Zeus, or the other party?", a: "The other party (the lover or the resulting child) — Hera targets them rather than Zeus" },
    { q: "What happens to a mortal who sees Zeus in his true divine form?", a: "They are incinerated by the raw power of it — this is what kills Semele" },
    { q: "What is Zeus's signature weapon and where did it come from?", a: "The thunderbolt, forged by the Cyclopes as thanks for being freed from Tartarus" },
  ],
  match: [
    { prompt: "Zeus's Roman name is:", answer: "Jupiter", options: ["Jupiter", "Jove", "Mars", "Saturn"] },
    { prompt: "Zeus's sacred bird is the:", answer: "Eagle", options: ["Eagle", "Owl", "Peacock", "Crow"] },
    { prompt: "Which river's oath can bind even Zeus?", answer: "The Styx", options: ["The Styx", "The Nile", "The Alpheus", "The Acheron"] },
  ],
  links: [{ id: "o-division" }, { id: "g-hera" }, { id: "g-athena" }],
};

LESSONS["g-hera"] = {
  id: "g-hera",
  phase: "p1",
  title: "Hera",
  subtitle: "Queen of the gods, and the most competent person on Olympus",
  domain: "Marriage, women, family, childbirth",
  symbol: "Peacock, cow, pomegranate",
  roman: "Juno",
  narrative: [
    "Hera is queen of Olympus, goddess of marriage and family — an assignment with brutal irony, since her own marriage is a running catastrophe. She's Zeus's sister as well as his wife (entirely normal by the standards of the first family in the previous lessons), and she takes the job of \"protector of marriage\" seriously even though her husband treats his own vows as optional.",
    "Popular retellings flatten her into simply \"jealous and vindictive,\" and it's true she pursues Zeus's lovers and illegitimate children with real ferocity — Heracles spends much of his life dealing with her hostility, and it's Hera who eventually drives him to madness. But it's worth separating pettiness from powerlessness: Hera cannot punish Zeus himself, so her anger lands on the people with even less power than her. That's not a flattering read of her, but it is a more honest one than \"jealous wife, full stop.\"",
    { aside: "She's also genuinely powerful", text: "Hera is one of the most powerful Olympians in her own right, capable of contesting Zeus directly on occasion (she once helped orchestrate a plot to overthrow him, alongside Poseidon and Athena, that very nearly worked). She's also the mother of Ares, Hephaestus, and Eileithyia, goddess of childbirth." },
    "She favors the city of Argos and, later, plays a decisive role backing the Greeks in the Trojan War — largely out of spite toward Paris of Troy, who judged her less beautiful than Aphrodite in a beauty contest that had genuinely enormous consequences (see the Trojan War lesson).",
  ],
  facts: [
    { q: "What is Hera goddess of?", a: "Marriage, women, family, and childbirth" },
    { q: "What is Hera's relationship to Zeus?", a: "Both his wife and his sister" },
    { q: "Why can't Hera punish Zeus directly for his affairs?", a: "He's king and politically untouchable even to her, so her anger lands on his lovers and children instead" },
    { q: "Name two of Hera's children.", a: "Ares and Hephaestus (also Eileithyia, goddess of childbirth)" },
    { q: "What role does Hera play in the Trojan War?", a: "She backs the Greeks, largely out of anger at Paris for judging her less beautiful than Aphrodite" },
  ],
  match: [
    { prompt: "Hera's Roman name is:", answer: "Juno", options: ["Juno", "Minerva", "Venus", "Diana"] },
    { prompt: "Hera's sacred bird is the:", answer: "Peacock", options: ["Peacock", "Eagle", "Owl", "Dove"] },
  ],
  links: [{ id: "g-zeus" }, { id: "t-troy", label: "The Trojan War" }],
};

LESSONS["g-poseidon"] = {
  id: "g-poseidon",
  phase: "p1",
  title: "Poseidon",
  subtitle: "God of the sea, earthquakes, and holding a grudge",
  domain: "The sea, earthquakes, horses",
  symbol: "Trident, horse, dolphin",
  roman: "Neptune",
  narrative: [
    "Poseidon rules the sea, drawing the second lot after the Titanomachy, and he's every bit as powerful as Zeus within his domain — sailors feared him more than they revered him, since a calm sea and a shipwrecking storm both came from the same unpredictable god. He's also, oddly, the god of earthquakes and of horses, which the Greeks connected: he's said to have created the horse, and \"Earth-Shaker\" is one of his standing titles.",
    "He's genuinely competitive with his siblings in a way Hades never bothers to be. He contests Athena for patronage of Athens (and loses — his gift was a saltwater spring, hers was the olive tree, and the city picked practicality; the city is literally named for the winner). He resents losing gracefully about as often as he resents anything.",
    { aside: "The trait that matters most for later lessons", text: "Poseidon holds grudges for generations, not moments. When Odysseus blinds his son, the Cyclops Polyphemus, on the way home from Troy, Poseidon doesn't get over it — he spends the entire Odyssey making sure Odysseus's ten-year journey home is as miserable as physically possible. If you remember one thing about Poseidon's personality, make it that his anger has a very long memory." },
    "He lives beneath the sea in an underwater palace, not on Olympus full-time, which puts him in a similar structural position to Hades — powerful, respected, but slightly apart from the day-to-day politics of the mountain.",
  ],
  facts: [
    { q: "What is Poseidon god of?", a: "The sea, earthquakes, and horses" },
    { q: "What is Poseidon's title related to earthquakes?", a: "\"Earth-Shaker\"" },
    { q: "What contest does Poseidon lose to Athena?", a: "Patronage of the city of Athens — his saltwater spring lost to her olive tree" },
    { q: "Why does Poseidon torment Odysseus for ten years?", a: "Odysseus blinded Poseidon's son, the Cyclops Polyphemus" },
    { q: "Where does Poseidon live?", a: "An underwater palace, not full-time on Olympus" },
  ],
  match: [
    { prompt: "Poseidon's Roman name is:", answer: "Neptune", options: ["Neptune", "Triton", "Oceanus", "Nereus"] },
    { prompt: "Poseidon's weapon is the:", answer: "Trident", options: ["Trident", "Thunderbolt", "Bow", "Spear"] },
  ],
  links: [{ id: "o-division" }, { id: "g-athena" }, { id: "t-troy" }],
};

LESSONS["g-hades"] = {
  id: "g-hades",
  phase: "p1",
  title: "Hades",
  subtitle: "God of the dead — and, contrary to popular retelling, not the villain",
  domain: "The underworld, the dead, wealth (buried metals and gems)",
  symbol: "Helm of invisibility, bident, Cerberus",
  roman: "Pluto",
  narrative: [
    "Hades draws the underworld and, unlike his brothers, doesn't argue about it — but he also doesn't get invited to much. He isn't evil; Greek myth doesn't equate the underworld with hell or punishment for everyone. Most of the dead go to the Asphodel Meadows, a grey, neutral, unremarkable afterlife — not tortured, just... done. Only the specifically wicked go to Tartarus, and only a few remarkable heroes go to Elysium, a paradise. Hades administers all three impartially; he doesn't play favorites and he doesn't cheat.",
    "His kingdom has geography worth knowing: the River Styx (the oath river), the River Lethe (drink from it and you forget your entire life — newly dead souls often do, on purpose), and Cerberus, the three-headed dog who guards the gate, letting souls in and never letting them back out.",
    { aside: "Why he's called wealthy", text: "Hades is also, confusingly, associated with wealth — because precious metals and gems come from underground, which is his territory. The Greeks sometimes called him Plouton (\"the rich one\"), which is where the Roman name Pluto comes from." },
    "He marries Persephone, Demeter's daughter, by abducting her to the underworld — a myth covered fully in Demeter's lesson, since it's really her story of loss and negotiation. After the compromise that follows, Persephone splits her year between the underworld and the surface, and Hades, against expectation, seems to be a faithful, one-partner husband for the rest of mythology — a notable contrast to Zeus.",
    "Because he rules the dead and stays out of Olympian politics, later tradition frequently drops him from \"the twelve Olympians\" even though he's a full sibling of Zeus, Poseidon, and Hera, exactly as powerful in his own realm as they are in theirs.",
  ],
  facts: [
    { q: "Is Hades considered evil or a villain in Greek myth?", a: "No — he's a stern, impartial administrator of the dead, not a figure of punishment or evil" },
    { q: "Where do most ordinary souls go in the underworld?", a: "The Asphodel Meadows, a neutral, unremarkable afterlife" },
    { q: "Who guards the gate of the underworld, and what do they do?", a: "Cerberus, a three-headed dog — he lets souls in but never lets them back out" },
    { q: "What happens if a soul drinks from the River Lethe?", a: "It forgets its entire life" },
    { q: "Why is Hades associated with wealth?", a: "Precious metals and gems come from underground, his domain — he was sometimes called Plouton, 'the rich one'" },
    { q: "Who does Hades marry, and how?", a: "Persephone, Demeter's daughter — by abducting her" },
    { q: "Why is Hades often left off lists of the twelve Olympians despite being Zeus's full sibling?", a: "He rules the underworld and stays out of Olympian court politics rather than living on Olympus" },
  ],
  match: [
    { prompt: "Hades's Roman name is:", answer: "Pluto", options: ["Pluto", "Dis", "Orcus", "Charon"] },
    { prompt: "The three-headed dog who guards the underworld's gate is:", answer: "Cerberus", options: ["Cerberus", "Orthrus", "Ladon", "Argus"] },
  ],
  links: [{ id: "o-division" }, { id: "g-demeter" }],
};

LESSONS["g-demeter"] = {
  id: "g-demeter",
  phase: "p1",
  title: "Demeter",
  subtitle: "Goddess of the harvest, and the myth that explains winter",
  domain: "Agriculture, the harvest, the seasons",
  symbol: "Wheat sheaf, torch, cornucopia",
  roman: "Ceres",
  narrative: [
    "Demeter governs agriculture — every crop, every harvest — which makes her, functionally, the goddess in charge of whether anyone eats. Her single defining myth explains something everyone experiences and nobody controls: why winter happens.",
    "Hades wants Persephone, Demeter's daughter, as his wife. He asks Zeus, Persephone's father, for permission — and Zeus grants it without consulting Demeter or Persephone at all. Hades then abducts Persephone straight out of a field of flowers, the ground splitting open beneath her, and takes her to the underworld.",
    "Demeter is not told where her daughter went. She searches the entire world, and while she searches, she neglects her actual job — nothing grows, anywhere, and humanity starts to starve. This is not metaphorical grief; it's an actual agricultural catastrophe, and it's the leverage that eventually forces Zeus to intervene, because a world with no living mortals is a world with no one left to worship any god.",
    { aside: "The pomegranate seeds", text: "Zeus orders Hades to return Persephone — but there's a catch, one of the strictest laws of the underworld: anyone who eats food there is bound to stay. Persephone had eaten a handful of pomegranate seeds. The compromise struck is that she spends part of the year with Hades (as his queen) and part with her mother on the surface." },
    "When Persephone is with Demeter, crops grow — spring and summer. When she returns to the underworld, Demeter grieves again and withholds her gifts — autumn and winter. The myth isn't really about villainy on anyone's single part; it's an origin story for the seasons, built out of a mother's grief and a very literal-minded piece of underworld law.",
  ],
  facts: [
    { q: "What is Demeter goddess of?", a: "Agriculture and the harvest" },
    { q: "Who takes Persephone, and with whose permission?", a: "Hades — with Zeus's permission, given without consulting Demeter or Persephone" },
    { q: "What does Demeter do while searching for Persephone, and what's the effect?", a: "She neglects the harvest — nothing grows anywhere, and humanity starts to starve" },
    { q: "Why can't Persephone simply return to the surface permanently?", a: "She ate pomegranate seeds in the underworld, and eating food there binds you to stay" },
    { q: "What is the final compromise?", a: "Persephone spends part of the year with Hades in the underworld and part with Demeter on the surface" },
    { q: "What do Persephone's two 'seasons' explain in the myth?", a: "The origin of the seasons — crops grow when she's with Demeter, and wither when she returns to the underworld" },
  ],
  match: [
    { prompt: "Demeter's Roman name is:", answer: "Ceres", options: ["Ceres", "Flora", "Pomona", "Vesta"] },
    { prompt: "What food binds Persephone to the underworld?", answer: "Pomegranate seeds", options: ["Pomegranate seeds", "Ambrosia", "An apple", "Barley bread"] },
  ],
  links: [{ id: "g-hades" }, { id: "o-rules" }],
};

LESSONS["g-athena"] = {
  id: "g-athena",
  phase: "p1",
  title: "Athena",
  subtitle: "Goddess of strategic wisdom — not war for its own sake",
  domain: "Wisdom, strategy, crafts, defensive war",
  symbol: "Owl, olive tree, aegis (shield), spear",
  roman: "Minerva",
  narrative: [
    "Athena's birth is one of the strangest in the whole mythology, and the strangeness is the point. Zeus's first wife is Metis, a Titan goddess of cunning intelligence — and a prophecy warns that any son Metis bears will overthrow Zeus, exactly the fate Zeus's own father and grandfather failed to avoid. Zeus's solution is to swallow Metis whole while she's pregnant. It doesn't stop the pregnancy; it just relocates it. Athena is born fully grown, fully armored, straight out of Zeus's skull, and she inherits her mother's cunning combined with her father's authority.",
    "She's a war goddess, but specifically the strategic kind — planning, tactics, defensive war, the smart use of force — which the Greeks kept sharply distinct from Ares, who represents war as raw bloodlust and chaos. Athena nearly always outperforms Ares directly whenever the two clash in myth, which is itself the Greeks' verdict on which kind of warfare actually wins.",
    { aside: "The contest for Athens", text: "Athena wins patronage of Athens by offering the city something more useful than Poseidon's saltwater spring: the olive tree, source of food, oil, and trade wealth. The city takes her name. It's a clean illustration of her whole personality — she wins by being useful, not by being the loudest." },
    "She's also the patron of crafts and weaving, and the goddess most likely to personally intervene to help a clever mortal — she guides Perseus, Heracles, and, most famously, Odysseus, who is essentially her favorite for the entire Odyssey specifically because his defining trait (cunning over brute strength) is her defining trait too.",
    "One myth is worth knowing as a warning: Arachne, a mortal weaver, claims to be better at weaving than Athena herself and refuses to back down even when Athena gives her a chance to. Athena wins the contest and, furious at Arachne's hubris (see the earlier lesson on that word), transforms her into the first spider — cursed to weave forever, but never again as a person.",
  ],
  facts: [
    { q: "How is Athena born?", a: "Fully grown and armored, from Zeus's head — after he swallowed her pregnant mother, Metis, whole" },
    { q: "Why does Zeus swallow Metis?", a: "A prophecy said her son would overthrow him, so he prevents the birth by absorbing her entirely" },
    { q: "How does Athena's version of war differ from Ares's?", a: "She represents strategy and disciplined, defensive war; Ares represents raw bloodlust and chaos" },
    { q: "How does Athena win patronage of Athens?", a: "She offers the olive tree, judged more useful than Poseidon's saltwater spring" },
    { q: "Which hero is Athena's favorite, and why?", a: "Odysseus — because his defining trait, cunning, is also hers" },
    { q: "What happens to Arachne?", a: "Athena turns her into the first spider after Arachne's hubris in a weaving contest" },
  ],
  match: [
    { prompt: "Athena's sacred bird is the:", answer: "Owl", options: ["Owl", "Eagle", "Peacock", "Crow"] },
    { prompt: "Athena's Roman name is:", answer: "Minerva", options: ["Minerva", "Diana", "Juno", "Vesta"] },
    { prompt: "Athena is the patron goddess of which city?", answer: "Athens", options: ["Athens", "Sparta", "Corinth", "Thebes"] },
  ],
  links: [{ id: "g-zeus" }, { id: "g-poseidon" }, { id: "h-perseus" }, { id: "t-golden-age" }],
};

LESSONS["g-apollo"] = {
  id: "g-apollo",
  phase: "p1",
  title: "Apollo",
  subtitle: "God of nearly everything civilized: music, prophecy, medicine, and the sun",
  domain: "The sun, prophecy, music, medicine, archery",
  symbol: "Lyre, bow, laurel wreath",
  roman: "Apollo (same name in both)",
  narrative: [
    "Apollo has one of the broadest job descriptions on Olympus: prophecy, music, poetry, medicine, archery, and — in later tradition especially — the sun itself. He's Zeus's son by Leto, and he has a twin sister, Artemis, born on the same day; the two are unusually close for Olympian siblings and frequently act together, especially when defending their mother's honor.",
    "His most important role is the Oracle at Delphi, the single most trusted source of prophecy in the entire Greek world. Real historical kings and city-states consulted the Delphic Oracle before wars, colonization efforts, and major decisions for centuries — this isn't only myth, it's documented Greek civic practice. Apollo speaks through a priestess called the Pythia, and Delphic prophecies are famous for being literally true and practically useless — accurate, but phrased so ambiguously that the person hearing it usually misunderstands until it's too late (this is exactly what destroys Oedipus, in a later lesson).",
    { aside: "Apollo and Marsyas", text: "Apollo is also dangerous to challenge. A satyr named Marsyas boasts he can outplay Apollo in music. Apollo wins and, as punishment for the presumption, flays him alive. It's a brutal story, and it's meant to be: the gods reward talent but punish the specific act of claiming equality with them." },
    "He's also, notably, the god of plague as well as medicine — the same god who heals can also send sickness as punishment, which is exactly what happens in the opening of the Iliad, where Apollo sends a plague on the Greek army at Troy after Agamemnon disrespects one of his priests.",
  ],
  facts: [
    { q: "What are Apollo's main domains?", a: "Prophecy, music, medicine, archery, and (later) the sun" },
    { q: "Who are Apollo's parents, and who is his twin?", a: "Zeus and Leto; his twin sister is Artemis" },
    { q: "What is the Oracle at Delphi, and why does it matter historically as well as mythically?", a: "The most trusted source of prophecy in the Greek world — real city-states and kings consulted it before major decisions, not just in myth" },
    { q: "Why are Delphic prophecies famous for being dangerous?", a: "They're literally true but phrased ambiguously, so people misunderstand them until it's too late" },
    { q: "What happens to Marsyas after he challenges Apollo to a music contest?", a: "Apollo wins and flays him alive as punishment for the presumption" },
    { q: "How is Apollo connected to both healing and plague?", a: "He governs medicine but can also send sickness as punishment, as in the opening of the Iliad" },
  ],
  match: [
    { prompt: "Apollo's twin sister is:", answer: "Artemis", options: ["Artemis", "Athena", "Persephone", "Hebe"] },
    { prompt: "Apollo's most famous oracle is located at:", answer: "Delphi", options: ["Delphi", "Olympia", "Corinth", "Sparta"] },
  ],
  links: [{ id: "g-artemis" }, { id: "h-oedipus" }, { id: "t-troy" }],
};

LESSONS["g-artemis"] = {
  id: "g-artemis",
  phase: "p1",
  title: "Artemis",
  subtitle: "Goddess of the hunt, fiercely protective of her independence",
  domain: "The hunt, wilderness, the moon, young women, childbirth",
  symbol: "Bow, deer, moon",
  roman: "Diana",
  narrative: [
    "Artemis is Apollo's twin, born first, and — in one version — she actually helps deliver her own brother moments after her own birth, which is treated as an early sign of exactly who she is: capable, protective, and not interested in waiting for anyone else to act.",
    "She asks Zeus, as a young girl, for eternal maidenhood — no marriage, no husband, permanent independence — and he grants it. This isn't incidental; it's the defining feature of her mythology. She's fiercely protective of that autonomy and punishes violations of it, whether against herself or against the nymphs who form her retinue, with total severity.",
    { aside: "Actaeon", text: "A hunter named Actaeon stumbles on Artemis bathing, unintentionally. Whether or not it was deliberate doesn't matter to her: she transforms him into a stag on the spot, and his own hunting dogs — not recognizing him — tear him apart. It's one of the harshest punishments in the mythology for what looks, from a modern angle, like an accident. That's deliberate: Artemis's domain (personal boundary and wilderness) is treated as sacred, full stop, regardless of intent." },
    "She rules wild places and wild things generally — she's the protector of animals even while also being the goddess hunters pray to before a hunt, which the Greeks didn't see as a contradiction: a good hunt respected the animal and the wilderness rather than plundering it. She's also, alongside Hera and Eileithyia, associated with childbirth, watching over young women specifically.",
  ],
  facts: [
    { q: "What does Artemis ask Zeus for as a young girl?", a: "Eternal maidenhood — permanent independence, no marriage" },
    { q: "What happens to Actaeon?", a: "He stumbles on Artemis bathing; she turns him into a stag and his own hunting dogs kill him" },
    { q: "What is Artemis's relationship to wild animals?", a: "She's both their protector and the goddess hunters pray to — the Greeks saw respectful hunting and protection of the wild as compatible" },
    { q: "What is Artemis's relationship to Apollo?", a: "His twin sister, born first" },
  ],
  match: [
    { prompt: "Artemis's Roman name is:", answer: "Diana", options: ["Diana", "Minerva", "Juno", "Ceres"] },
    { prompt: "What does Artemis turn Actaeon into?", answer: "A stag", options: ["A stag", "A bird", "A spider", "A tree"] },
  ],
  links: [{ id: "g-apollo" }],
};

LESSONS["g-ares"] = {
  id: "g-ares",
  phase: "p1",
  title: "Ares",
  subtitle: "God of war — the ugly, brutal kind, and not well-liked even on Olympus",
  domain: "War, bloodlust, violence",
  symbol: "Spear, helmet, vulture, dog",
  roman: "Mars",
  narrative: [
    "Ares is the god of war in its rawest form — bloodlust, carnage, the chaos of battle rather than any strategy behind it. This is worth contrasting directly with Athena, who represents the disciplined, tactical side of the exact same subject. Where Athena plans, Ares just wants the fight.",
    "Tellingly, the Greeks did not particularly admire him. Even Zeus, in the Iliad, tells Ares directly that he's the most hateful of all the gods to him. He's associated with Thrace, a region the Greeks generally regarded as wild and less civilized than their own cities — which tells you something about how they filed away 'war for its own sake' in their mental map of the world.",
    { aside: "Caught in a net", text: "One famous story humiliates him thoroughly: Ares has an affair with Aphrodite (married to Hephaestus), and Hephaestus — the smith god, not a fighter, but far cleverer with his hands — forges an unbreakable golden net, catches the two of them in bed together, and calls the rest of the gods to come laugh. The god of war, undone not by strength but by a trap. The Greeks clearly enjoyed that irony." },
    "Despite the general disdain, Ares fights on the Trojan side in the Trojan War and is wounded by mortal heroes more than once — a sign that in Greek myth, raw ferocity without strategy loses, consistently, to combatants who think.",
  ],
  facts: [
    { q: "What does Ares represent, as distinct from Athena?", a: "War as raw bloodlust and chaos, versus Athena's strategic, disciplined war" },
    { q: "How is Ares generally regarded by the other gods?", a: "Poorly — Zeus calls him the most hateful god to him in the Iliad" },
    { q: "What happens when Hephaestus catches Ares with Aphrodite?", a: "He traps them in an unbreakable golden net and calls the other gods to witness the humiliation" },
    { q: "Which side does Ares fight on in the Trojan War?", a: "Troy" },
  ],
  match: [
    { prompt: "Ares's Roman name is:", answer: "Mars", options: ["Mars", "Vulcan", "Mercury", "Pluto"] },
    { prompt: "Who traps Ares and Aphrodite in a golden net?", answer: "Hephaestus", options: ["Hephaestus", "Zeus", "Poseidon", "Apollo"] },
  ],
  links: [{ id: "g-athena" }, { id: "g-hephaestus" }, { id: "t-troy" }],
};

LESSONS["g-aphrodite"] = {
  id: "g-aphrodite",
  phase: "p1",
  title: "Aphrodite",
  subtitle: "Goddess of love and beauty — older than the Olympians, and the one who starts the Trojan War",
  domain: "Love, beauty, desire",
  symbol: "Dove, myrtle, girdle (a magic belt of allure)",
  roman: "Venus",
  narrative: [
    "Aphrodite's origin, covered earlier, makes her a boundary case worth remembering: she rises from the sea foam where Uranus's severed essence landed, which makes her technically older than Zeus's whole generation, even though she's counted among the Olympians and treated socially like one of Zeus's own children.",
    "She's married to Hephaestus, the least conventionally attractive and least socially central of the major gods, in what reads as an arranged, unhappy pairing — and she has a long, open affair with Ares, war's chaos matched with love's, until Hephaestus catches them (see Ares's lesson).",
    { aside: "The Judgment of Paris", text: "The single most consequential thing Aphrodite ever does: at a wedding, a golden apple inscribed 'to the fairest' is thrown among the goddesses by Eris (Strife), deliberately, to cause exactly the chaos it causes. Hera, Athena, and Aphrodite all claim it, and a Trojan prince named Paris is chosen to judge. Each goddess bribes him — Hera offers power, Athena offers wisdom and victory in war, Aphrodite offers the most beautiful woman in the world. Paris picks Aphrodite. The most beautiful woman in the world turns out to be Helen, already married to a Greek king. That single vain contest is the direct cause of the Trojan War." },
    "It's worth sitting with how deliberately petty that chain of causation is: an entire decade-long war, thousands of deaths, one of the two founding epics of Western literature — all traceable to a goddess's vanity and a bribe. Greek myth rarely pretends history moves for noble reasons.",
  ],
  facts: [
    { q: "How is Aphrodite born, and why does that make her a boundary case among the Olympians?", a: "From sea foam after Uranus's castration — she predates the Olympian generation even though she's counted among them" },
    { q: "Who is Aphrodite married to?", a: "Hephaestus" },
    { q: "What is the Judgment of Paris?", a: "A contest where Paris of Troy chooses Aphrodite as fairest after she bribes him with the world's most beautiful woman" },
    { q: "What does Aphrodite's bribe to Paris directly cause?", a: "The Trojan War — Helen, promised to Paris, was already married to a Greek king" },
    { q: "Who throws the golden apple that starts the contest, and why?", a: "Eris, goddess of Strife, deliberately, to cause chaos at a wedding she wasn't invited to" },
  ],
  match: [
    { prompt: "Aphrodite's Roman name is:", answer: "Venus", options: ["Venus", "Diana", "Juno", "Minerva"] },
    { prompt: "Who judges the beauty contest that leads to the Trojan War?", answer: "Paris", options: ["Paris", "Hector", "Achilles", "Agamemnon"] },
  ],
  links: [{ id: "o-titans" }, { id: "g-hephaestus" }, { id: "t-troy" }],
};

LESSONS["g-hephaestus"] = {
  id: "g-hephaestus",
  phase: "p1",
  title: "Hephaestus",
  subtitle: "The smith god — thrown off Olympus as a baby, and the most talented craftsman alive",
  domain: "The forge, craftsmanship, fire, blacksmiths",
  symbol: "Hammer, anvil, forge",
  roman: "Vulcan",
  narrative: [
    "Hephaestus's origin is unusually cruel even by Olympian standards: born lame (accounts differ on the cause), Hera — his mother, in the most common version, conceived without Zeus at all, as her own answer to Athena's birth — is disgusted by the imperfection and throws him off Mount Olympus. He survives, raised by sea nymphs, and grows up to become the single most skilled craftsman among the gods.",
    "Everything remarkable and mechanical in Greek myth comes out of his forge: Zeus's thunderbolt (working from the Cyclopes' original design), Achilles's armor, Pandora — the first woman, literally built by him at Zeus's order as a punishment aimed at humanity — and countless automatons, including golden mechanical servants who could think and speak, built purely so he wouldn't be alone in his workshop.",
    { aside: "He gets his revenge, sort of", text: "He eventually sends Hera a golden throne as a gift. She sits in it and is instantly bound by invisible chains, and no god can free her. Hephaestus refuses to come release her until Dionysus gets him drunk and brings him back to Olympus by force. It's a strange, almost comic revenge from the god everyone underestimates." },
    "He marries Aphrodite — a mismatch everyone on Olympus recognizes as a mismatch — and is famously humiliated by her affair with Ares, which he responds to not with violence but with cleverness: an unbreakable net and public embarrassment, which is exactly the kind of victory a craftsman god wins.",
  ],
  facts: [
    { q: "Why does Hera throw Hephaestus off Olympus?", a: "He's born lame, and she's disgusted by the imperfection" },
    { q: "What is Hephaestus best known for?", a: "Being the gods' master craftsman — forging weapons, armor, and mechanical creations" },
    { q: "Name two famous things Hephaestus forges.", a: "Zeus's thunderbolt (refined from the Cyclopes' design) and Achilles's armor (also Pandora, the first woman)" },
    { q: "How does Hephaestus get revenge on Hera?", a: "He sends her a golden throne that binds her in invisible chains, and refuses to free her until Dionysus intervenes" },
    { q: "Who is Hephaestus married to, and how does that marriage go?", a: "Aphrodite — unhappily; she has an open affair with Ares" },
  ],
  match: [
    { prompt: "Hephaestus's Roman name is:", answer: "Vulcan", options: ["Vulcan", "Mars", "Mercury", "Janus"] },
    { prompt: "Who does Hephaestus forge at Zeus's order as a punishment for humanity?", answer: "Pandora", options: ["Pandora", "Helen", "Ariadne", "Medusa"] },
  ],
  links: [{ id: "g-hera" }, { id: "g-aphrodite" }, { id: "g-ares" }],
};

LESSONS["g-hermes"] = {
  id: "g-hermes",
  phase: "p1",
  title: "Hermes",
  subtitle: "Messenger god, and Olympus's most gifted liar",
  domain: "Travel, trade, thieves, messages, boundaries between worlds",
  symbol: "Winged sandals, caduceus (herald's staff), winged helmet",
  roman: "Mercury",
  narrative: [
    "Hermes is Zeus's son by Maia, a nymph, and he's precocious in a way no other god is: on the very day he's born, he sneaks out of his cradle and steals Apollo's sacred cattle, cleverly making them walk backward to disguise their tracks, then returns to his cradle and feigns innocence when confronted. Apollo isn't fooled, but he is charmed — the dispute ends with Hermes gifting Apollo the lyre he'd invented that same day (from a tortoise shell), and the two become close.",
    "That first-day heist basically defines him for the rest of mythology: fast, clever, morally flexible, and impossible to stay angry at. He becomes the official messenger of the gods, the only one who can move freely between Olympus, the mortal world, and the underworld — which makes him also the god who guides souls of the newly dead to Hades's realm, a role called psychopomp.",
    { aside: "Patron of thieves — officially", text: "Unlike every other god's domain, Hermes's patronage of thieves, liars, and merchants isn't a side effect of his personality — it's literally his job description. The Greeks didn't need him to be virtuous to be useful; commerce, travel, and communication all require some flexibility with the truth, and Hermes is the god who's honest about that." },
    "He plays a supporting role in an enormous number of other myths precisely because of this mobility — he gives Perseus his winged sandals, guides Heracles into the underworld, and delivers messages between gods and mortals constantly. He's less a main character in his own right and more the god who makes every other god's plot possible.",
  ],
  facts: [
    { q: "What does Hermes do on the day he's born?", a: "Steals Apollo's sacred cattle, disguising their tracks, then feigns innocence" },
    { q: "How is the cattle dispute resolved?", a: "Hermes gives Apollo the lyre he invented, and the two become close" },
    { q: "What is Hermes's role among the gods?", a: "Messenger of the gods, and the only one who moves freely between Olympus, the mortal world, and the underworld" },
    { q: "What is a 'psychopomp,' and why is Hermes one?", a: "A guide of souls to the afterlife — Hermes leads the newly dead to Hades's realm" },
    { q: "What is Hermes patron god of?", a: "Travel, trade, thieves, liars, and messages" },
  ],
  match: [
    { prompt: "Hermes's Roman name is:", answer: "Mercury", options: ["Mercury", "Janus", "Faunus", "Vulcan"] },
    { prompt: "What does Hermes steal on the day he's born?", answer: "Apollo's cattle", options: ["Apollo's cattle", "Zeus's thunderbolt", "Ares's spear", "Poseidon's trident"] },
  ],
  links: [{ id: "g-apollo" }, { id: "g-zeus" }, { id: "h-perseus" }],
};

LESSONS["g-dionysus"] = {
  id: "g-dionysus",
  phase: "p1",
  title: "Dionysus",
  subtitle: "God of wine and ecstatic release — the Olympian with one mortal parent",
  domain: "Wine, festivity, ritual madness, theatre",
  symbol: "Grapevine, thyrsus (a fennel staff), leopard",
  roman: "Bacchus",
  narrative: [
    "Dionysus's mother, Semele, is a mortal princess and Zeus's lover. Hera, in one of her sharper acts of revenge, disguises herself as a friend and convinces Semele to demand Zeus reveal his true divine form — knowing full well (see Zeus's lesson) that no mortal survives seeing it. Semele is incinerated. Zeus saves the unborn child by sewing him into his own thigh until he's ready to be born — which is the literal meaning behind Dionysus's later title, 'twice-born.'",
    "That origin makes him unique: the only Olympian with one fully mortal parent, which the Greeks treated as thematically loaded rather than incidental — his entire domain is about dissolving the line between human limitation and divine ecstasy. Wine does exactly that: it's the one substance that lets an ordinary mortal briefly feel unbound from normal human restraint.",
    { aside: "Not just a party god", text: "Dionysus's worship had a genuinely dangerous edge the popular image of him (jolly god of parties) leaves out. His female followers, the Maenads, could enter a real, frightening religious frenzy — and the myths that punish people who reject his worship (King Pentheus of Thebes, most famously, torn apart by his own mother and aunt while in a Dionysian trance) are treated as cautionary tales about denying a god real power, not comedy." },
    "He's a late addition to the twelve Olympians in most tellings — see Hestia's lesson for the tradition that she steps aside to make room for him, a changeover that reflects a real shift in what Greek religious life actually centered on over time: settled hearth-worship giving way to public festival and ecstatic ritual.",
  ],
  facts: [
    { q: "Who are Dionysus's parents?", a: "Zeus and Semele, a mortal princess" },
    { q: "How does Semele die, and how does Zeus save Dionysus?", a: "Hera tricks her into demanding Zeus's true form, which incinerates her; Zeus sews the unborn Dionysus into his thigh until birth" },
    { q: "What does 'twice-born' refer to?", a: "Dionysus's unusual birth — carried first by Semele, then finished in Zeus's thigh" },
    { q: "Why is Dionysus's mortal parentage thematically significant?", a: "His whole domain is about dissolving the line between human limits and divine ecstasy — exactly what one mortal parent and one god parent represents" },
    { q: "Who are the Maenads?", a: "Dionysus's female followers, capable of entering a real, frenzied religious ecstasy" },
    { q: "What happens to King Pentheus for rejecting Dionysus's worship?", a: "He is torn apart by his own mother and aunt while they're in a Dionysian frenzy" },
  ],
  match: [
    { prompt: "Dionysus's Roman name is:", answer: "Bacchus", options: ["Bacchus", "Faunus", "Janus", "Silenus"] },
    { prompt: "Dionysus's female followers are called:", answer: "Maenads", options: ["Maenads", "Furies", "Muses", "Naiads"] },
  ],
  links: [{ id: "g-zeus" }, { id: "g-hestia" }],
};

LESSONS["g-hestia"] = {
  id: "g-hestia",
  phase: "p1",
  title: "Hestia",
  subtitle: "Goddess of the hearth — the one who gives up her seat, voluntarily",
  domain: "The hearth, home, family life",
  symbol: "The hearth fire itself",
  roman: "Vesta",
  narrative: [
    "Hestia is the eldest child of Kronos and Rhea — the first swallowed and, in the strange logic of that myth, the last one vomited back up, which is why some traditions call her both oldest and youngest at once. She's the goddess of the hearth: the literal fire at the center of every home and every city's public buildings, kept perpetually burning. In a world without electricity, a hearth fire that goes out is a genuine crisis, so her domain is quietly one of the most important on the list, even though she generates almost no dramatic myths.",
    "That's the whole point of her, actually: unlike nearly every other Olympian, Hestia has no scandal, no famous conflict, no myth of romantic pursuit or revenge. Both Poseidon and Apollo court her, and she asks Zeus to let her remain unmarried forever instead, a request he grants — much like Artemis's identical request. She spends her mythology quietly keeping the peace at Olympian feasts and staying out of every family fight.",
    { aside: "Making room for Dionysus", text: "Because there are traditionally twelve seats among the Olympians and Dionysus needs one when he's recognized as a full god, the most common resolution is that Hestia voluntarily gives up her throne to him, retreating instead to keep the hearth-fire at the center of Olympus itself. It's presented as generosity, not demotion — entirely in character for the one Olympian who never wanted the spotlight." },
    "This is the cleanest example in the whole pantheon of a boundary case worth remembering on its own: 'the twelve Olympians' is not a fixed, ancient, unchanging list — it shifts depending on era and city, and Hestia-versus-Dionysus is the most commonly cited swap.",
    { aside: "The whole family, held in one shape", text: "Now that all fourteen are covered, here's how to keep them from blurring together: three brothers drew lots for the universe (Zeus the sky, Poseidon the sea, Hades the underworld). Three sisters filled out that generation (Hestia the hearth, Demeter the harvest, Hera marriage — and Zeus's wife). That's the six Kronos swallowed, the whole first Olympian generation, done. Everyone else you just met is Zeus's child by someone other than Rhea: Athena from his own skull, Ares and Hephaestus by Hera, Apollo and Artemis the twins by Leto, Hermes by Maia, Dionysus by the mortal Semele. And one figure fits neither group at all — Aphrodite, older than Zeus's whole generation, technically nobody's child in the normal sense, who simply sits at the table anyway. Six plus seven plus one outlier: that's fourteen, and that's every name in this phase." },
  ],
  facts: [
    { q: "What is Hestia goddess of?", a: "The hearth — the home and city fire kept perpetually burning" },
    { q: "What request does Hestia make of Zeus, and why is it notable?", a: "To remain unmarried forever — he grants it, the same request Artemis later makes" },
    { q: "Why does Hestia give up her seat among the twelve Olympians?", a: "To make room for Dionysus, in the most common telling — presented as generosity, not demotion" },
    { q: "What does the Hestia/Dionysus swap teach about 'the twelve Olympians' as a list?", a: "It isn't a fixed ancient list — it varies by era and city" },
  ],
  match: [
    { prompt: "Hestia's Roman name is:", answer: "Vesta", options: ["Vesta", "Ceres", "Juno", "Diana"] },
    { prompt: "Hestia gives up her Olympian seat to make room for:", answer: "Dionysus", options: ["Dionysus", "Hades", "Persephone", "Hermes"] },
  ],
  links: [{ id: "g-dionysus" }, { id: "o-titans" }],
};
