import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UiContext from "./UiContext";
import { UiContextStructure } from "./types";

const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const UiContextValue = useMemo(
    (): UiContextStructure => ({ isLoading, startLoading }),
    [isLoading, startLoading],
  );

  return (
    <UiContext.Provider value={UiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
