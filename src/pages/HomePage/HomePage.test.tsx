import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";
import SimpsonsContextProvider from "../../store/simpsons/context/SimpsonsContextProvider";

describe("Given a HomePage component", () => {
  describe("When is rendered", () => {
    test("Then it should show the title 'The Simpsons Crew'", () => {
      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const headingText = screen.getByRole("heading", {
        level: 1,
      });

      expect(headingText).toBeInTheDocument();
    });

    test("Then it should show two buttons", () => {
      const expectedButtonCount = 2;

      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <HomePage />,
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const totalButtons = screen.getAllByRole("button");

      expect(totalButtons.length).toBe(expectedButtonCount);
    });
  });

  describe("When the user clicks on the Next button", () => {
    test("Then it should call the function nextPage", async () => {
      const nextButtonAltText = "Pagination next button";

      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <HomePage />,
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const button = screen.getByRole("button", { name: nextButtonAltText });

      await userEvent.click(button);

      waitFor(() => expect(button).toBeDisabled());
    });
  });

  describe("When the user clicks on the Previous button", () => {
    test("Then it should call the function nextPage", async () => {
      const previousButtonAltText = "Pagination previous button";

      render(
        <SimpsonsContextProvider>
          <BrowserRouter>
            <HomePage />,
          </BrowserRouter>
        </SimpsonsContextProvider>,
      );

      const button = screen.getByRole("button", {
        name: previousButtonAltText,
      });

      await userEvent.click(button);

      waitFor(() => expect(button).toBeDisabled());
    });
  });
});
