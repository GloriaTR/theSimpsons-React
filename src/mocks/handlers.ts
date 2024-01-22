import { HttpResponse, http } from "msw";
import { simpsonsApiMock } from "./simpsonsMocks";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/simpsons`, () => {
    return HttpResponse.json(simpsonsApiMock);
  }),
];

export const errorHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/simpsons`, () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: "Couldn't load Simpsons characters",
    });
  }),
];
