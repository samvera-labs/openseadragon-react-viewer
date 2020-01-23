import { getCanvasImageResources } from "./iiif-parser";
import { mockManifest } from "../services/testing-helpers";

it("returns an empty array if no tilesources are found", () => {
  const response = getCanvasImageResources({ foo: "bar" });
  expect(Array.isArray(response)).toBeTruthy();
  expect(response).toHaveLength(0);
});

it("returns the correct number of tilesources from a valid manifest", () => {
  expect(getCanvasImageResources(mockManifest)).toHaveLength(5);
});

it("returns tilesources each with a valid id and label", () => {
  const tilesources = getCanvasImageResources(mockManifest);
  expect(tilesources[2].hasOwnProperty("id")).toBeTruthy();
  expect(tilesources[2].hasOwnProperty("label")).toBeTruthy();
  expect(tilesources[1].id).toEqual(
    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/0c%2F4c%2F6c%2F92%2F-4%2F5e%2F2-%2F45%2Fce%2F-9%2F49%2F0-%2F81%2F2f%2F46%2Fe8%2F66%2Fc3"
  );
  expect(tilesources[3].label).toEqual("page 2. Harvard plays Indians today");
});
