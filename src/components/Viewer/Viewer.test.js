import React from "react";
import { render } from "@testing-library/react";
import Viewer from "./Viewer";
import { ConfigContext } from "../../config-context";
import { mockManifest } from "../../services/testing-helpers";
import OpenSeadragon from "openseadragon";

const defaultProps = {
  showDropdown: true,
  showThumbnails: true,
  showToolbar: true,
};

describe("Viewer", () => {
  function setupTests(configProps = defaultProps) {
    return render(
      <ConfigContext.Provider
        value={{
          ...configProps,
        }}
      >
        <Viewer manifest={mockManifest} />
      </ConfigContext.Provider>
    );
  }

  it("renders without crashing", () => {
    expect(render(<Viewer />));
  });

  it("renders the Viewer wrapper component", () => {
    const { getByTestId, debug } = setupTests();
    expect(getByTestId("viewer")).toBeInTheDocument();
  });

  it("renders the tool bar only if configured", () => {
    const { getByTestId } = setupTests();
    expect(getByTestId("toolbar-wrapper")).toBeInTheDocument();
  });

  it("doesn't render the tool bar if not configured", () => {
    const { queryByTestId } = setupTests({
      ...defaultProps,
      showToolbar: false,
    });
    expect(queryByTestId("toolbar-wrapper")).toBeNull();
  });

  it("renders content in OpenSeadragon only if the manifest contains canvas image resources", () => {});

  it("renders the correct number of canvas image resources in the viewer", () => {});

  it("renders the tile source select if configured", () => {
    let { getByTestId, debug } = setupTests();
    expect(getByTestId("select-component-wrapper")).toBeInTheDocument();
  });

  it("doesn't render the tile source select if configured", () => {
    let { queryByTestId } = setupTests({
      ...defaultProps,
      showDropdown: false,
    });

    expect(queryByTestId("select-component-wrapper")).toBeNull();
  });

  it("renders custom thumbnails if configured", () => {
    let { getByTestId } = setupTests();
    expect(getByTestId("thumbnails-wrapper")).toBeInTheDocument();
  });

  it("doesn't render custom thumbnails if configured", () => {
    let { queryByTestId } = setupTests({
      ...defaultProps,
      showThumbnails: false,
    });
    expect(queryByTestId("thumbnails-wrapper")).toBeNull();
  });
});
