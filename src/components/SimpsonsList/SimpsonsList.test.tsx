import { render, screen } from "@testing-library/react";
import SimpsonsList from "./SimpsonsList";
import { simpsonsMock } from "../../mocks/simpsonsMocks";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";

describe("Given a SimpsonList component", () => {
  describe("When is rendered with the list of simpsons characters 'Marge Simpson' and 'Herb Powell'", () => {
    test("The it should show 'Marge Simpson' and 'Herb Powell' headings", () => {
      const initialState = {
        simpsons: simpsonsMock,
        loadSimpsons: vi.fn(),
      };

      render(
        <SimpsonsContext.Provider value={initialState}>
          <SimpsonsList />
        </SimpsonsContext.Provider>,
      );

      simpsonsMock.forEach(({ name }) => {
        const simpsonName = `${name}`;
        const heading = screen.getByRole("heading", { name: simpsonName });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
