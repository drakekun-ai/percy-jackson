/* ============================================================
   sw.js — service worker. Precaches everything the app needs so
   it keeps working with no connection once it's been opened once.

   Bump CACHE any time app files change and the phone install
   should pick up the update — tools/stamp_version.py does this
   automatically. The cache name is the only thing that forces an
   update; without a bump, an already-installed app keeps serving
   whatever it cached the first time, indefinitely.
   ============================================================ */

const CACHE = "greek-myth-v4";

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
  "g-aphrodite.jpg",
  "g-apollo.jpg",
  "g-ares.jpg",
  "g-artemis.jpg",
  "g-athena.jpeg",
  "g-demeter.jpg",
  "g-dionysus.jpg",
  "g-hades.jpg",
  "g-hephaestus.jpg",
  "g-hera.jpg",
  "g-hermes.jpg",
  "g-hestia.jpg",
  "g-poseidon.jpg",
  "g-zeus.jpg",
  "h-atalanta.jpg",
  "h-bestiary.jpg",
  "h-daedalus.jpg",
  "h-heracles.jpg",
  "h-jason.jpg",
  "h-oedipus.jpg",
  "h-perseus.jpg",
  "h-theseus.jpg",
  "o-chaos.jpg",
  "o-titanomachy.jpg",
  "o-titans.jpg",
  "t-alexander.jpg",
  "t-bronze-age.jpg",
  "t-dark-age.jpg",
  "t-golden-age.jpg",
  "t-peloponnesian-war.png",
  "t-persian-wars.jpg",
  "t-sparta-athens.jpg",
  "t-troy.jpg",
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
