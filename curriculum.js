/* ============================================================
   curriculum.js — phase and lesson order.
   Lesson content lives in content-origins.js, content-olympians.js,
   content-heroes.js, content-threads.js — all merged into the
   global LESSONS object. This file only defines the roadmap and
   the order lessons are taught in.
   ============================================================ */

const CURRICULUM = {
  phases: [
    {
      id: "p0",
      title: "The Origins",
      subtitle: "How the world starts, and the rules every later story obeys",
      lessons: ["o-chaos", "o-titans", "o-titanomachy", "o-division", "o-rules"],
    },
    {
      id: "p1",
      title: "The Pantheon",
      subtitle: "The gods who run the place — Olympus, floor by floor",
      lessons: [
        "g-zeus", "g-hera", "g-poseidon", "g-hades", "g-demeter",
        "g-athena", "g-apollo", "g-artemis", "g-ares", "g-aphrodite",
        "g-hephaestus", "g-hermes", "g-dionysus", "g-hestia",
      ],
    },
    {
      id: "p2",
      title: "Heroes & Monsters",
      subtitle: "Demigods, quests, and things with too many heads",
      lessons: [
        "h-perseus", "h-heracles", "h-theseus", "h-jason",
        "h-oedipus", "h-atalanta", "h-daedalus", "h-bestiary",
      ],
    },
    {
      id: "p3",
      title: "The Threads",
      subtitle: "Where myth turns into history — and history keeps the myth's shape",
      lessons: [
        "t-bronze-age", "t-troy", "t-dark-age", "t-sparta-athens",
        "t-persian-wars", "t-golden-age", "t-peloponnesian-war", "t-alexander",
      ],
    },
  ],
  // Lessons planned but not yet written — shown greyed-out on the roadmap,
  // same honesty policy as the geography app: never hide what's missing.
  roadmap: [
    { phase: "p2", title: "Orpheus & Eurydice" },
    { phase: "p2", title: "The Odyssey (Odysseus's journey home)" },
    { phase: "p3", title: "Greek philosophy — Socrates, Plato, Aristotle" },
    { phase: "p3", title: "The Oracle at Delphi & Greek religion in practice" },
    { phase: "p3", title: "Greek theatre — tragedy and comedy" },
    { phase: "p3", title: "Rome inherits Greece" },
  ],
};

// flat ordered list of every lesson id in curriculum order
function allLessonIds() {
  return CURRICULUM.phases.flatMap((p) => p.lessons);
}

function phaseOf(lessonId) {
  return CURRICULUM.phases.find((p) => p.lessons.includes(lessonId));
}
