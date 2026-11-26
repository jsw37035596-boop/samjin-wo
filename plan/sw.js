/* 냉동·수출 생산계획 앱 껍데기: 껍데기 파일만 보관 (자료는 늘 웹앱에서) */
var C='fx-shell-1';
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','manifest.webmanifest','icon-192.webp']);}));});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
  e.respondWith(fetch(e.request).then(function(r){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k);});return r;}).catch(function(){return caches.match(e.request);}));
});
