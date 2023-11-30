import {
  MortgageAnnuitent,
  MortgageDiffer,
  MortgageInit,
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
      return payload.type === "annuitet"
        ? new MortgageAnnuitent(payload)
        : new MortgageDiffer(payload);

    default:
      return mortgage;
  }
}
