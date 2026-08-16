/* ============================================================
   srs.js — spaced repetition scheduler, localStorage-backed.

   Fixed interval ladder (days): 1, 3, 7, 16, 35, 90, then each
   further correct review grows the interval ~2.2x. A missed
   card drops straight back to step 0 (due tomorrow) — no
   partial credit, because half-remembered is not remembered.
   ============================================================ */

const Srs = (() => {
  const KEY = "myth-srs-v1";
  const LADDER = [1, 3, 7, 16, 35, 90];
  const GROWTH = 2.2;

  function todayStr() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }

  function addDays(dateStr, n) {
    const d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + Math.round(n));
    return d.toISOString().slice(0, 10);
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function intervalForStep(step) {
    if (step < LADDER.length) return LADDER[step];
    const extra = step - (LADDER.length - 1);
    return Math.round(LADDER[LADDER.length - 1] * Math.pow(GROWTH, extra));
  }

  function get(cardId) {
    const state = load();
    return state[cardId] || null;
  }

  function all() {
    return load();
  }

  // correct: boolean — did the learner know it?
  function grade(cardId, correct) {
    const state = load();
    const prev = state[cardId] || { step: -1, reps: 0, lapses: 0, due: todayStr() };
    let step;
    if (correct) {
      step = prev.step < 0 ? 0 : prev.step + 1;
    } else {
      step = 0;
    }
    const interval = intervalForStep(step);
    const entry = {
      step,
      reps: prev.reps + 1,
      lapses: prev.lapses + (correct ? 0 : 1),
      due: addDays(todayStr(), interval),
      lastReviewed: todayStr(),
    };
    state[cardId] = entry;
    save(state);
    return entry;
  }

  // cardIds: full list of ids that currently exist (from cardsFor).
  // Returns those that have been introduced (have state) and are due today or earlier.
  function dueCards(cardIds) {
    const state = load();
    const today = todayStr();
    return cardIds.filter((id) => {
      const s = state[id];
      return s && s.due <= today;
    });
  }

  function introducedCount(cardIds) {
    const state = load();
    return cardIds.filter((id) => state[id]).length;
  }

  function isIntroduced(cardId) {
    const state = load();
    return !!state[cardId];
  }

  return {
    todayStr,
    addDays,
    load,
    save,
    get,
    all,
    grade,
    dueCards,
    introducedCount,
    isIntroduced,
    LADDER,
  };
})();
