import { useCallback } from "react";
import axios from "axios";
import { SimpsonApi, SimpsonStructure } from "../types";

const useSimpsonsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getSimpsons = useCallback(async () => {
    try {
      const { data: apiSimpsons } = await axios.get<{ simpsons: SimpsonApi[] }>(
        `${apiUrl}/simpsons`,
      );

      const simpsons = apiSimpsons.simpsons.map<SimpsonStructure>(
        ({ _id, ...simpsons }) => ({
          ...simpsons,
          id: _id,
        }),
      );
      return simpsons;
    } catch {
      throw new Error("Couldn't load Simpsons characters");
    }
  }, [apiUrl]);

  return { getSimpsons };
};

export default useSimpsonsApi;
