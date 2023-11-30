import React, { createContext } from "react";
import { MortgageAnnuitent, initialCalcState } from "../MortgageClass";
import { ICalcAction } from "./reducer";

export const CalcContext = createContext<{
  mortgage: MortgageAnnuitent;
  dispatch: React.Dispatch<ICalcAction>;
}>({
  mortgage: new MortgageAnnuitent(initialCalcState),
  dispatch: () => null,
});
