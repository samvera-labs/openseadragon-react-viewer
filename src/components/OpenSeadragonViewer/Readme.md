This is the top-most component to pull directly into your React app.

```js static
import OpenSeadragonViewer from "openseadragon-react-viewer";
```

If you wanted to import individual components like `Thumbnails` or `Toolbar`, to customize, or for use outside this application, you can import those directly as well.

```jsx
// Try switching to your own "manifestUrl" below to watch it update in real time!

<OpenSeadragonViewer
  manifestUrl="https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json"
  options={{
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    supportUrlParams: true,
  }}
/>
```
