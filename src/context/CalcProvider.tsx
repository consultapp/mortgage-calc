import { Dispatch, ReactNode, useMemo, useReducer } from "react";
import {
  MortgageAnnuitent,
  MortgageClass,
  initialCalcState,
} from "../classes/MortgageClass";
import { CalcContext } from "./context";
import { ICalcAction, calcReducer } from "./reducer";

interface Props {
  children?: ReactNode;
}

export default function CalcProvider({ children }: Props) {
  const [mortgage, dispatch] = useReducer(
    calcReducer,
    new MortgageAnnuitent(initialCalcState)
  );

  const value = useMemo<{
    mortgage: MortgageClass;
    dispatch: Dispatch<ICalcAction>;
  }>(() => ({ mortgage, dispatch }), [mortgage]);

  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
}
