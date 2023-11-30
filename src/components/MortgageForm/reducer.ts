import { MortgageInit } from "../../MortgageClass";

export function reducer(
  state: MortgageInit,
  { type, payload }: { type: string; payload: string }
): MortgageInit {
  let val = 0;
  switch (type) {
    case "yearRate":
      // eslint-disable-next-line no-case-declarations
      val = parseFloat(payload);
      if (payload === "" || (val >= 0 && val < 100)) {
        return {
          ...state,
          yearRate: payload === "" ? payload : val,
        };
      }
      break;

    case "period":
      val = Number(payload);
      if (payload === "" || (val >= 0 && val < 100)) {
        return { ...state, period: payload === "" ? payload : val };
      }
      break;

    case "creditTotal":
      val = Number(payload);
      //   1 000 000 000
      if (payload === "" || (val >= 0 && val <= 1000000000)) {
        return { ...state, creditTotal: payload === "" ? payload : val };
      }
      break;

    case "startSum":
      val = Number(payload);
      //    1 000 000 000
      if (
        (payload === "" || (val >= 0 && val <= 1000000000)) &&
        val < Number(state.creditTotal) - 99
      ) {
        return { ...state, startSum: payload === "" ? payload : val };
      }
      break;

    case "type":
      return { ...state, type: payload === "annuitet" ? "annuitet" : "differ" };

    default:
      break;
  }
  return state;
}
