import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import HeroSection from "./";

describe("HeroSection component", () => {
  test("renders heading and paragraph correctly", () => {
    const { getByText } = render(<HeroSection />);
    const heading = getByText("👋 Hi, I’m Tom");
    const paragraph = getByText(
      "Welcome to my portfolio website! I'm a full stack developer with a passion for creating beautiful and functional websites and applications."
    );

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  test("renders illustration on desktop", () => {
    const { getByAltText } = render(<HeroSection />);
    const illustration = getByAltText("Tom Ilustration");

    expect(illustration).toBeInTheDocument();
    expect(illustration).toHaveAttribute("width", "500");
    expect(illustration).toHaveAttribute("height", "400");
  });
});
