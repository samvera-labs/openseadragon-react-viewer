import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Viewer from "./Viewer";
import { ConfigContext } from "../../config-context";
import { mockManifest } from "../../services/testing-helpers";
import OpenSeadragon from "openseadragon";

const defaultProps = {
  showDropdown: true,
  showThumbnails: true,
  showToolbar: true,
  containerId: 'openseadragon1'
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

  it("renders the Toolbar container component", () => {
    const { getByTestId, debug } = setupTests();
    expect(getByTestId("toolbar-container")).toBeInTheDocument();
  });

  it("renders the tool bar only if configured", () => {
    const { getByTestId } = setupTests();
    expect(getByTestId("toolbar-wrapper")).toBeInTheDocument();
  });

  it("has a viewer container with ID matching the configuration", () => {
    let { getByTestId } = setupTests({
      ...defaultProps,
      containerId: "mycontainerid",
    });

    expect(getByTestId('instance-container')).toHaveAttribute('id', 'mycontainerid')
  })

  it("has a viewer container ID of openseadragon1 if not configured", () => {
    const { getByTestId } = setupTests();
    expect(getByTestId('instance-container')).toHaveAttribute('id', 'openseadragon1')
  })

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
