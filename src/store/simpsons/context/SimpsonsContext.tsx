import { createContext } from "react";
import { SimpsonsContextStructure } from "../../../types";

const SimpsonsContext = createContext<SimpsonsContextStructure>(
  {} as SimpsonsContextStructure,
);

export default SimpsonsContext;
