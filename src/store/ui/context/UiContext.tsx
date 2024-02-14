import { createContext } from "react";
import { UiContextStructure } from "./types";

const UiContext = createContext<UiContextStructure>({} as UiContextStructure);

UiContext.displayName = "UI Context";

export default UiContext;
