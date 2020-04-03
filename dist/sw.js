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
    "revision": "8bdb191a5941685cd880a48c0092aecd"
  },
  {
    "url": "posts/brightspace-features copy/index.html",
    "revision": "b71ddd09a6aee98dd200a3017cfc4b72"
  },
  {
    "url": "posts/brightspace-features/index.html",
    "revision": "f38befc66377e8c3b3df945c73637b28"
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
    "revision": "804289fb63b488701c4ec15ec47be35c"
  },
  {
    "url": "posts/digitaal-communiceren/index.html",
    "revision": "bc52a7ac2ee2d6ee6c0be37514b6c13f"
  },
  {
    "url": "posts/digitaal-plezier/index.html",
    "revision": "e5eb3ea8bbda332befa605e2beead1f6"
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
    "revision": "c28bb88783e3730c3787e799aa8ae2fe"
  },
  {
    "url": "posts/mondelingen-afnemen/index.html",
    "revision": "64c041df3e87434f7da1c510ce567551"
  },
  {
    "url": "posts/online-coaching copy/index.html",
    "revision": "572096cab9b96ce95787225485c9efde"
  },
  {
    "url": "posts/online-coaching/index.html",
    "revision": "b0d682cfb425696f167b1bca10609090"
  },
  {
    "url": "posts/online-lesgeven copy/index.html",
    "revision": "6a1ef8ce34906acd38733231e393fde6"
  },
  {
    "url": "posts/online-lesgeven/index.html",
    "revision": "86801cafe420c0f149750d5c46c8411e"
  },
  {
    "url": "posts/vervanging-toetsen/index.html",
    "revision": "ea66f044852b09a460a4527c28c69782"
  },
  {
    "url": "posts/videos-opnemen/index.html",
    "revision": "59cf94ac366226b12c29501c595ffc92"
  },
  {
    "url": "posts/werken-vanuit-huis/index.html",
    "revision": "3a04de6c6e91c77de6e0c775a5bd94d4"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "aa14361e561cdab807d987f2809ab69f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
