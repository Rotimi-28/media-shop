const APP_PREFIX = "MediaShop";
const VERSION = "versio_01";
const FILE_TO_CACHE = [
    "./index.html",
    "./index.css",
    ".App.js",
    "./images/Immortals.JPG",
    "./Images/InTeWoods.JPG",
    "./Images/Spide-Man.JPG",
    "./Images/HaloTheFlood.JPG",
    "./Images/WickedBeauty.JPG",
    "./Images/UglyLove.JPG",
    "./Images/ItEndWithUs.JPG",
    "./Images/Sekiro_Shadows.JPG",
    "./Images/Fifa.JPG",
    "./Images/Pes.JPG",
    "./Image/Call-Duty.JPG",
    "./Images/Ucharted.JPG"

];

self.addEventListener("fetch", function (e) {
    console.log("fetch request : " + e.request.url);
    e.respondWith(
      caches.match(e.request).then(function (request) {
        if (request) {
          // if cache is available, respond with cache
          console.log("responding with cache : " + e.request.url);
          return request;
        } else {
          // if there are no cache, try fetching request
          console.log("file is not cached, fetching : " + e.request.url);
          return fetch(e.request).catch(function () {
            // Do nothing.
          });
  
          // You can omit if/else for console.log & put one line below like this too.
          // return request || fetch(e.request)
        }
      })
    );
  });
  
  // Cache resources
  self.addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log("installing cache : " + CACHE_NAME);
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  });
  
  // Delete outdated caches
  self.addEventListener("activate", function (e) {
    e.waitUntil(
      caches.keys().then(function (keyList) {
        // `keyList` contains all cache names under your username.github.io
        // filter out ones that has this app prefix to create keeplist
        let cacheKeeplist = keyList.filter(function (key) {
          return key.indexOf(APP_PREFIX);
        });
        // add current cache name to keeplist
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function (key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log("deleting cache : " + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
  });