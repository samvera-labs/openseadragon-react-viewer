import React from "react";
import { render } from "@testing-library/react";
import Thumbnails from "./Thumbnails";
import { mockTileSources } from "../../services/testing-helpers";

const mockOnThumbClick = jest.fn();

describe("Thumbnails component", () => {
  function setUp() {
    return render(
      <Thumbnails
        tileSources={mockTileSources}
        onThumbClick={mockOnThumbClick}
      />
    );
  }

  it("renders without crashing", () => {
    const { container } = render(<Thumbnails />);
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
    expect(queryAllByTestId("tile-source-thumbnail")).toHaveLength(3);
  });
});
