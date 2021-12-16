### Usage

The `OpenSeadragonViewer` package is designed to render an OpenSeadragon viewer React component, which gets its data from a [IIIF manifest](https://iiif.io/api/presentation/3.0/). The manifest JSON file drives the viewer.

Note: The component accepts either a manifest object, or a manifest url in its `props`. If both are supplied, precedence is given to the manifest object.

### Customizing

To customize the CSS styling of the viewer, the following helper CSS target classes are provided. You can inspect the HTML in your browser's Console for more info...

```bash
// Helper CSS classes

osrv-top-row-wrapper
osrv-work-title
osrv-toolbar-wrapper
osrv-tilesource-select-wrapper
osrv-thumbnails-wrapper
```

```js static
import { OpenSeadragonViewer } from "openseadragon-react-viewer";
```

```jsx
/**
 * Test local manifests
 */
import { scrapbook } from "../../manifests/jimmy-johnson-scrapbook";
import { horse } from "../../manifests/horse";

/**
 * Try editing/removing/changing the "manifest" and "manifestUrl" props,
 * test your own "manifestUrl" value and more to see how this will render images
 */
<OpenSeadragonViewer
  manifest={scrapbook}
  manifestUrl="https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json"
  options={{
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    deepLinking: false,
    height: 800,
    containerId: "myContainerId",
  }}
  openSeadragonOptions={{
    gestureSettingsMouse: {
      scrollToZoom: true,
    },
  }}
  toolBarOptions={{
    showZoom: true,
    showFullScreen: true,
    showDownload: true,
    showPreviousNext: true,
  }}
/>;
```
