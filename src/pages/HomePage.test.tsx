import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import SimpsonsContextProvider from "../store/simpsons/context/SimpsonsContextProvider";

describe("Given a HomePage component", () => {
  describe("When is rendered", () => {
    test("Then it should show an image as the title of the page with the alt text 'The Simpsons title'", () => {
      const expectedHeadingAltText = "The Simpsons title";

      render(
        <SimpsonsContextProvider>
          <HomePage />
        </SimpsonsContextProvider>,
      );

      const headingAltText = screen.getByAltText(expectedHeadingAltText);

      expect(headingAltText).toBeInTheDocument();
    });
  });
});
