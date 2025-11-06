import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText("hero img");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/media/images/homeHero.png");
  });
});
