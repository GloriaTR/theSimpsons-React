import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import { simpsonMock, simpsonsMock } from "../../mocks/simpsonsMocks";
import SimpsonsContext from "../../store/simpsons/context/SimpsonsContext";

describe("Given a DetailPage page", () => {
  const initialState = {
    simpsons: simpsonsMock,
    loadSimpsons: vi.fn(),
    selectedSimpson: simpsonMock,
    totalSimpsons: simpsonsMock.length,
    loadSelectedSimpson: vi.fn(),
  };

  const pathSelectedSimpson = `/${simpsonMock.id}`;

  describe("When is rendered", () => {
    test("Then it should show 'Marge Simpson' inside a heading", async () => {
      const expectedHeading = simpsonsMock[0].name;

      render(
        <SimpsonsContext.Provider value={initialState}>
          <MemoryRouter initialEntries={[pathSelectedSimpson]}>
            <Routes>
              <Route path={"/:id"} element={<DetailPage />}></Route>
            </Routes>
          </MemoryRouter>
        </SimpsonsContext.Provider>,
      );

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show the alternative text 'Close-up of Marge Simpson'", async () => {
    const expectedAlternativeImageText = "Close-up of Marge Simpson";

    render(
      <SimpsonsContext.Provider value={initialState}>
        <MemoryRouter initialEntries={[pathSelectedSimpson]}>
          <Routes>
            <Route path={"/:id"} element={<DetailPage />}></Route>
          </Routes>
        </MemoryRouter>
      </SimpsonsContext.Provider>,
    );

    const image = await screen.findByAltText(expectedAlternativeImageText);

    expect(image).toBeInTheDocument();
  });

  test("Then it should show the fields 'Description:', 'Gender:', 'Occupation:' and 'Status:'", async () => {
    const expectedDescriptionText = "Description:";
    const expectedGenderText = "Gender:";
    const expectedOccupationText = "Occupation:";
    const expectedStatusText = "Status:";

    render(
      <SimpsonsContext.Provider value={initialState}>
        <MemoryRouter initialEntries={[pathSelectedSimpson]}>
          <Routes>
            <Route path={"/:id"} element={<DetailPage />}></Route>
          </Routes>
        </MemoryRouter>
      </SimpsonsContext.Provider>,
    );

    const description = await screen.findByText(expectedDescriptionText);
    const gender = await screen.findByText(expectedGenderText);
    const occupation = await screen.findByText(expectedOccupationText);
    const status = await screen.findByText(expectedStatusText);

    expect(description).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(occupation).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});
