import { HttpResponse, http } from "msw";
import {
  simpsonApiMock,
  simpsonIdMock,
  simpsonsApiMock,
} from "./simpsonsMocks";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/simpsons`, () => {
    return HttpResponse.json(simpsonsApiMock);
  }),

  http.get(`${import.meta.env.VITE_API_URL}/simpsons/${simpsonIdMock}`, () => {
    return HttpResponse.json({ simpson: simpsonApiMock });
  }),
];

export const errorHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/simpsons`, () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: "Couldn't load Simpsons characters",
    });
  }),

  http.get(`${import.meta.env.VITE_API_URL}/simpsons/${simpsonIdMock}`, () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: "Couldn't load the Simpson character",
    });
  }),
];
