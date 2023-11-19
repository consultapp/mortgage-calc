import { MortgageInit } from "../MortgageClass";
import { reducerStates } from "../states";

export const calcReducer = (
  state,
  { type, payload }: { type: string; payload: MortgageInit | null }
) => {
  switch (type) {
    case reducerStates.UPDATE_INIT:
      state.updateInitialData(payload);
      break;

    default:
      break;
  }
};
