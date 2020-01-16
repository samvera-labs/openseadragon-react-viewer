import React from "react";
import { render } from "@testing-library/react";
import Viewer from "./Viewer";

describe("Viewer", () => {
  it("renders without crashing", () => {
    expect(render(<Viewer />));
  });

  it("renders the Viewer wrapper component", () => {
    const { getByTestId, debug } = render(<Viewer manifest={{ foo: "bar" }} />);

    expect(getByTestId("viewer")).toBeInTheDocument();
  });

  it("renders the tool bar", () => {
    const { getByTestId } = render(<Viewer manifest={{ foo: "bar" }} />);
    expect(getByTestId("toolbar-wrapper")).toBeInTheDocument();
  });

  it("renders content in OpenSeadragon only if the manifest contains canvas image resources", () => {});

  it("renders the correct number of canvas image resources in the viewer", () => {});

  it("displays the fileset select if configured", () => {
    let { getByTestId, debug } = render(<Viewer manifest={{ foo: "bar" }} />);

    expect(getByTestId("select-component-wrapper")).toBeInTheDocument();
  });

  it("displays custom thumbnails if configured", () => {});
});
