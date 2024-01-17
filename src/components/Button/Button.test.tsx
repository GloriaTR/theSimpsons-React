import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a function and the user clicks the button", () => {
    test("Then the received function should be called", async () => {
      const mockFunction = vi.fn();

      render(
        <Button className="button-previous" actionOnClick={mockFunction}>
          <img src="" alt="Previous page" width="48" height="48" />
        </Button>,
      );

      const button = screen.getByAltText("Previous page");
      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
