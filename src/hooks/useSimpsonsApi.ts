import { useCallback } from "react";
import axios from "axios";
import { SimpsonApi, SimpsonStructure } from "../types";

const useSimpsonsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  interface Params {
    skip: number;
    limit: number;
  }

  const getSimpsons = useCallback(
    async ({ skip, limit }: Params) => {
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
        return { simpsons, totalSimpsons: apiSimpsons.totalSimpsons };
      } catch {
        throw new Error("Couldn't load Simpsons characters");
      }
    },
    [apiUrl],
  );

  return { getSimpsons };
};

export default useSimpsonsApi;
