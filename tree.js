/* ============================================================
   tree.js — lays out FAMILY_TREE as an SVG genealogy diagram.
   Generic layered-row layout: each `gen` is a row, nodes in a
   row are spread evenly across a fixed width. No graph-layout
   library — with generations this small, straight rows are
   plenty, and the odd crossing edge (cousins marrying cousins)
   is accurate to the source material.
   ============================================================ */

const Tree = (() => {
  const WIDTH = 920;
  const ROW_HEIGHT = 130;
  const TOP_PAD = 50;
  const RADIUS = 30;

  function layout(nodes) {
    const byGen = {};
    nodes.forEach((n) => {
      (byGen[n.gen] = byGen[n.gen] || []).push(n);
    });
    const positions = {};
    Object.keys(byGen)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((gen) => {
        const row = byGen[gen];
        const colWidth = WIDTH / row.length;
        row.forEach((n, i) => {
          positions[n.id] = {
            x: colWidth * (i + 0.5),
            y: TOP_PAD + gen * ROW_HEIGHT,
          };
        });
      });
    return positions;
  }

  function height(nodes) {
    const maxGen = Math.max(...nodes.map((n) => n.gen));
    return TOP_PAD * 2 + maxGen * ROW_HEIGHT;
  }

  // opts: { blank: bool, learnedSet: Set, onNodeClick: fn(node) }
  function render(container, nodes, opts) {
    opts = opts || {};
    const pos = layout(nodes);
    const h = height(nodes);
    const byId = {};
    nodes.forEach((n) => (byId[n.id] = n));

    let edges = "";
    nodes.forEach((n) => {
      (n.parents || []).forEach((pid) => {
        const p = pos[pid];
        const c = pos[n.id];
        if (!p || !c) return;
        const midY = (p.y + c.y) / 2;
        edges += `<path class="tree-edge" d="M${p.x},${p.y} C${p.x},${midY} ${c.x},${midY} ${c.x},${c.y}" />`;
      });
    });

    let circles = "";
    nodes.forEach((n) => {
      const p = pos[n.id];
      let cls = "tree-node-circle";
      if (n.mortal) cls += " mortal";
      if (!opts.blank && opts.learnedSet && opts.learnedSet.has(n.id)) cls += " learned";
      if (opts.blank) cls += " assembly-blank";
      const label = opts.blank ? "?" : n.name;
      circles += `
        <g class="tree-node" data-id="${n.id}" style="cursor:pointer">
          <circle class="${cls}" cx="${p.x}" cy="${p.y}" r="${RADIUS}" data-id="${n.id}"></circle>
          <text class="tree-node-label" x="${p.x}" y="${p.y + RADIUS + 14}" text-anchor="middle">${label}</text>
        </g>
      `;
    });

    container.innerHTML = `<svg viewBox="0 0 ${WIDTH} ${h}" width="${WIDTH}" height="${h}" xmlns="http://www.w3.org/2000/svg">${edges}${circles}</svg>`;

    if (opts.onNodeClick) {
      container.querySelectorAll(".tree-node").forEach((g) => {
        g.addEventListener("click", () => {
          const id = g.getAttribute("data-id");
          opts.onNodeClick(byId[id], g);
        });
      });
    }
  }

  return { layout, height, render };
})();
