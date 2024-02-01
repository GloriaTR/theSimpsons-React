import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show the title 'The Simpsons Crew'", () => {
      const expectedHeadingText = "The Simpsons Crew";

      render(<Header />);

      const headingText = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
