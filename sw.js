/* ============================================================
   sw.js — service worker. Precaches everything the app needs so
   it keeps working with no connection once it's been opened once.

   Bump CACHE any time app files change and the phone install
   should pick up the update — tools/stamp_version.py does this
   automatically. The cache name is the only thing that forces an
   update; without a bump, an already-installed app keeps serving
   whatever it cached the first time, indefinitely.
   ============================================================ */

const CACHE = "greek-myth-v2";

const PRECACHE_URLS = [
  "index.html",
  "lessons.html",
  "lesson.html",
  "review.html",
  "pantheon.html",
  "styles.css",
  "curriculum.js",
  "family.js",
  "srs.js",
  "myth.js",
  "render.js",
  "quiz.js",
  "tree.js",
  "content-origins.js",
  "content-olympians.js",
  "content-heroes.js",
  "content-threads.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "img/g-aphrodite.jpg",
  "img/g-apollo.jpg",
  "img/g-ares.jpg",
  "img/g-artemis.jpg",
  "img/g-athena.jpg",
  "img/g-demeter.jpg",
  "img/g-dionysus.jpg",
  "img/g-hades.jpg",
  "img/g-hephaestus.jpg",
  "img/g-hera.jpg",
  "img/g-hermes.jpg",
  "img/g-hestia.jpg",
  "img/g-poseidon.jpg",
  "img/g-zeus.jpg",
  "img/h-atalanta.jpg",
  "img/h-bestiary.jpg",
  "img/h-daedalus.jpg",
  "img/h-heracles.jpg",
  "img/h-jason.jpg",
  "img/h-oedipus.jpg",
  "img/h-perseus.jpg",
  "img/h-theseus.jpg",
  "img/o-chaos.jpg",
  "img/o-titanomachy.jpg",
  "img/o-titans.jpg",
  "img/t-alexander.jpg",
  "img/t-bronze-age.jpg",
  "img/t-dark-age.jpg",
  "img/t-golden-age.jpg",
  "img/t-peloponnesian-war.png",
  "img/t-persian-wars.jpg",
  "img/t-sparta-athens.jpg",
  "img/t-troy.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cache-first: instant offline loads; a page refresh after a real update
// will pick up the new cache once install/activate above has run.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => cached);
    })
  );
});
