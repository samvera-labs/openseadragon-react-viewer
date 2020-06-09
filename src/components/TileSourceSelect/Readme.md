```jsx
<TileSourceSelect
  currentTileSource={{
    id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/ABC123",
    label: "Front cover",
  }}
  onFileSetChange={() =>
    alert("Tile source changed and OpenSeadragon will load the new image")
  }
  tileSources={[
    {
      id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/123ABC",
      label: "Front cover",
    },
    {
      id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/XYZ123",
      label: "Inside front cover",
    },
  ]}
/>
```
