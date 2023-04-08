import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Service from "./Service";

describe("Service", () => {
  const service = {
    title: "Test Title",
    description: "Test Description",
    icon: "/test.png",
    altText: "Test Alt Text",
  };

  it("renders the service title", () => {
    const { getByText } = render(<Service service={service} />);
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the service description", () => {
    const { getByText } = render(<Service service={service} />);
    expect(getByText("Test Description")).toBeInTheDocument();
  });

  it("renders the service icon with the correct alt text", () => {
    const { getByAltText } = render(<Service service={service} />);
    expect(getByAltText("Test Alt Text")).toBeInTheDocument();
  });
});
