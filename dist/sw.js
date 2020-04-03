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
    "revision": "aff5b7114aa98ff82d9d2b8e44e1fdf4"
  },
  {
    "url": "posts/brightspace-features copy/index.html",
    "revision": "b71ddd09a6aee98dd200a3017cfc4b72"
  },
  {
    "url": "posts/brightspace-features/index.html",
    "revision": "d5597cfa899988d5e99f685303e0d469"
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
    "revision": "a31fd9138242bbb2224705ad76d8bbe0"
  },
  {
    "url": "posts/digitaal-communiceren/index.html",
    "revision": "3bb7318cc497ef03319cf371f69b50e2"
  },
  {
    "url": "posts/digitaal-plezier/index.html",
    "revision": "039b11297c22f37e6d5f1f9da157a795"
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
    "revision": "3c6aa1231aeb1a9b36ea09e42e7378b2"
  },
  {
    "url": "posts/mondelingen-afnemen/index.html",
    "revision": "4318991908e3ed0d1779581341ac3226"
  },
  {
    "url": "posts/online-coaching copy/index.html",
    "revision": "572096cab9b96ce95787225485c9efde"
  },
  {
    "url": "posts/online-coaching/index.html",
    "revision": "614ced10f88631d5bac49ac6ef6710ec"
  },
  {
    "url": "posts/online-lesgeven copy/index.html",
    "revision": "6a1ef8ce34906acd38733231e393fde6"
  },
  {
    "url": "posts/online-lesgeven/index.html",
    "revision": "4bd4e69b75a6edc249493c5b3af7dbef"
  },
  {
    "url": "posts/vervanging-toetsen/index.html",
    "revision": "edfabe1f32735bc6e0a7d61a34ad3c4c"
  },
  {
    "url": "posts/videos-opnemen/index.html",
    "revision": "6ee53c50b16f984d19721d66dd9ee387"
  },
  {
    "url": "posts/werken-vanuit-huis/index.html",
    "revision": "2d1f08432ed2e93f18b88ad06b14dcce"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "aa14361e561cdab807d987f2809ab69f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
