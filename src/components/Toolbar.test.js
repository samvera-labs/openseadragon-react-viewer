import React from "react";
import WorkOpenSeadragonToolbar from "./Toolbar";
import { render, fireEvent } from "@testing-library/react";

const mockOnDownloadCropClick = jest.fn();
const mockOnDownloadFullSizeClick = jest.fn();

describe("WorkOpenSeadragonToolbar component", () => {
  function setUpTest(
    props = {
      isMobile: false,
      onDownloadCropClick: mockOnDownloadCropClick,
      onDownloadFullSize: mockOnDownloadFullSizeClick
    }
  ) {
    return render(<WorkOpenSeadragonToolbar {...props} />);
  }

  it("renders without crashing", () => {
    const { container } = setUpTest();
    expect(container).toBeTruthy();
  });

  it("renders all toolbar controls", () => {
    const { getByTestId, queryByTestId } = setUpTest();
    expect(getByTestId("zoom-in")).toBeInTheDocument();
    expect(getByTestId("zoom-out")).toBeInTheDocument();
    expect(getByTestId("full-page")).toBeInTheDocument();
    expect(queryByTestId("download")).toBeInTheDocument();
    expect(getByTestId("previous")).toBeInTheDocument();
    expect(getByTestId("next")).toBeInTheDocument();
  });

  it("Does not render a download link on mobile", () => {
    const { queryByTestId } = setUpTest({
      isMobile: true
    });
    expect(queryByTestId("full-size-download")).not.toBeInTheDocument();
  });

  it("Opens and closes download options when download link icon is clicked", () => {
    const { getByTestId, queryByTestId } = setUpTest();
    const download = getByTestId("download");

    fireEvent.click(download);

    const crop = queryByTestId("download-crop");
    const full = queryByTestId("download-full");

    expect(crop).toBeInTheDocument();
    expect(full).toBeInTheDocument();

    fireEvent.click(download);
    expect(crop).not.toBeInTheDocument();
    expect(full).not.toBeInTheDocument();
  });

  it("Hits the right callback functions when clicking on download cropped size, and download full size options", () => {
    const { queryByTestId, debug } = setUpTest();
    const download = queryByTestId("download");

    // Opens download options
    fireEvent.click(download);
    expect(queryByTestId("download-crop")).toBeInTheDocument();
    expect(queryByTestId("download-full")).toBeInTheDocument();

    // Click on a menu option (which closes the sub-menus)
    fireEvent.click(queryByTestId("download-crop"));
    expect(mockOnDownloadCropClick).toHaveBeenCalled();
    expect(queryByTestId("download-crop")).not.toBeInTheDocument();
    expect(queryByTestId("download-full")).not.toBeInTheDocument();

    // Open download options again
    fireEvent.click(download);
    expect(queryByTestId("download-full")).toBeInTheDocument();
    fireEvent.click(queryByTestId("download-full"));
    expect(mockOnDownloadFullSizeClick).toHaveBeenCalled();
  });
});
