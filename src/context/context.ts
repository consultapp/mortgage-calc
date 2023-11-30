import React, { createContext } from "react";
import { MortgageAnnuitent, initialCalcState } from "../MortgageClass";

export const CalcContext = createContext<{
  mortgage: MortgageAnnuitent;
  dispatch: React.Dispatch<unknown>;
}>({
  mortgage: new MortgageAnnuitent(initialCalcState),
  dispatch: () => null,
});
