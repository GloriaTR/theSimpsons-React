import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { SimpsonStructure, SimpsonsContextStructure } from "../../../types";
import useSimpsonsApi from "../../../hooks/useSimpsonsApi";
import SimpsonsContext from "./SimpsonsContext";

const SimpsonsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [simpsons, setSimpsons] = useState<SimpsonStructure[]>([]);

  const { getSimpsons } = useSimpsonsApi();

  const loadSimpsons = useCallback(async () => {
    const originSimpsons = await getSimpsons();

    setSimpsons([...originSimpsons]);
  }, [getSimpsons]);

  const simpsonsContextValue = useMemo(
    (): SimpsonsContextStructure => ({ loadSimpsons, simpsons }),
    [simpsons, loadSimpsons],
  );

  return (
    <SimpsonsContext.Provider value={simpsonsContextValue}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContextProvider;
