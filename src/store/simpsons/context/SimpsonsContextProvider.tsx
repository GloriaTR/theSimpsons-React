import { PropsWithChildren, useMemo, useState } from "react";
import { SimpsonStructure } from "../../../types";
import SimpsonsContext from "./SimpsonsContext";
import simpsonData from "../../../data/data";

const SimpsonsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [simpsons, setSimpsons] = useState<SimpsonStructure[]>([]);

  const loadSimpsons = () => {
    setSimpsons(simpsonData);
  };

  const simpsonsContextValue = useMemo(
    () => ({ loadSimpsons, simpsons }),
    [simpsons],
  );

  return (
    <SimpsonsContext.Provider value={simpsonsContextValue}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContextProvider;
