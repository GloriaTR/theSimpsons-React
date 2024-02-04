import { render, screen } from "@testing-library/react";
import SimpsonCard from "./SimpsonCard";
import { simpsonMock } from "../../mocks/simpsonsMocks";
import { BrowserRouter } from "react-router-dom";

describe("Given a SimpsonCard component", () => {
  describe("When is rendered", () => {
    test("The it should show a card with the heading 'Marge Simpson'", () => {
      const expectedHeading = `${simpsonMock.name}`;

      render(
        <BrowserRouter>
          <SimpsonCard simpson={simpsonMock} />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show an image with the alternate text 'Full body of Marge Simpson'", () => {
    const expectedAlternateImageText = "Full body of Marge Simpson";

    render(
      <BrowserRouter>
        <SimpsonCard simpson={simpsonMock} />
      </BrowserRouter>,
    );

    const simpsonImage = screen.getByAltText(expectedAlternateImageText);

    expect(simpsonImage).toBeInTheDocument();
  });
});
