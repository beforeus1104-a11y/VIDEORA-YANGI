var C='videora-722';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim();});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).then(function(res){if(res.ok){var cp=res.clone();caches.open(C).then(function(c){c.put(e.request,cp)});}return res;}).catch(function(){return caches.match(e.request);}));});
