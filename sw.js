const CACHE = "gymblack-20260927223716", FUENTES = "gymblack-fuentes";
const BASE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "logo-app.png", "sonidos/fin.wav", "sonidos/listo.wav", "sonidos/tick.wav", "sonidos/toque.wav"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FUENTES).map(k => caches.delete(k)))));
  self.clients.claim();
});
// El iPhone pide los audios «por pedazos» (encabezado Range) y exige respuesta parcial (206).
async function conRango(pedido, respuesta){
  const rango = pedido.headers.get("range");
  if (!rango || !respuesta) return respuesta;
  const datos = await respuesta.arrayBuffer(), total = datos.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(rango) || [];
  let ini = m[1] ? parseInt(m[1], 10) : 0, fin = m[2] ? parseInt(m[2], 10) : total - 1;
  if (!m[1] && m[2]) { ini = Math.max(0, total - parseInt(m[2], 10)); fin = total - 1; }
  fin = Math.min(fin, total - 1);
  return new Response(datos.slice(ini, fin + 1), {status:206, statusText:"Partial Content", headers:{
    "Content-Type": respuesta.headers.get("Content-Type") || "audio/wav", "Content-Range": `bytes ${ini}-${fin}/${total}`,
    "Content-Length": String(fin - ini + 1), "Accept-Ranges": "bytes"}});
}
// Primero internet; si tarda más de 3 s o no hay señal, la copia guardada.
async function pagina(pedido){
  const c = await caches.open(CACHE);
  const red = fetch(pedido).then(res => { if (res.ok) c.put("index.html", res.clone()); return res; });
  const guardada = await c.match("index.html");
  if (!guardada) return red;
  const tiempo = new Promise(ok => setTimeout(() => ok(null), 3000));
  try { return (await Promise.race([red, tiempo])) || guardada; } catch { return guardada; }
}
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (/version\.json/.test(url.pathname)) return;
  if (r.mode === "navigate") { e.respondWith(pagina(r)); return; }
  if (url.pathname.includes("/sonidos/")) { e.respondWith(caches.match(r.url).then(hit => hit || fetch(r.url)).then(res => conRango(r, res))); return; }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(FUENTES).then(c => c.match(r).then(hit => hit || fetch(r).then(res => { c.put(r, res.clone()); return res; }))));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r)));
});
