import { createContext } from "react";
import { MortgageAnnuitent } from "../MortgageClass";

export const CalcContext = createContext({
  mortgage: MortgageAnnuitent,
  dispatch: () => {},
});
