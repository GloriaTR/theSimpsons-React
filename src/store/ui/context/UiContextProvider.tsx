import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UiContext from "./UiContext";
import { UiContextStructure } from "./types";

const UiContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const UiContextValue = useMemo(
    (): UiContextStructure => ({ isLoading, startLoading, stopLoading }),
    [isLoading, startLoading, stopLoading],
  );

  return (
    <UiContext.Provider value={UiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
