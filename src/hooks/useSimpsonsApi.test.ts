import { renderHook } from "@testing-library/react";
import {
  simpsonIdMock,
  simpsonMock,
  simpsonsMock,
} from "../mocks/simpsonsMocks";
import useSimpsonsApi from "./useSimpsonsApi";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";

describe("Given a getSimpsons function", () => {
  describe("When is called", () => {
    test("Then it should return a list of The Simpsons characters when resolving successfully", async () => {
      const expectedSimpsonscharacters = {
        simpsons: simpsonsMock,
        totalSimpsons: simpsonsMock.length,
      };

      const {
        result: {
          current: { getSimpsons },
        },
      } = renderHook(() => useSimpsonsApi());

      const simpsonsList = await getSimpsons({ skip: 0, limit: 10 });

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

      const simpsonsList = getSimpsons({ skip: 0, limit: 10 });

      expect(simpsonsList).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a getSimpsonById function", () => {
  describe("When is called with id `${simpsonIdMock}`", () => {
    test("Then it should return the Simpson character 'Marge Simpson' when resolving successfully", async () => {
      const expectedSimpsonscharacter = simpsonMock;

      const {
        result: {
          current: { getSimpsonById },
        },
      } = renderHook(() => useSimpsonsApi());

      const simpsonCharacter = await getSimpsonById(simpsonIdMock);

      expect(simpsonCharacter).toStrictEqual(expectedSimpsonscharacter);
    });

    test("Then it should throw the error 'Couldn't load the Simpson character' when rejecting", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Couldn't load the Simpson character");

      const {
        result: {
          current: { getSimpsonById },
        },
      } = renderHook(() => useSimpsonsApi());

      const simpsonCharacter = getSimpsonById(simpsonIdMock);

      expect(simpsonCharacter).rejects.toThrowError(expectedError);
    });
  });
});
