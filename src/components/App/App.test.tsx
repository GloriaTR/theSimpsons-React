import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SimpsonsContextProvider from "../../store/simpsons/context/SimpsonsContextProvider";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should show the title 'The Simpsons Crew'", () => {
      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const headingText = screen.getByRole("heading", {
        level: 1,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
