```js static
import { Toolbar } from "openseadragon-react-viewer";
```

```jsx
<Toolbar
  onDownloadFullSize={() => {
    alert(
      "Download fullsize has been clicked, new window will now open with full sized image"
    );
  }}
  onDownloadCropClick={() =>
    alert("Download Crop has been clicked, download window will now open!")
  }
/>
```
