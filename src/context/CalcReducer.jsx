import { useMemo, useReducer } from "react";
import { MortgageAnnuitent } from "../MortgageClass";
import { CalcContext } from "./context";
import { calcReducer } from "./reducer";

export const initialCalcState = {
  yearRate: 9.6,
  period: 20,
  creditTotal: 2000000,
  startSum: 500000,
};

export default function CalcReducer({ children }) {
  const [mortgage, dispatch] = useReducer(
    calcReducer,
    new MortgageAnnuitent(initialCalcState)
  );

  const value = useMemo(() => ({ mortgage, dispatch }), [mortgage]);

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
}
