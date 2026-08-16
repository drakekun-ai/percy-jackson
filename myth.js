/* ============================================================
   myth.js — shared chrome, lesson lookup, card generation,
   progress tracking. The equivalent of geo.js in the geography
   app: every page includes this after curriculum.js + the
   content-*.js files + srs.js.
   ============================================================ */

const Myth = (() => {
  const PROGRESS_KEY = "myth-progress-v1";

  function loadProgress() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      return raw ? JSON.parse(raw) : { learned: [], lastActive: null, streak: 0 };
    } catch (e) {
      return { learned: [], lastActive: null, streak: 0 };
    }
  }

  function saveProgress(p) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }

  function markLearned(lessonId) {
    const p = loadProgress();
    if (!p.learned.includes(lessonId)) p.learned.push(lessonId);
    saveProgress(p);
  }

  function isLearned(lessonId) {
    return loadProgress().learned.includes(lessonId);
  }

  // call once per page-load on index.html to update the daily streak
  function touchStreak() {
    const p = loadProgress();
    const today = Srs.todayStr();
    if (p.lastActive === today) return p;
    if (p.lastActive) {
      const yesterday = Srs.addDays(today, -1);
      p.streak = p.lastActive === yesterday ? p.streak + 1 : 1;
    } else {
      p.streak = 1;
    }
    p.lastActive = today;
    saveProgress(p);
    return p;
  }

  function lesson(id) {
    return (typeof LESSONS !== "undefined" && LESSONS[id]) || null;
  }

  function cardsFor(lessonObj) {
    const cards = [];
    (lessonObj.facts || []).forEach((f, i) => {
      cards.push({
        id: `${lessonObj.id}::q${i}`,
        type: "question",
        lessonId: lessonObj.id,
        prompt: f.q,
        answer: f.a,
      });
    });
    (lessonObj.match || []).forEach((m, i) => {
      cards.push({
        id: `${lessonObj.id}::m${i}`,
        type: "match",
        lessonId: lessonObj.id,
        prompt: m.prompt,
        answer: m.answer,
        options: m.options,
      });
    });
    return cards;
  }

  function allCardIds() {
    const ids = [];
    Object.values(LESSONS).forEach((l) => {
      cardsFor(l).forEach((c) => ids.push(c.id));
    });
    return ids;
  }

  function nextUnlearnedLesson() {
    const order = allLessonIds();
    for (const id of order) {
      if (LESSONS[id] && !isLearned(id)) return LESSONS[id];
    }
    return null;
  }

  function isSunday() {
    return new Date().getDay() === 0;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- shared page chrome ----------

  function renderHeader(activeTab) {
    const el = document.getElementById("site-header");
    if (!el) return;
    const tabs = [
      { id: "home", label: "Dashboard", href: "index.html" },
      { id: "lessons", label: "Lessons", href: "lessons.html" },
      { id: "review", label: "Review", href: "review.html" },
      { id: "pantheon", label: "Pantheon", href: "pantheon.html" },
    ];
    el.innerHTML = `
      <div class="container">
        <a class="brand" href="index.html">Greek History &amp; Myth</a>
        <nav class="tabs">
          ${tabs
            .map(
              (t) =>
                `<a href="${t.href}" class="${t.id === activeTab ? "active" : ""}">${t.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    `;
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = `Your progress lives in this browser's local storage. Back it up from the Dashboard.`;
  }

  // ---------- backup / restore ----------

  function exportBackup() {
    const payload = {
      exportedAt: new Date().toISOString(),
      srs: Srs.all(),
      progress: loadProgress(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const stamp = Srs.todayStr();
    a.href = url;
    a.download = `greek-myth-history-backup-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function importBackup(file, onDone) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result);
        if (payload.srs) Srs.save(payload.srs);
        if (payload.progress) saveProgress(payload.progress);
        onDone(true);
      } catch (e) {
        onDone(false, e);
      }
    };
    reader.readAsText(file);
  }

  return {
    loadProgress,
    saveProgress,
    markLearned,
    isLearned,
    touchStreak,
    lesson,
    cardsFor,
    allCardIds,
    nextUnlearnedLesson,
    isSunday,
    shuffle,
    renderHeader,
    renderFooter,
    exportBackup,
    importBackup,
  };
})();

// Service workers are blocked on file:// (no origin to scope them to), so
// this only activates once the app is actually hosted — e.g. on GitHub
// Pages — which is also the only case where "install to home screen and
// use offline" is possible in the first place.
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
