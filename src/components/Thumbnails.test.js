import React from "react";
import { render } from "@testing-library/react";
import WorkOpenSeadragonThumbnails from "./Thumbnails";
import { mockTileSources } from "../services/testing-helpers";

const mockOnThumbClick = jest.fn();

describe("WorkOpenSeadragonThumbnails component", () => {
  function setUp() {
    return render(
      <WorkOpenSeadragonThumbnails
        tileSources={mockTileSources}
        onThumbClick={mockOnThumbClick}
      />
    );
  }

  it("renders without crashing", () => {
    const { container } = render(<WorkOpenSeadragonThumbnails />);
    expect(container).toBeTruthy();
  });

  it("renders thumbnails container", () => {
    const { getByTestId } = setUp();
    expect(
      getByTestId("open-seadragon-thumbnails-container")
    ).toBeInTheDocument();
    expect();
  });

  it("renders the correct number of thumbnails", () => {
    const { queryAllByTestId } = setUp();
    expect(queryAllByTestId("fileset-thumbnail")).toHaveLength(3);
  });
});
