/* ============================================================
   quiz.js — the drill engine. Feed it a container element and
   a list of cards; it walks through them one at a time and
   reports a summary when done.

   Question cards: self-graded. Reveal the answer, then you
   decide honestly whether you knew it — that's the whole point.
   Match cards: multiple choice, auto-graded.
   ============================================================ */

const Quiz = (() => {
  function run(container, cards, onComplete) {
    const queue = Myth.shuffle(cards);
    let idx = 0;
    let correct = 0;

    function renderCard() {
      if (idx >= queue.length) {
        return renderSummary();
      }
      const card = queue[idx];
      const progress = `Card ${idx + 1} of ${queue.length}`;
      if (card.type === "question") {
        container.innerHTML = `
          <div class="quiz-progress">${progress}</div>
          <div class="quiz-prompt">${card.prompt}</div>
          <div id="quiz-answer-slot"></div>
          <div class="btn-row" id="quiz-controls">
            <button class="btn" id="reveal-btn">Show answer</button>
          </div>
        `;
        container.querySelector("#reveal-btn").addEventListener("click", () => {
          container.querySelector("#quiz-answer-slot").innerHTML = `<div class="quiz-answer">${card.answer}</div>`;
          container.querySelector("#quiz-controls").innerHTML = `
            <button class="btn bad" id="miss-btn">I missed it</button>
            <button class="btn good" id="got-btn">I knew it</button>
          `;
          container.querySelector("#miss-btn").addEventListener("click", () => grade(card, false));
          container.querySelector("#got-btn").addEventListener("click", () => grade(card, true));
        });
      } else if (card.type === "match") {
        const options = Myth.shuffle(card.options);
        container.innerHTML = `
          <div class="quiz-progress">${progress}</div>
          <div class="quiz-prompt">${card.prompt}</div>
          <div class="quiz-options">
            ${options
              .map((opt, i) => `<button class="quiz-option" data-opt="${Render.escapeHtml(opt)}">${opt}</button>`)
              .join("")}
          </div>
        `;
        container.querySelectorAll(".quiz-option").forEach((btn) => {
          btn.addEventListener("click", () => {
            const chosen = btn.getAttribute("data-opt");
            const isCorrect = chosen === card.answer;
            container.querySelectorAll(".quiz-option").forEach((b) => {
              b.disabled = true;
              const val = b.getAttribute("data-opt");
              if (val === card.answer) b.classList.add("correct");
              else if (b === btn) b.classList.add("incorrect");
            });
            setTimeout(() => grade(card, isCorrect), 550);
          });
        });
      }
    }

    function grade(card, isCorrect) {
      Srs.grade(card.id, isCorrect);
      if (isCorrect) correct++;
      idx++;
      renderCard();
    }

    function renderSummary() {
      const pct = queue.length ? Math.round((correct / queue.length) * 100) : 100;
      container.innerHTML = `
        <div class="quiz-summary">
          <div class="score">${correct} / ${queue.length}</div>
          <div class="muted">${pct}% recalled cleanly this round</div>
        </div>
      `;
      if (onComplete) onComplete({ total: queue.length, correct });
    }

    renderCard();
  }

  return { run };
})();
