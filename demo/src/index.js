import React from "react";
import { render } from "react-dom";
import Root from "../../src";

// Example manifest from Northwestern's Digital Collections
const manifestUrl =
  "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json";

render(
  <Root manifestUrl={manifestUrl} showSelectFilter={false} />,
  document.getElementById("root")
);
