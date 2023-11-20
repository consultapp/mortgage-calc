import {
  MortgageAnnuitent,
  MortgageDiffer,
  MortgageInit,
} from "../MortgageClass";
import { reducerStates } from "./states";

export function calcReducer(
  mortgage: MortgageAnnuitent | MortgageDiffer,
  { type, payload }: { type: string; payload: MortgageInit }
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
