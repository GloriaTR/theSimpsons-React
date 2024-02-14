import { PropsWithChildren, useMemo } from "react";
import { UiContextStructure } from "./types";
import UiContext from "./UiContext";

const UiContextProvider = ({ children }: PropsWithChildren) => {
  const UiContextValue = useMemo((): UiContextStructure => ({}), []);

  return (
    <UiContext.Provider value={UiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
