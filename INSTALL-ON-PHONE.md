# Installing on your phone

The app runs as a normal website, but once it's hosted somewhere (GitHub Pages —
see the main README) you can install it to your home screen as a real app that
works with no internet connection. This only needs to be done once.

Replace `YOUR-GITHUB-USERNAME` and `YOUR-REPO-NAME` below with your actual GitHub
Pages URL, which looks like:

```
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## iPhone (Safari)

1. Open that URL in **Safari** — it has to be Safari; Chrome on iOS can't install
   home-screen apps.
2. Tap the **Share** button (the square with an arrow pointing up), in the bottom
   toolbar.
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the name (it'll default to "Greek Myth") and tap **Add**.
5. Open it from your home screen like any other app, once, while you still have a
   connection — that first open is what caches everything for offline use.

After that, the app works with no signal: on a plane, on the subway, wherever.

## Android (Chrome)

1. Open the URL in **Chrome**.
2. Tap the **⋮** menu in the top right.
3. Tap **Add to Home screen** (sometimes shown as **Install app**).
4. Confirm.
5. Open it once from the home screen with a connection, same as above, so it
   caches for offline use.

---

## After you update the site

If you add lessons or change any `.js`/`.css` file later, run
`python tools/stamp_version.py` before pushing (see the main README). Without
that step, a phone that already has the app installed will keep serving the old
cached version indefinitely — the version bump is what tells it to fetch fresh
files the next time it's opened with a connection.

## Your progress is per-installation

Review history lives in the browser's local storage, which the installed app
keeps separately from Safari/Chrome's own browsing data. If you use both the
installed app and the browser tab, or install it on more than one device,
they'll track progress independently — **use the Export/Import backup on the
dashboard** to move progress between them.
