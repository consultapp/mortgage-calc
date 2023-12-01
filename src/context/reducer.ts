import {
  MortgageAnnuitent,
  MortgageDiffer,
  MortgageInit,
  MortgageType,
} from "../MortgageClass";
import { reducerStates } from "./states";

export interface ICalcAction {
  type: string;
  payload: MortgageInit;
}

export function calcReducer(
  mortgage: MortgageAnnuitent | MortgageDiffer,
  { type, payload }: ICalcAction
) {
  switch (type) {
    case reducerStates.UPDATE_INIT:
      return payload.type === MortgageType.A
        ? new MortgageAnnuitent(payload)
        : new MortgageDiffer(payload);

    default:
      return mortgage;
  }
}
