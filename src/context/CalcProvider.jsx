import { useMemo, useReducer } from "react";
import { MortgageAnnuitent, initialCalcState } from "../MortgageClass";
import { CalcContext } from "./context";
import { calcReducer } from "./reducer";

export default function CalcProvider({ children }) {
  const [mortgage, dispatch] = useReducer(
    calcReducer,
    new MortgageAnnuitent(initialCalcState)
  );

  const value = useMemo(() => ({ mortgage, dispatch }), [mortgage]);

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
}
