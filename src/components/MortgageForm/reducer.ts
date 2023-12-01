import { MortgageInit, MortgageType } from "../../MortgageClass";

export interface IFormAction {
  type: string;
  payload: string;
}

export function reducer(
  state: MortgageInit,
  { type, payload }: IFormAction
): MortgageInit {
  let val = 0;
  switch (type) {
    case "yearRate":
      // eslint-disable-next-line no-case-declarations
      val = parseFloat(payload);
      if (payload === "" || (val >= 0 && val < 100)) {
        return {
          ...state,
          yearRate: payload === "" ? NaN : val,
        };
      }
      break;

    case "period":
      val = Number(payload);
      if (payload === "" || (val >= 0 && val < 100)) {
        return { ...state, period: payload === "" ? NaN : val };
      }
      break;

    case "creditTotal":
      val = Number(payload);
      //   1 000 000 000
      if (payload === "" || (val >= 0 && val <= 1000000000)) {
        return { ...state, creditTotal: payload === "" ? NaN : val };
      }
      break;

    case "startSum":
      val = Number(payload);
      //    1 000 000 000
      if (
        (payload === "" || (val >= 0 && val <= 1000000000)) &&
        val < Number(state.creditTotal) - 99
      ) {
        return { ...state, startSum: payload === "" ? NaN : val };
      }
      break;

    case "type":
      return {
        ...state,
        type: payload === MortgageType.A ? MortgageType.A : MortgageType.D,
      };

    default:
      break;
  }
  return state;
}
