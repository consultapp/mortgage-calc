import { ReactNode, useMemo, useReducer } from "react";
import { MortgageAnnuitent, initialCalcState } from "../MortgageClass";
import { CalcContext } from "./context";
import { calcReducer } from "./reducer";

interface Props {
  children?: ReactNode;
}

export default function CalcProvider({ children }: Props) {
  const [mortgage, dispatch] = useReducer(
    calcReducer,
    new MortgageAnnuitent(initialCalcState)
  );

  const value = useMemo(() => ({ mortgage, dispatch }), [mortgage]);

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
}
