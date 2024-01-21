import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SimpsonsContextProvider from "../../store/simpsons/context/SimpsonsContextProvider";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should show an image as the title of the page with the alt text 'The Simpsons title'", () => {
      const expectedHeadingAltText = "The Simpsons title";

      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const headingAltText = screen.getByAltText(expectedHeadingAltText);

      expect(headingAltText).toBeInTheDocument();
    });
  });
});
