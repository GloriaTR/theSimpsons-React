import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should show an image as the title of the page with the alt text 'The Simpsons title'", () => {
      const expectedHeadingAltText = "The Simpsons title";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const headingAltText = screen.getByAltText(expectedHeadingAltText);

      expect(headingAltText).toBeInTheDocument();
    });
  });
});
