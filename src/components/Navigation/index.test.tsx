import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Navigation from "./";

describe("Navigation", () => {
  it("renders the THK text", () => {
    render(<Navigation />);
    const thkText = screen.getByText("THK 🚀");
    expect(thkText).toBeInTheDocument();
  });

  // it("renders the Projects link", () => {
  //   render(<Navigation />);
  //   const projectsLink = screen.getByRole("link", { name: "Projects" });
  //   expect(projectsLink).toBeInTheDocument();
  // });

  it("renders the Blog link", () => {
    render(<Navigation />);
    const blogLink = screen.getByRole("link", { name: "Blog" });
    expect(blogLink).toBeInTheDocument();
  });

  // it("renders the Contact link", () => {
  //   render(<Navigation />);
  //   const contactLink = screen.getByRole("link", { name: "Contact" });
  //   expect(contactLink).toBeInTheDocument();
  // });

  it("renders the Twitter icon", () => {
    render(<Navigation />);
    const twitterIcon = screen.getByLabelText("Twitter");
    expect(twitterIcon).toBeInTheDocument();
  });

  it("renders the LinkedIn icon", () => {
    render(<Navigation />);
    const linkedinIcon = screen.getByLabelText("LinkedIn");
    expect(linkedinIcon).toBeInTheDocument();
  });
});
