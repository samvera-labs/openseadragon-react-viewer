export function parseHash() {
  var params = {};
  var hash = window.location.hash.slice(1);
  if (hash) {
    var parts = hash.split("&");

    parts.forEach(function (part) {
      var subparts = part.split("=");
      var key = subparts[0];
      var value = parseFloat(subparts[1]);

      if (!key || isNaN(value)) {
        console.error("Bad hash param", part);
      } else {
        params[key] = value;
      }
    });
  }
  return params;
}

export function updateUrl({ pan, tileSourceIndex, zoom }) {
  let currentUrlParams = new URLSearchParams(window.location.hash.slice(1));
  if (zoom) {
    currentUrlParams.set("zoom", zoom);
  }
  if (pan) {
    currentUrlParams.set("x", pan.x);
    currentUrlParams.set("y", pan.y);
  }
  if (tileSourceIndex && tileSourceIndex > 0) {
    currentUrlParams.set("fileset", tileSourceIndex);
  }
  const url = window.location.pathname + "#" + currentUrlParams.toString();

  window.history.replaceState({}, "", url);
}
