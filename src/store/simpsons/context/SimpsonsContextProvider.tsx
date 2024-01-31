import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { SimpsonStructure, SimpsonsContextStructure } from "../../../types";
import useSimpsonsApi from "../../../hooks/useSimpsonsApi";
import SimpsonsContext from "./SimpsonsContext";

const SimpsonsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [simpsons, setSimpsons] = useState<SimpsonStructure[]>([]);
  const [totalSimpsons, setTotalSimpsons] = useState<number>(0);

  const { getSimpsons } = useSimpsonsApi();

  const loadSimpsons = useCallback(
    async ({ skip, limit }: { skip: number; limit: number }): Promise<void> => {
      const { simpsons, totalSimpsons } = await getSimpsons({ skip, limit });

      setSimpsons([...simpsons]);
      setTotalSimpsons(totalSimpsons);
    },
    [getSimpsons],
  );

  const simpsonsContextValue = useMemo(
    (): SimpsonsContextStructure => ({
      loadSimpsons,
      simpsons,
      totalSimpsons,
    }),
    [simpsons, loadSimpsons, totalSimpsons],
  );

  return (
    <SimpsonsContext.Provider value={simpsonsContextValue}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContextProvider;
