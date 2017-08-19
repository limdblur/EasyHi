/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["0185ee6762a70a347adb.js","5eee67af61d27627bfc01b62585944f6"],["0217ca539706ad856652.js","fca8628ff487bc82a7c415dc58ad6e32"],["039688fdb71565c33756.js","62b3ee1fb2f5c2e10904cbc89016ea8d"],["040314f99fdb51cdecec.js","5785b067dc2dcb37337dbbc76e1b32e7"],["05c2deda7f6ca3548606.js","0e87cce34a7a67e6968ab8ca66ee7cda"],["0b5860e18a54800bb1ac6b09747585c3.jpg","0b5860e18a54800bb1ac6b09747585c3"],["0c04dbf401abfdc74c61.js","6f4af2ddcaef79a5ad8460e5f3c5519e"],["0c090d462b929a255bd8.js","1c8612a08a774fdef11a88eb18dea117"],["12fd98a2db15f611716e.js","e89b1d65c6c604ad5ce9c3085d902ea6"],["14346b166dba921df707b1d1f5195338.jpg","14346b166dba921df707b1d1f5195338"],["14360d1a073a7357778f.js","25c4e55ae11ac41f73601f847b7ea1a1"],["148e7f0c71ff76978d6a.js","e7efda6f40e2bf9258580403d95e4ecb"],["166d7978960dbc4fe6f0.js","1af13e51e31aea41e55f6910bb1c3600"],["175368c216d28ba1abb1.js","2d39c3bacf58170b2fb8715e4ce814f5"],["1915d822183cf8fd43b3.js","cb84eea9d856df2e51e418396f217a95"],["19b00fbe4ed714a6678015f59a435d45.png","19b00fbe4ed714a6678015f59a435d45"],["19e10dfcb38e66e24405.js","ad3ed08088051304cb7d6032e756166d"],["1a742861f4b68fb91428.js","3d92d68a2cb731a556e1c787ed466b6c"],["1a97b0e64c2a44f10f6c4f71f303f8c0.jpg","1a97b0e64c2a44f10f6c4f71f303f8c0"],["1bef38175838023f4d79.js","57caecdbed1dd185791c934bd3fdd2d6"],["203740e748f26a71917681cfc4c37eab.png","203740e748f26a71917681cfc4c37eab"],["2139e9bd2459f988b7e697e8c279dd67.jpg","2139e9bd2459f988b7e697e8c279dd67"],["214f85101134f5a3faff7ff74838f583.jpg","214f85101134f5a3faff7ff74838f583"],["22609f6d177aa894b945.js","fb43327cd9973b340fded05d8ebfc7a0"],["2344dcab521dde7a5b433ddaa310eb89.jpg","2344dcab521dde7a5b433ddaa310eb89"],["2696568da9b355884384.js","e6e3cbdb772ab38431aa8d53176eb917"],["2a2db743b432f8e0a0b13e03c7333a3b.jpg","2a2db743b432f8e0a0b13e03c7333a3b"],["2ba451f121270c19553a.js","92f2172a216eb2f6738e6874d9183549"],["2c1ab165f76e7cd07be0.js","83e902de161153d470cf2e7f00ad0dcb"],["2da7c28bc17d9153b7bb.js","5ec5f50de2e2460668c97304afd11d04"],["2f8109c2a24f1a9a8d1b.js","a7a60fe9290b696d0b3ee1a62af88cf0"],["2feee8d11c6de88932f1bc3d3859d693.png","2feee8d11c6de88932f1bc3d3859d693"],["30dd5088ab6cb1dd5f93.js","8e3e144f821ab71a8275d67ae9fd24ef"],["33d0dc72a1cbba38e17d5aa83319791b.jpg","33d0dc72a1cbba38e17d5aa83319791b"],["35964fcb16e32af115a0.js","f7de971d152b8f8c8c977cfa2886a0c1"],["372c821ae312eeb2a0f4608795d4d860.css","372c821ae312eeb2a0f4608795d4d860"],["37933ccc539b726bf981.js","b7d92cd52bad17d1a0dd5c722b738737"],["39479ddbb92aad8486cabb4eb9169597.jpg","39479ddbb92aad8486cabb4eb9169597"],["3a82c349ff3e8d07c4e5.js","5d23f633b357c09af8280a2cc52916f8"],["3abd35858d2996af6da62d794d558da4.png","3abd35858d2996af6da62d794d558da4"],["3b638b53048e793606ff3d7a685b6128.jpg","3b638b53048e793606ff3d7a685b6128"],["3be8d2e30af194d124d8.js","a30bdb6c19660c432f9eee47a9248b5b"],["41ec75dbfa70f824a343814a9f1d3901.css","41ec75dbfa70f824a343814a9f1d3901"],["423ef76a9da4a0525ffad4bb15f7922b.woff","423ef76a9da4a0525ffad4bb15f7922b"],["448c34a56d699c29117adc64c43affeb.woff2","448c34a56d699c29117adc64c43affeb"],["49db35a667b29fd311b7.js","e57ac8a5d3f4fc25115787b7cb794fee"],["4a88b17e7159f427188cb32c69d6ac85.jpg","4a88b17e7159f427188cb32c69d6ac85"],["4b6e3cb70a25ef18bbf518d73c096c8c.jpg","4b6e3cb70a25ef18bbf518d73c096c8c"],["4b7f433c764c07ab1955.js","2970ff189918287b08bb511474fb7e66"],["4fa5c57c8234de726fda.js","787e7952edd23faaa43c8dc76d2bdc1d"],["5305f6c22d4abbe686eb.js","af1a5e5fc183c57484bbc46de77becd0"],["54c331a01287971afa287d4daeacee96.jpg","54c331a01287971afa287d4daeacee96"],["573d65f419ec4edfc67a.js","7ef55656dd8d4519e522c0861421a98e"],["577e77ab407625cc9f30a06941c9fe09.png","577e77ab407625cc9f30a06941c9fe09"],["57e2260f71d48ea0074d.js","eb8d3a92447b0b4ea9ebf5eb510bd275"],["580fcdc2a77f94a5e56a.js","dc81e1d4476cfbf3b7ee7004ff88e4db"],["5a126d92565ec1788687.js","e2ac39a56c1bdaca571b613db3327028"],["5a41997f9f7fb21cbdf0280453780b3a.jpg","5a41997f9f7fb21cbdf0280453780b3a"],["5e4719268d251372b2d94826b3005f77.jpg","5e4719268d251372b2d94826b3005f77"],["5fcd3f828007d6bc3665.js","1775ce1a623a061f756f07f6f4cc8041"],["63aa36c9fbb2c855e0d2.js","0ac9a001b658ae68fd91e4cf67179e60"],["63aaa97587315ee28dac.js","f6e1dbd390bba463c32585b84408d810"],["664e53fbae8f6f070ecb24687cb17b2b.png","664e53fbae8f6f070ecb24687cb17b2b"],["68b96ffa40d53b6b7831.js","74611c2cc87f96a3cb3ed541e173de14"],["6903dae02ce2d951f93f.js","23cbb16433b0c69b2558f87be43ef02d"],["70806fdd0c508bd1c9e70b6c9d644e90.ttf","70806fdd0c508bd1c9e70b6c9d644e90"],["7425af1240dc68c7732a.js","9daf45e7064cac6f84060554787b8785"],["77db353723193147a0ee4dd6bd4d12b3.jpg","77db353723193147a0ee4dd6bd4d12b3"],["7980836334b8ed4af7e3205a58b9170f.jpg","7980836334b8ed4af7e3205a58b9170f"],["7a69440c2b12ed52d388.js","44a4fe03f24174ea76672519b1602c1b"],["7b5ebb5815ddbb77004a.js","7895a7bfd7603626e47f474797da276d"],["7b8cca8ba4ae891ea440.js","9226765d50d2d74cf27c8e37ee72e03c"],["802e416b64f73ee7eca55e625abbf83f.jpg","802e416b64f73ee7eca55e625abbf83f"],["81de7cd3b9db2cb38aa8.js","54c8e20c05ca0405efb6207d7c967eeb"],["89889688147bd7575d6327160d64e760.svg","89889688147bd7575d6327160d64e760"],["8b29323f74df758c6544193ba1d42396.jpg","8b29323f74df758c6544193ba1d42396"],["8fe40f99fd449bcb9796c336406f9964.png","8fe40f99fd449bcb9796c336406f9964"],["92f6abb112be774ac7f1.js","7423eb8d5acd8ba8bdabc2bc5131dbea"],["946118eec9a849ef5e6b.js","31c31626033b5e7a8c4e5985bcaaa2e1"],["9b527915732bcabc20427e66f09ad20e.png","9b527915732bcabc20427e66f09ad20e"],["9b9e9b1c40145ecaee47c60705ad3e3c.eot","9b9e9b1c40145ecaee47c60705ad3e3c"],["9c40c3964552e14cb39351b62577f3a8.jpg","9c40c3964552e14cb39351b62577f3a8"],["9d18d49b9f0df6b5996fd952680fdaef.jpg","9d18d49b9f0df6b5996fd952680fdaef"],["9e3ac9b84871ed61a55c816d5a27688c.svg","9e3ac9b84871ed61a55c816d5a27688c"],["CNAME","58e622340325843359475fb423e22b4c"],["a00a22b32dfd36398880b0ef9fa5deb8.jpg","a00a22b32dfd36398880b0ef9fa5deb8"],["a1d18d828a690c1cc6df.js","e62bf896bdf89676985efcee0bf6a543"],["a3a344e56c36b083d1da.js","d5cceda4372318a1179fe031572e294d"],["a76d501eedf5b5a09033.js","82386c0455a44b139a1de56be72d36fb"],["a8b8ec43bf3e69e04ece.js","3d17fc772c1e66b90574b8f809d31224"],["a91e70a5df012841185a.js","dc3a6862eec21722efda339962f08a21"],["a9cc86190a02cc840d30e3b0303d081e.png","a9cc86190a02cc840d30e3b0303d081e"],["af0ed1cee3c7b9218075.js","d5f4c71f7aff83b324b8d56e348d54ac"],["b0bc1068cfabdc4713f7a26278dcfb5e.jpg","b0bc1068cfabdc4713f7a26278dcfb5e"],["b1f60a1fecf587072b69.js","c13458d56074bd13242958d4b432c0f0"],["b2523b8f4bc31a1728b6.js","fc25705d97becfabd62605068a3a34ce"],["b3705cda66f0630bc5d8.js","05d543cb87f181e054a46b77b75f2561"],["b60c2612592f53680713.js","b0bb540afd9b3c8e8b781ba177f71091"],["b77ea0497047e1c16719.js","fea0be1726dc84effe1b7da26701a54b"],["ba0a19c5725f1bb57b5c55f413391d20.png","ba0a19c5725f1bb57b5c55f413391d20"],["be2bf6db2f98de6dfa63.js","269c0c509989ad7f853310952b84521b"],["c031cc967b9b421d7ff6.js","f0a0d1c3c7d88ceaeb5e41f1be18f873"],["c2e1da50dce6d35f06eb4ebcf81fba7f.png","c2e1da50dce6d35f06eb4ebcf81fba7f"],["c7a0213919448e55cdef.js","42521d12cf396ef86d0124071d56b05e"],["c7f54cd9c59b022b8746.js","98fac63f815cf49c5c160b72466cb624"],["cf3747f52d20bf6dcffe.js","61e964b97e75cd93955442f5e9c2721e"],["d2d48a7e1d1131e3546f.js","1b68b2bf56a0145b33e37d1a3982d0f7"],["d96e2c44d58e8a97df834c39ade88936.jpg","d96e2c44d58e8a97df834c39ade88936"],["dbfd23d5444c3d525bf64b96324126bd.jpg","dbfd23d5444c3d525bf64b96324126bd"],["deb8cdcc0a73deb677069db3987299ab.jpg","deb8cdcc0a73deb677069db3987299ab"],["dfea8d54f94eebce2d4bb05c58c0e53b.jpg","dfea8d54f94eebce2d4bb05c58c0e53b"],["e18bbf611f2a2e43afc071aa2f4e1512.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["e24d601e2981229b7bd1.js","07c85f33251e4f918b913e4b0cb753e1"],["e2ed4c9fcc9a921f137f.js","e9f9218da2e3cf20560f36fbcc342fd2"],["e6ae66c9712fa451aa50.js","6d2c16f03fe0c1ce98ae61b04b2d38f5"],["e9c4dce8f4ca23552f64.js","e1583e7bf3c14fe9f49144fd4fd7b59f"],["eaaba64680ea3d5be868.js","be4abb19197ff3dacbd484cd40fdaa2e"],["eaf471585cf86838c9de.js","cfce45ed5030d2295e9a15e87ccd9429"],["edcf0d708fe6a9a008a8.js","b0d66b2d9760f91b1155ed02f93e46f7"],["f00d2144a7f778ef647c.js","13b156ff5ddc58855f0ace3b023c1fee"],["f4769f9bdb7466be65088239c12046d1.eot","f4769f9bdb7466be65088239c12046d1"],["f589b2c81ec1ebe227fc.js","2ac8c4926f6862fd3d00b4d2b195e7ae"],["f59955ca1ef832d9e203.js","ce57905e481a255de02d5cd7140ebc63"],["fa2772327f55d8198301fdb8bcfc8158.woff","fa2772327f55d8198301fdb8bcfc8158"],["favicon.ico","247d66e4e5457cd042283cd6e94284bf"],["fe13e89edf62edeb1f82.js","c5e72e241f4be5ad1e90bd84dcb148fc"],["fecf78377e2980cc9d7a85c423f79ab2.jpg","fecf78377e2980cc9d7a85c423f79ab2"],["fedbcc7d7b16a61cb18325d22b1d3fb4.jpg","fedbcc7d7b16a61cb18325d22b1d3fb4"],["ff812b940a32d25832c4.js","085fe7e76c7f1becb4e571b8e233a57d"],["ffbadb3d59cf211d80e3.js","2e148b522eb970bab4944f3b80459773"]];
var cacheName = 'sw-precache-v3-yoga-vision-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







