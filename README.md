# Greek History & Mythology

A self-contained study programme for learning Greek mythology and history the way it
actually connects — built the same way as the geography app: open a file, no install, no
account, and the knowledge stays because of spaced repetition, not because of willpower.

**On a laptop:** open `index.html` in your browser. No install, no server, no internet
connection. Double-click the file.

**On a phone:** the app is also a PWA (installable, works offline). See
[INSTALL-ON-PHONE.md](INSTALL-ON-PHONE.md) — it needs the site hosted somewhere first
(GitHub Pages is the free option; see "Publishing to GitHub" below), then installs to
your home screen like a real app.

---

## How to use it

The dashboard tells you what to do each day. The routine is short on purpose:

1. **Clear the review queue first.** This is the part that makes everything permanent.
2. **One new lesson.** Written in a fast, conversational voice — the story first, the
   testable facts pulled out at the end.
3. **Drill what you just learned.** The lesson ends with it.

On **Sundays**, skip the new lesson and do the **Assembly** instead (in the Pantheon):
every god, Titan, and hero you've learned so far, placed on one blank family tree from
memory. That's what turns thirty-five separate lessons into one connected picture — the
same role the geography app's Sunday "world assembly" plays for countries.

### The one rule

If you only do one thing on a busy day, **do the reviews, not the new lesson**. Skipping
reviews is the only failure mode that wastes the effort already spent.

---

## How it decides what to show you

Every fact a lesson teaches becomes a review card the moment you finish the drill. Each
card comes back just before you'd forget it — first after 1 day, then 3, then 7, 16, 35,
90, and outward. Get one wrong and it drops back to a short interval automatically.

You grade your own recall on written questions. That's deliberate: the honest signal is
your own judgement in the instant *before* the answer appears — decide whether you knew
it, then press the button.

Match cards grade themselves. There are two kinds of card:

| Card | What it asks |
|---|---|
| Question | A written fact — self-graded |
| Match | Multiple choice (domain, symbol, parentage, a name) — auto-graded |

The Pantheon's Assembly drill is a third mode, built specifically for Sundays: the whole
family tree, blank, filled in from memory and self-graded node by node.

---

## The voice

Lessons are written the way the best modern retellings of these myths read: conversational,
funny where the material earns it, full of modern comparisons — but short. Each lesson
pulls out the specific facts worth remembering into its own list at the end, so the story
does the teaching and the review cards do the retaining. The goal is to actually know this
material, not to read a textbook chapter about it.

---

## What makes it feel like one story, not 35 entries

A few things work together on purpose:

- **Every lesson page opens with "Previously / Up next.**" The curriculum has a
  deliberate order, and the breadcrumb makes that order visible, so working through it
  reads like a continuing story rather than picking items off a menu.
- **A "family tree" strip on every god, Titan, or hero's page.** Pulled straight from
  `family.js` — parents, siblings, children — as links to lessons you've already read, so
  the relationships you're building in the Pantheon show up right where you're reading
  too, not just on the tree page.
- **Recurring rules, stated once and then just used.** Hubris, xenia, and "prophecy always
  wins" are taught explicitly in one early lesson (`o-rules`) and then simply referenced
  everywhere they apply afterward — Oedipus, Icarus, Arachne — instead of re-explained
  each time, the same way a novel doesn't re-introduce a rule of its world every chapter.
- **Deliberate memory hooks for the lists that actually get confused.** The swallowing-and-
  reversal order of Kronos's six children, the twelve Olympian seats grouped as
  three-plus-three-plus-seven-plus-one, and the Twelve Labors grouped by what kind of task
  each one is (local monster → chore → foreign capture → impossible theft) — each one gets
  its own aside precisely because a flat list of names is the hardest thing in this
  material to hold onto.
- **The Pantheon ties it all together visually.** It's the one page where every lesson
  you've done shows up on a single diagram at once — which is exactly the point of doing
  the Sunday Assembly regularly, not just reading it as a reference.
- **A real image on almost every lesson.** 33 of the 35 lessons open with a classical
  statue, ancient vase painting, mosaic, or museum artifact pulled from Wikipedia/Wikimedia
  Commons and stored locally in `img/` — a face (or a scene) to attach to the name, not
  just prose. See [CREDITS.md](CREDITS.md) for every source and license.

---

## Back up your progress

Your schedule lives in your browser's local storage. **Clearing your browser data would
erase it.** There's an Export button on the dashboard — it saves a single small file.
Do it every month or so. Import restores it, on this machine or any other.

---

## Publishing to GitHub

Hosting it on GitHub Pages is what makes the phone install possible — a `file://` page
can't run a service worker, so offline-on-a-phone specifically needs a real URL.

This repo is already set up as **`babablacksheep-ops/greek-history-myth`** (public) —
local commits are done, the remote is already added. All that's left:

1. Create the (empty) repository at
   [github.com/new](https://github.com/new?name=greek-history-myth&visibility=public) —
   name it `greek-history-myth`, public, and don't add a README/gitignore/license there
   (this repo already has them; adding them on GitHub too would conflict).
2. From this folder: `git push -u origin main`. First push from this machine may pop up a
   browser window to sign in to GitHub — that's Git's own credential manager, not this app.
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`
   → Save.** Give it a minute; the URL appears at the top of that same page — it'll be
   `https://babablacksheep-ops.github.io/greek-history-myth/`.
4. Open that URL on your phone and follow [INSTALL-ON-PHONE.md](INSTALL-ON-PHONE.md).

After that first push, `git add . && git commit -m "..." && git push` is all it takes to
publish updates — just remember `tools/stamp_version.py` first (see below) or the phone
app won't notice anything changed.

---

## What's here now, and what's coming

**Phase 0 — The Origins (5 lessons, written).** Chaos, Gaia, and Uranus; the Titans and the
fall of Uranus; the Titanomachy; dividing the world between the three brothers; and the
unwritten rules — hubris, xenia, fate, prophecy — that every later myth obeys.

**Phase 1 — The Pantheon (14 lessons, written).** All twelve Olympians plus Hades and
Hestia — the two everyone forgets and the two boundary cases worth understanding on
purpose, not by accident.

**Phase 2 — Heroes & Monsters (8 lessons, written).** Perseus, Heracles, Theseus, Jason,
Oedipus, Atalanta, Daedalus & Icarus, and a bestiary lesson for the monsters that never got
their own hero to headline. Not yet written: Orpheus, and a full lesson on the Odyssey.

**Phase 3 — The Threads (8 lessons, written).** Real history, in order: the Bronze Age
civilizations the myths are folk memory of, the Trojan War where myth and archaeology meet,
the Dark Age and the rise of the city-state, Sparta and Athens side by side, the Persian
Wars, the Golden Age of Athens, the Peloponnesian War that ends it, and Alexander spreading
Greek culture across three continents. Not yet written: Greek philosophy in depth, the
Oracle at Delphi and Greek religious practice, Greek theatre, and Rome's inheritance of
Greek culture.

Lessons cross-link in both directions — Athena's lesson points to Athens's founding myth
and the Golden Age it shaped; the Golden Age lesson points back to her. That's what stops
the programme being thirty-five disconnected facts.

The Lessons page shows the full roadmap, including what hasn't been written yet.

---

## For whoever maintains this

### Structure

```
index.html      dashboard — today's plan, progress, backup
lessons.html    the full curriculum list
lesson.html     renders any lesson from data (?id=g-zeus)
review.html     the due queue
pantheon.html   free exploration of the family tree + the Sunday assembly drill

sw.js                 service worker — precaches everything for offline use
manifest.webmanifest  app name, icons, standalone display (the PWA install prompt)
icon-192.png, icon-512.png, apple-touch-icon.png   generated app icons (tools/make_icons.py)
img/                  one image per lesson, pulled from Wikimedia Commons (tools/fetch_images.py)
CREDITS.md            artist/license/source for every image in img/

styles.css   all styling, light and dark, parchment/marble theme

srs.js              the fixed-ladder scheduler, localStorage-backed
quiz.js             the drill engine (question + match cards)
myth.js             lesson lookup, card generation, shared chrome, progress/backup, SW registration
render.js           narrative block renderer, breadcrumb, and family-tree strip, used by lesson.html
tree.js             lays out family.js as an SVG genealogy diagram

curriculum.js         phase and lesson order, plus the honest "not yet written" roadmap
family.js             the genealogy tree data behind the Pantheon page
content-origins.js    Phase 0 lesson content
content-olympians.js  Phase 1 lesson content
content-heroes.js     Phase 2 lesson content
content-threads.js    Phase 3 lesson content

tools/make_icons.py      draws the app icons
tools/stamp_version.py   bumps every ?v= cache-buster AND the service worker cache name
tools/fetch_images.py    pulls one lesson image from Wikipedia into img/, records the license
```

`tools/` is developer-only — the site itself never fetches anything from it.

### After changing any `.js` or `.css` file

```bash
python tools/stamp_version.py
```

Browsers cache aggressively, and the installed phone app caches even harder through its
service worker. Skip this and a browser (or worse, an already-installed phone app) can
keep serving the old files indefinitely with no error to explain why new lessons aren't
showing up. This is the single most important step to remember before committing.

### Adding lessons

Add an entry to the relevant `content-*.js` file (or a new phase file, following the same
`var LESSONS = typeof LESSONS === "undefined" ? {} : LESSONS;` merge pattern at the top)
and list its id in `curriculum.js`. Everything else — the drill, the review cards, the
roadmap page, the cross-links — is derived from that one object. There are no per-lesson
pages to write.

If the lesson is about a god, Titan, or hero, also add a node to `family.js` so it shows up
on the Pantheon tree — `parents` should only ever reference other node `id`s in that same
file; a mortal or minor second parent goes in the `other` text field instead, not as its
own node, or the tree gets unreadable fast.

**Card ids are permanent.** They're built as `${lessonId}::q${index}` and
`${lessonId}::m${index}` from each lesson's `facts` and `match` arrays, and they key the
review schedule — reordering or renaming a fact throws away that card's review history.
Add new facts at the end of the array, don't reorder existing ones.

### Data model

Each lesson is a plain object: `id`, `phase`, `title`, `subtitle`, optional metadata
(`domain`, `symbol`, `roman`, `era`, `where`), an optional `image` (`{file, alt, artist,
license, commonsUrl}` — `render.js` renders it with a credit line automatically), a
`narrative` array (strings are paragraphs; `{aside, text}` objects render as a pulled-out
note), a `facts` array of `{q, a}` pairs that become self-graded review cards, an optional
`match` array of `{prompt, answer, options}` for auto-graded multiple choice, and a `links`
array of `{id}` (or `{id, label}` if the target lesson isn't written yet) for the cross-link
chips at the bottom of the page.

### The scheduler

`srs.js` uses a fixed interval ladder — 1, 3, 7, 16, 35, 90 days, then roughly ×2.2 per
further correct review — rather than a variable ease factor. A miss resets a card straight
to step 0. It's deliberately simpler than full SM-2: the point of this app is getting
through the material fast, and a predictable ladder is easier to reason about than a
creeping ease factor.

Progress (`myth-progress-v1`) and review state (`myth-srs-v1`) are separate localStorage
keys, so adding new lessons never disturbs what's already been learned.
