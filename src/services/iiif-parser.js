/**
 * Extract tile source urls from a IIIF manifest
 * @param {object} manifest
 * @returns {array}
 */
export function getCanvasImageResources(manifest) {
  let tileSources = [];

  if (!manifest.sequences || !manifest.sequences[0].canvases) {
    return tileSources;
  }

  manifest.sequences[0].canvases.forEach(canvas => {
    if (canvas.images.length > 0 && canvas.images[0].resource) {
      tileSources.push({
        id: canvas.images[0].resource.service["@id"],
        label: canvas.label
      });
    }
  });

  return tileSources;
}
