```js static
import Thumbnails from "openseadragon-react-viewer";
```

```jsx
<Thumbnails
  currentFileset={{
    id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/ABC123",
    label: "Front cover",
  }}
  tileSources={[
    {
      id:
        "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/c3%2F31%2Fc4%2F8e%2F-0%2Fdd%2Fa-%2F4e%2F4b%2F-a%2F56%2F6-%2Fb9%2Fa5%2Fe0%2F12%2F9c%2Fe3",
      label: "Front cover",
    },
    {
      id:
        "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/0c%2F4c%2F6c%2F92%2F-4%2F5e%2F2-%2F45%2Fce%2F-9%2F49%2F0-%2F81%2F2f%2F46%2Fe8%2F66%2Fc3",
      label: "Inside front cover",
    },
  ]}
  onThumbClick={() =>
    alert("Thumbnail icon clicked, and OpenSeadragon will load the new image")
  }
  isPreview={true} // Must be false for other than Styleguidist preview
/>
```
