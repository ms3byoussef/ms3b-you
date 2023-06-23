'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "8087d50a23465a8d03c45e6358ef9c55",
"assets/AssetManifest.smcbin": "a9341be28a23ba9a45409faedfcfc2a8",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/connect/buy_me.svg": "87873ba2e2bbd305db569a3b04416535",
"assets/assets/images/connect/email-mails.svg": "9a86aafbdbac66ed40d1efaaaa508be8",
"assets/assets/images/connect/location.svg": "90d83c8f942c7b55a7d6e1ba86405234",
"assets/assets/images/connect/phone-call.svg": "a788fedce7b289ebadcca3c89ee94887",
"assets/assets/images/connect/whatsapp-black.svg": "b39ec5a5b563fd3b2a6e48baa6e065e1",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/projects/aby_seyara.png": "693bd4ac63bb1e849ace63eb557be6de",
"assets/assets/images/projects/attendance_app1.png": "2a0496a56cc9e129fa85c7788e48d4b9",
"assets/assets/images/projects/attendance_app2.png": "5ad8c1322e87d81ec278c8b5b5bbca72",
"assets/assets/images/projects/car-empire.png": "088e800d24c31c54d35581b03dbe5517",
"assets/assets/images/projects/cooperative.png": "7ed1bc392a044227c9a20ba9e4e6f946",
"assets/assets/images/projects/cylinder.png": "7545bbbc327fab860e391b96b73e9286",
"assets/assets/images/projects/nurseries.png": "cb8c8e52845679b1596cc042af71ed31",
"assets/assets/images/social/github.svg": "c3f1f5f1551becd97ed24b366405512a",
"assets/assets/images/social/gitlab.svg": "61ee419323c35fd391d483889f801cd7",
"assets/assets/images/social/gmail.svg": "e67c6af8237338b75bc64b81a1c7d096",
"assets/assets/images/social/linkedin.svg": "4f2bc978122ea69dc7033f2f60cb0fe5",
"assets/assets/images/social/medium.svg": "8e1f9bb03136e418eec157e1d4a65b0d",
"assets/assets/images/social/telegram.svg": "068d75c4f3f3bb8f5f39ba52e5136fd3",
"assets/assets/images/technology/c_plus.svg": "5be9bde46141498a7cfd4902b92133b1",
"assets/assets/images/technology/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/technology/express.svg": "c6bab64b183f96aa47077fd3db37afd0",
"assets/assets/images/technology/firebase.svg": "1a1dfb3fc45b0ecce09d117139133c02",
"assets/assets/images/technology/flutter-logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/images/technology/github.svg": "ce89173e3842fb91835a9cc8605a5ecc",
"assets/assets/images/technology/java.svg": "bcfad0f2c3e9c170d9e85e09a061d650",
"assets/assets/images/technology/logo-javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/images/technology/nodejs.svg": "9dfa0ae0af580979f374c33ad3c9d88c",
"assets/assets/images/technology/redux.svg": "aa0a337603611296524a666b62a9ff23",
"assets/assets/images/technology/swift.svg": "74ba2b9c367f7d68236f83aada87fb2e",
"assets/assets/images/ui_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/ui_icon.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/svg/mental_health.svg": "e53e080b4e995d86de82987bd359cf42",
"assets/assets/svg/mobile_ux.svg": "501942f7c90060a31e5758c3c0b53e84",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4f2107fdc9d267678bef4a58e6ffb40",
"assets/NOTICES": "2eac8e7eda79c1e89dd77171d28843c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7c6183555860c3b2231ec357fc7ff484",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/55.png": "52f8c50993cd474f247815b5f790413f",
"icons/Icon-192.png": "cd649554337222c1868963cc22a5eb3b",
"icons/Icon-512.png": "62edd58b26e11dc6069d6c36f9f0e98b",
"icons/Icon-maskable-192.png": "130655f1a3ad9d4d5fc4955bfcadd3aa",
"icons/Icon-maskable-512.png": "7c6183555860c3b2231ec357fc7ff484",
"index.html": "85df122c5b9631b469b3670b08e99b5f",
"/": "85df122c5b9631b469b3670b08e99b5f",
"main.dart.js": "bf5871cadd8f0a8ad9fb49c3d21f08c9",
"manifest.json": "4211e6b94cecb34317edf579f1a3d93a",
"version.json": "fffc5e60db8b1223fdc082afe7b217d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
