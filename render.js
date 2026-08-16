/* ============================================================
   render.js — turns a lesson object into HTML. Shared between
   lesson.html and anywhere else a lesson needs to be shown.

   Narrative blocks are either a plain string (paragraph) or
   {aside: "label", text: "..."} for a pulled-out note.
   ============================================================ */

const Render = (() => {
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function narrative(blocks) {
    return blocks
      .map((b) => {
        if (typeof b === "string") {
          return `<p>${b}</p>`;
        }
        if (b.aside) {
          return `<div class="aside"><strong>${escapeHtml(b.aside)}.</strong> ${b.text}</div>`;
        }
        return "";
      })
      .join("\n");
  }

  function lessonImage(lesson) {
    if (!lesson.image) return "";
    const img = lesson.image;
    return `
      <figure class="lesson-image">
        <img src="${img.file}" alt="${escapeHtml(img.alt || lesson.title)}" loading="lazy" />
        <figcaption class="small muted">
          ${escapeHtml(img.alt || "")}${img.alt ? " — " : ""}<a href="${img.commonsUrl}" target="_blank" rel="noopener">${escapeHtml(img.artist || "Wikimedia Commons")}</a>, ${escapeHtml(img.license || "")}, via Wikimedia Commons
        </figcaption>
      </figure>
    `;
  }

  function factsStrip(lesson) {
    const items = [];
    if (lesson.domain) items.push(["Domain", lesson.domain]);
    if (lesson.symbol) items.push(["Symbol", lesson.symbol]);
    if (lesson.roman) items.push(["Roman name", lesson.roman]);
    if (lesson.era) items.push(["When", lesson.era]);
    if (lesson.where) items.push(["Where", lesson.where]);
    if (!items.length) return "";
    return `<div class="facts-strip">${items
      .map(([k, v]) => `<div class="fact-item"><strong>${k}</strong>${v}</div>`)
      .join("")}</div>`;
  }

  function crossLinks(lesson) {
    if (!lesson.links || !lesson.links.length) return "";
    const chips = lesson.links
      .map((l) => {
        const target = Myth.lesson(l.id);
        const label = target ? target.title : l.label || l.id;
        return `<a class="chip" href="lesson.html?id=${l.id}">${label}</a>`;
      })
      .join("");
    return `<div class="cross-links"><span class="muted small">Connects to</span><div class="chip-row">${chips}</div></div>`;
  }

  // "Previously / Up next" — the curriculum has a deliberate order; this makes
  // that order visible so lessons read as one continuing story, not a menu.
  function breadcrumb(lesson) {
    const order = allLessonIds();
    const idx = order.indexOf(lesson.id);
    const prev = idx > 0 ? Myth.lesson(order[idx - 1]) : null;
    const next = idx >= 0 && idx < order.length - 1 ? Myth.lesson(order[idx + 1]) : null;
    if (!prev && !next) return "";
    const parts = [];
    if (prev) parts.push(`<span>Previously: <a href="lesson.html?id=${prev.id}">${prev.title}</a></span>`);
    if (next) parts.push(`<span>Up next: <a href="lesson.html?id=${next.id}">${next.title}</a></span>`);
    return `<div class="lesson-breadcrumb small muted">${parts.join(" &nbsp;&middot;&nbsp; ")}</div>`;
  }

  // Pulls this lesson's spot on the family tree (if it has one) and shows
  // parents / siblings / children as links to lessons already written —
  // the family tree made textual, right where you're already reading.
  function familyStrip(lesson) {
    if (typeof FAMILY_TREE === "undefined") return "";
    const node = FAMILY_TREE.nodes.find((n) => n.lesson === lesson.id);
    if (!node) return "";
    const byId = {};
    FAMILY_TREE.nodes.forEach((n) => (byId[n.id] = n));

    const parents = (node.parents || []).map((pid) => byId[pid]).filter(Boolean);
    const siblings = FAMILY_TREE.nodes.filter(
      (n) => n.id !== node.id && n.parents && node.parents && n.parents.some((p) => node.parents.includes(p))
    );
    const children = FAMILY_TREE.nodes.filter((n) => (n.parents || []).includes(node.id));

    function chip(n) {
      return n.lesson && n.lesson !== lesson.id
        ? `<a class="chip" href="lesson.html?id=${n.lesson}">${n.name}</a>`
        : `<span class="chip">${n.name}</span>`;
    }

    const rows = [];
    if (parents.length) rows.push(`<span class="pill">Parent${parents.length > 1 ? "s" : ""}</span> ${parents.map(chip).join(" ")}`);
    if (siblings.length) rows.push(`<span class="pill">Sibling${siblings.length > 1 ? "s" : ""}</span> ${siblings.map(chip).join(" ")}`);
    if (children.length) rows.push(`<span class="pill">Children</span> ${children.map(chip).join(" ")}`);
    if (node.other) rows.push(`<span class="muted small">${node.other}</span>`);
    if (!rows.length) return "";

    return `<div class="cross-links"><span class="muted small">On the family tree</span><div class="chip-row" style="align-items:center;gap:0.5rem">${rows
      .map((r) => `<div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">${r}</div>`)
      .join("")}</div></div>`;
  }

  function lessonPage(lesson) {
    return `
      <div class="lesson-head">
        <h1>${lesson.title}</h1>
        <div class="subtitle">${lesson.subtitle || ""}</div>
        ${breadcrumb(lesson)}
        ${factsStrip(lesson)}
      </div>
      ${lessonImage(lesson)}
      <div class="narrative">
        ${narrative(lesson.narrative || [])}
      </div>
      ${familyStrip(lesson)}
      ${crossLinks(lesson)}
    `;
  }

  return { narrative, factsStrip, crossLinks, breadcrumb, familyStrip, lessonImage, lessonPage, escapeHtml };
})();
