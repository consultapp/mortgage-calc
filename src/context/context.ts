import React, { createContext } from "react";
import {
  MortgageAnnuitent,
  MortgageClass,
  initialCalcState,
} from "../classes/MortgageClass";
import { ICalcAction } from "./reducer";

export const CalcContext = createContext<{
  mortgage: MortgageClass;
  dispatch: React.Dispatch<ICalcAction>;
}>({
  mortgage: new MortgageAnnuitent(initialCalcState),
  dispatch: () => null,
});
