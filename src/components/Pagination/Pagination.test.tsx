import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import SimpsonsContextProvider from "../../store/simpsons/context/SimpsonsContextProvider";

describe("Given a Pagination component", () => {
  describe("When is rendered", () => {
    test("Then it should show two icons with the alternate texts 'Pagination previous button' and 'Pagination next button'", () => {
      const expectedPreviousButton = "Pagination previous button";
      const expectedNextButton = "Pagination next button";

      const mockFunction = vi.fn();

      render(
        <SimpsonsContextProvider>
          <Pagination
            currentPage={0}
            nextPage={mockFunction}
            previousPage={mockFunction}
          />
          ,
        </SimpsonsContextProvider>,
      );

      const previousButton = screen.getByLabelText(expectedPreviousButton);
      const nextButton = screen.getByLabelText(expectedNextButton);

      expect(previousButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    test("Then it should show two buttons", () => {
      const expectedButtonCount = 2;

      const mockFunction = vi.fn();

      render(
        <SimpsonsContextProvider>
          <Pagination
            currentPage={0}
            nextPage={mockFunction}
            previousPage={mockFunction}
          />
          ,
        </SimpsonsContextProvider>,
      );

      const totalButtons = screen.getAllByRole("button");

      expect(totalButtons.length).toBe(expectedButtonCount);
    });
  });
});
