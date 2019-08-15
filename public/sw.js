/* Service Worker methods */
/* global importScripts Promise workbox */
/* eslint-disable no-undef, no-unused-vars, no-console */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! You are now set-up for offline mode. 🎉`);

  // CONFIG
  workbox.precaching.precacheAndRoute([]);

  workbox.core.setCacheNameDetails({
    prefix: 'haliburton',
  });

  workbox.skipWaiting();

  const { routing, strategies } = workbox;

  // CACHE ASSETS

  routing.registerRoute(
    /\.(?:js|css)$/,
    strategies.staleWhileRevalidate(),
  );

  routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    strategies.staleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  );

  routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
        }),
      ],
    }),
  );

  // CLEAN ON ACTIVATE
  self.addEventListener('activate', (event) => {
    'use strict';

    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName === workbox.core.cacheNames.runtime)
            .map((cacheName) => caches.delete(cacheName))
        );
      }).then(() => {
        // To claim currently open clients.
        self.clients.claim();
      })
    );
  });
} else {
  console.log(`Offline mode is not available in your current browser.`);
}
/* eslint-enable no-undef, no-unused-vars, no-console */
