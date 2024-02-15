import { useCallback, useContext } from "react";
import axios from "axios";
import { SimpsonApi, SimpsonStructure } from "../types";
import UiContext from "../store/ui/context/UiContext";

const useSimpsonsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { startLoading, stopLoading } = useContext(UiContext);

  interface Params {
    skip: number;
    limit: number;
  }

  const getSimpsons = useCallback(
    async ({ skip, limit }: Params) => {
      startLoading();

      try {
        const { data: apiSimpsons } = await axios.get<{
          simpsons: SimpsonApi[];
          totalSimpsons: number;
        }>(`${apiUrl}/simpsons/?limit=${limit}&skip=${skip}`);

        const simpsons = apiSimpsons.simpsons.map<SimpsonStructure>(
          ({ _id, ...simpsons }) => ({
            ...simpsons,
            id: _id,
          }),
        );

        stopLoading();

        return { simpsons, totalSimpsons: apiSimpsons.totalSimpsons };
      } catch {
        stopLoading();
        throw new Error("Couldn't load Simpsons characters");
      }
    },
    [apiUrl, startLoading, stopLoading],
  );

  const getSimpsonById = useCallback(
    async (id: string) => {
      startLoading();

      try {
        const { data: apiSimpson } = await axios.get<{ simpson: SimpsonApi }>(
          `${apiUrl}/simpsons/${id}`,
        );

        const { _id, ...simpsonWithoutId } = apiSimpson.simpson;
        const simpson: SimpsonStructure = {
          ...simpsonWithoutId,
          id: _id,
        };

        stopLoading();

        return simpson;
      } catch {
        stopLoading();
        throw new Error("Couldn't load the Simpson character");
      }
    },
    [apiUrl, startLoading, stopLoading],
  );

  return { getSimpsons, getSimpsonById };
};

export default useSimpsonsApi;
