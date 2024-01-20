import { PropsWithChildren, useMemo, useState } from "react";
import { SimpsonStructure, SimpsonsContextStructure } from "../../../types";
import SimpsonsContext from "./SimpsonsContext";

const SimpsonsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [simpsons] = useState<SimpsonStructure[]>([]);

  const SimpsonsContextValue = useMemo(
    (): SimpsonsContextStructure => ({ simpsons }),
    [simpsons],
  );

  return (
    <SimpsonsContext.Provider value={SimpsonsContextValue}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContextProvider;
