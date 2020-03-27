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
    "revision": "438a6de1069016a5221417e50adf4596"
  },
  {
    "url": "posts/brightspace-features copy/index.html",
    "revision": "b7b586fbd3b0d311e546d38964c63057"
  },
  {
    "url": "posts/brightspace-features/index.html",
    "revision": "4d385f7d57b0c863d814052aaf0c646b"
  },
  {
    "url": "posts/hva-bronnen copy/index.html",
    "revision": "b2714c3e537fec57bdbfd8420eff69ef"
  },
  {
    "url": "posts/hva-bronnen/index.html",
    "revision": "584564f9476ece73b12242b2e4e6fd9f"
  },
  {
    "url": "posts/meeting-tools/index.html",
    "revision": "1174ace9388e313d171b25ac1f53ef2d"
  },
  {
    "url": "posts/mondelingen-afnemen/index.html",
    "revision": "21b8499d648b95f89c8e9168cd15e5d3"
  },
  {
    "url": "posts/online-lesgeven/index.html",
    "revision": "daaba9c86203d0a33e22e2fd1353a052"
  },
  {
    "url": "posts/werken-vanuit-huis/index.html",
    "revision": "4295869664a9f5e944e26c8a9c3e0d29"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "aa14361e561cdab807d987f2809ab69f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
