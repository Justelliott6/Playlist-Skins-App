self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("playlist-skins-cache").then(cache => {
      return cache.addAll([
        "/Playlist-Skins-App/index.html",
        "/Playlist-Skins-App/boombox.png",
        "/Playlist-Skins-App/manifest.json"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
