import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WorkOpenSeadragonFilesetReactSelect from "./FilesetReactSelect";
import { mockTileSources } from "../services/testing-helpers";

const mockOnFileSetChange = jest.fn();

describe("WorkOpenSeadragonFilesetReactSelect", () => {
  function setUpTest(
    props = {
      currentTileSource: mockTileSources[1],
      onFileSetChange: mockOnFileSetChange,
      tileSources: mockTileSources,
    }
  ) {
    return render(<WorkOpenSeadragonFilesetReactSelect {...props} />);
  }

  it("renders without crashing", () => {
    const { container } = render(<WorkOpenSeadragonFilesetReactSelect />);
    expect(container).toBeTruthy();
  });

  it("renders the react-select element and search box", () => {
    const { getByTestId } = setUpTest();
    const el = getByTestId("react-select-wrapper");

    expect(el).toBeInTheDocument();
  });

  it("renders first item in filter box on initial load", () => {
    const { getByTestId } = setUpTest();
    const el = getByTestId("react-select-wrapper");
    const displayEl = el.querySelector(".react-select__single-value");
    expect(displayEl.innerHTML).toEqual("Fileset 2");
  });

  it("renders the correct information in select options", () => {
    const { getByTestId } = setUpTest();
    const el = getByTestId("react-select-wrapper");
    const inputEl = el.querySelector("input");

    fireEvent.change(inputEl, { target: { value: "3" } });
    expect(el.querySelector(".react-select__option").innerHTML).toEqual(
      "Fileset 3"
    );
  });

  it("calls back a function when select value changes", () => {
    const { getByTestId, getByText } = setUpTest();
    const el = getByTestId("react-select-wrapper");
    const inputEl = el.querySelector("input");

    fireEvent.change(inputEl, { target: { value: "3" } });

    const optionEl = getByText("Fileset 3");
    fireEvent.click(optionEl);
    expect(mockOnFileSetChange).toHaveBeenCalled();
  });
});
