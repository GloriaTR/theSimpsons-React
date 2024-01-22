import { renderHook } from "@testing-library/react";
import { simpsonsMock } from "../mocks/simpsonsMocks";
import useSimpsonsApi from "./useSimpsonsApi";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";

describe("Given a getSimpsons function", () => {
  describe("When is called", () => {
    test("Then it should return a list of The Simpsons characters when resolving successfully", async () => {
      const expectedSimpsonscharacters = simpsonsMock;

      const {
        result: {
          current: { getSimpsons },
        },
      } = renderHook(() => useSimpsonsApi());

      const simpsonsList = await getSimpsons();

      expect(simpsonsList).toStrictEqual(expectedSimpsonscharacters);
    });

    test("Then it should throw the error 'Couldn't load Simpsons characters' when rejecting", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Couldn't load Simpsons characters");

      const {
        result: {
          current: { getSimpsons },
        },
      } = renderHook(() => useSimpsonsApi());

      const simpsonsList = getSimpsons();

      expect(simpsonsList).rejects.toThrowError(expectedError);
    });
  });
});
