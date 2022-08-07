import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("render a heading", () => {
    render(<Home />);
    const vitrin = screen.getByTestId("vitrin");
    expect(vitrin).toBeInTheDocument();
  });
});
