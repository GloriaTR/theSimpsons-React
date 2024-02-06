import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SimpsonsContextProvider from "../../store/simpsons/context/SimpsonsContextProvider";
import { simpsonMock, simpsonsMock } from "../../mocks/simpsonsMocks";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";
import userEvent from "@testing-library/user-event";

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

  describe("When is rendered and the user clicks on the 'Marge Simpson' character", () => {
    test("Then it should navigate to its detail page and show the occupation text 'Ama de casa'", async () => {
      const initialState = {
        simpsons: simpsonsMock,
        loadSimpsons: vi.fn(),
        selectedSimpson: simpsonMock,
        totalSimpsons: simpsonsMock.length,
        loadSelectedSimpson: vi.fn(),
      };

      const expectedSimpsonDescription = simpsonMock.occupation;

      render(
        <SimpsonsContext.Provider value={initialState}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SimpsonsContext.Provider>,
      );

      const link = await screen.findAllByRole("link");

      await userEvent.click(link[0]);

      const simpsonOccupation = await screen.findByText(
        expectedSimpsonDescription,
      );

      expect(simpsonOccupation).toBeInTheDocument();
    });
  });
});
