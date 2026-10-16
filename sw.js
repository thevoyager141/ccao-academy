/* CCAO-F ACADEMY 오프라인 캐시
   한 번 접속하면 사이트 전체를 브라우저에 저장해, 이후 인터넷이 없어도 같은 주소로 열림.
   내용을 갱신해 배포할 때는 tools/version.json 의 cache 숫자를 1 올린 뒤 다시 빌드할 것. */
const CACHE = "ccao-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./content/p0.js",
  "./content/p1.js",
  "./content/p2.js",
  "./content/p3.js",
  "./content/p4.js",
  "./content/p5.js",
  "./content/p6.js",
  "./content/p7.js",
  "./content/p8.js",
  "./content/x1.js",
  "./content/x2.js",
  "./content/x3.js",
  "./content/x4.js",
  "./content/x5.js",
  "./content/x6.js",
  "./content/x7.js",
  "./content/g0.js",
  "./content/g1.js",
  "./content/g2.js",
  "./content/g3.js",
  "./content/g4.js",
  "./content/g5.js",
  "./content/g6.js",
  "./content/g7.js",
  "./content/appendix.js",
  "./content/sprint.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
