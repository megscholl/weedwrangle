"use strict";var precacheConfig=[["/index.html","d625fa7b91be3e6d78b2ac9c6906d7b6"],["/static/css/main.e51f3eb9.css","86f7718d9fd799d35573bb1dfb44a697"],["/static/js/main.1c2d1595.js","4fb44af4f7b2a87d2f647cebf720388a"],["/static/media/404.3cdf50bf.gif","3cdf50bf2536bb0a51cb28e1a291e670"],["/static/media/City.25f1d29d.png","25f1d29d6ef74695896015b3b2d4ec46"],["/static/media/Conservancy.0dda7c05.png","0dda7c051214f2710f0091404e5cfd4a"],["/static/media/Fairyland.9f69f323.jpg","9f69f3237780a94e9e93eaf18854160d"],["/static/media/GCA-Logo.3ccd3f4a.png","3ccd3f4a213c9766df42a837fdad69c8"],["/static/media/GlenLeven.0f23c176.jpg","0f23c176b22e18ecadcfd31d254c9770"],["/static/media/Golfclub.b0e0506a.png","b0e0506a46e5a129428a74bbd4259104"],["/static/media/IMG_1028.5cc017cb.JPG","5cc017cbb7671d3f78262fe5f0fda644"],["/static/media/IMG_129.e3d47a37.jpg","e3d47a377c1da785212c54ec8b303fd4"],["/static/media/NE.aa918dbc.png","aa918dbcc0efddca9e94a1ac01c90ae9"],["/static/media/Project_Info.166f29b4.pdf","166f29b4b17f9b9cacfd476882e59845"],["/static/media/alt.b58e4ebb.png","b58e4ebbc060dca30538b39d098783c5"],["/static/media/botanical.53751a3a.jpg","53751a3a0098ebf6ba899e9bb4e8bb9c"],["/static/media/dallas-gc.3ac30374.PNG","3ac30374e6e567320f539e1984daaa2f"],["/static/media/english-ivy.ca44d4c1.jpg","ca44d4c1e5c1891ac4fc9ce17cf45c4c"],["/static/media/ggc.09ee6d42.PNG","09ee6d425a92e8c0ffffae126077f633"],["/static/media/glen5.31c09a82.jpg","31c09a824f29429125d6fcdde249de63"],["/static/media/groundwork.b19afaf0.png","b19afaf0ef4e80051a6dffbe52e6a6a7"],["/static/media/honeysuckle.d20b90bb.jpg","d20b90bbd01b9509faef6a889e4fe983"],["/static/media/houston-parks.67ea1970.jpeg","67ea19706aa7d897231f4ea3599735ad"],["/static/media/laurel.20d4c1e7.jpg","20d4c1e7a83487540025d3fe6bc0994c"],["/static/media/logo.298faae9.png","298faae95014bcee810a3b47c256f9eb"],["/static/media/lula.17a6c721.png","17a6c72111ad87d18b0e45deb1cdd52e"],["/static/media/nola.048c924a.jpg","048c924ad8fa8a390dd07260523656a9"],["/static/media/nps.bbf1398a.png","bbf1398adf87661613206e844c76e851"],["/static/media/owlshill.49abae7a.jpg","49abae7a17e6444032ec1860caecda7f"],["/static/media/parkcleanup.0ea83e24.jpg","0ea83e24bc6ed74faac60d2aef59e251"],["/static/media/purple-loosestrife.2243717d.jpg","2243717d11e73310e81e8cdd68693662"],["/static/media/purple-loosestrife.6fd30e26.jpg","6fd30e265bdf2ce4feb2a308a238e6db"],["/static/media/results.fcd5c3fe.jpg","fcd5c3fe4aa6c908b49fa3e5ff354720"],["/static/media/state-FL.17cfb9a0.jpg","17cfb9a0aa7b226964fa3fc7f97c7efe"],["/static/media/state-LA.a1561249.png","a1561249b5d688a4aeb0effddd86a112"],["/static/media/state-MS.9a8d02b6.svg","9a8d02b670a5afe842ad85ef487ae288"],["/static/media/state-OR.a8eae7c7.png","a8eae7c723b2f4ad20d8c446f7a60624"],["/static/media/tspna.2663b0e4.jpg","2663b0e43883f153617538be826cc8ec"],["/static/media/ww-lm.f064f5cf.jpg","f064f5cfe0e6d8d61219572e6b2252bf"],["/static/media/ww-oakridge.c1796afb.png","c1796afb8a934453589392013adcfd0e"],["/static/media/ww-sewanee.2e907584.jpg","2e907584184f2141082a95e1be499306"],["/static/media/ww-tva.f246f46b.jpg","f246f46beb7901bc783ff473582e9d93"],["/static/media/ww-whitehouse.e5a2aaba.jpg","e5a2aabac739017915567d4a1b2bc6d8"],["/static/media/ww_logo.94aa4746.png","94aa47460577b68ac3ff7463f49b4370"],["/static/media/yellow.32ef2102.jpg","32ef21023f96f57d01a28bd8314cd347"],["/static/media/zoo.ef917f9c.jpeg","ef917f9c7524ca34c01321278f9386ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});