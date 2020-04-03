/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

importScripts(
  "/static/scripts/worker.js"
);

workbox.core.setCacheNameDetails({prefix: "emergency-site"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "6271f5409009b58856f219f584b86bcc"
  },
  {
    "url": "posts/brightspace-features copy/index.html",
    "revision": "b71ddd09a6aee98dd200a3017cfc4b72"
  },
  {
    "url": "posts/brightspace-features/index.html",
    "revision": "544607ce163b705f68929140287658aa"
  },
  {
    "url": "posts/corona-informate/index.html",
    "revision": "5cc7f1b803a21e25bf646aa777d46f11"
  },
  {
    "url": "posts/corona-informatie copy/index.html",
    "revision": "06b42e96d3a9a6025ed3b3bf3183c5bf"
  },
  {
    "url": "posts/corona-informatie/index.html",
    "revision": "b1e767ba7610aeb5f5893e2ba850df8d"
  },
  {
    "url": "posts/digitaal-communiceren/index.html",
    "revision": "a7d1a87ee5891d3ade8da3ce35bdea6c"
  },
  {
    "url": "posts/digitaal-plezier/index.html",
    "revision": "393ff0bdff32ca7bf83de62e904a5d00"
  },
  {
    "url": "posts/hva-bronnen/index.html",
    "revision": "8b7faaf2465051a7648bbb61a59b0a89"
  },
  {
    "url": "posts/key-users/index.html",
    "revision": "0433620e913e938271303e2b4dbfbd0c"
  },
  {
    "url": "posts/meeting-tools/index.html",
    "revision": "a2efbd30e52ddf109a1ca5bc7ef192e1"
  },
  {
    "url": "posts/mondelingen-afnemen/index.html",
    "revision": "e31664024cab751e798997c0ab8b0f48"
  },
  {
    "url": "posts/online-coaching copy/index.html",
    "revision": "572096cab9b96ce95787225485c9efde"
  },
  {
    "url": "posts/online-coaching/index.html",
    "revision": "f2ef6796835b3e3fd4a145c35e76aa6e"
  },
  {
    "url": "posts/online-lesgeven copy/index.html",
    "revision": "6a1ef8ce34906acd38733231e393fde6"
  },
  {
    "url": "posts/online-lesgeven/index.html",
    "revision": "f34f6e56acc3cdbf8f0a9035d76c4bb5"
  },
  {
    "url": "posts/vervanging-toetsen/index.html",
    "revision": "02444b31dc4db777bef59319c8d53bee"
  },
  {
    "url": "posts/videos-opnemen/index.html",
    "revision": "02773eb0e0be718a6f543896d5c122db"
  },
  {
    "url": "posts/werken-vanuit-huis/index.html",
    "revision": "502e5e52741f62d414cae90b6af467f9"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "aa14361e561cdab807d987f2809ab69f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
