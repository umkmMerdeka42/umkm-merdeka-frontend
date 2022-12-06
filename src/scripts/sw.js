/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/icon-48x48.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/UMKM-Merdeka.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
