import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

describe("Nav component", () => {
  // Baseline Test
  it("renders", () => {
    render(<Nav />);
  });

  // Snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  // Arrange
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);

    // Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
    });
  })

afterEach(cleanup);
