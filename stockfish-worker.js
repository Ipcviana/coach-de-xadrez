// Same-origin worker that loads Stockfish from the CDN.
// This avoids the browser restriction caused by creating a Worker directly
// from a different origin. Module.locateFile tells Emscripten where the WASM lives.
const CDN = "https://cdn.jsdelivr.net/npm/stockfish@19.0.0/src/";
self.Module = {
  locateFile: function(path) {
    return CDN + path;
  }
};
importScripts(CDN + "stockfish-19-lite-single.js");
