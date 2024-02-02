import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { SimpsonStructure, SimpsonsContextStructure } from "../../../types";
import useSimpsonsApi from "../../../hooks/useSimpsonsApi";
import SimpsonsContext from "./SimpsonsContext";

const SimpsonsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [simpsons, setSimpsons] = useState<SimpsonStructure[]>([]);
  const [totalSimpsons, setTotalSimpsons] = useState<number>(0);
  const [selectedSimpson, setSelectedSimpson] = useState<SimpsonStructure>(
    {} as SimpsonStructure,
  );

  const { getSimpsons, getSimpsonById } = useSimpsonsApi();

  const loadSimpsons = useCallback(
    async ({ skip, limit }: { skip: number; limit: number }): Promise<void> => {
      const { simpsons, totalSimpsons } = await getSimpsons({ skip, limit });

      setSimpsons([...simpsons]);
      setTotalSimpsons(totalSimpsons);
    },
    [getSimpsons],
  );

  const loadSelectedSimpson = useCallback(
    async (id: string): Promise<void> => {
      const { simpson } = await getSimpsonById(id);
      setSelectedSimpson(simpson);
    },
    [getSimpsonById],
  );

  const simpsonsContextValue = useMemo(
    (): SimpsonsContextStructure => ({
      loadSimpsons,
      simpsons,
      totalSimpsons,
      selectedSimpson,
      loadSelectedSimpson,
    }),
    [
      simpsons,
      loadSimpsons,
      totalSimpsons,
      selectedSimpson,
      loadSelectedSimpson,
    ],
  );

  return (
    <SimpsonsContext.Provider value={simpsonsContextValue}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContextProvider;
