import {
  FormControl,
  Box,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ChangeEvent, useContext, useEffect, useReducer } from "react";
import { CalcContext } from "../../context/context";
import { reducerStates } from "../../context/states";
import { MortgageInit, initialCalcState } from "../../MortgageClass";
import { LangContext } from "../../lang/LanguageProvider";
import getPhrase from "../../lang/lang";

function reducer(
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
      if (payload === "" || (val >= 0 && val < 100000000)) {
        return { ...state, creditTotal: payload === "" ? payload : val };
      }
      break;
    case "startSum":
      val = Number(payload);
      if (
        (payload === "" || (val >= 0 && val < 100000000)) &&
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

export default function MortgageForm() {
  const { dispatch } = useContext(CalcContext);
  const l = useContext(LangContext);
  const [state, dispatchState] = useReducer(reducer, initialCalcState);

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    dispatchState({ type: target.id, payload: target.value });
  };

  const handleChange = (event: SelectChangeEvent) => {
    const target = event.target as HTMLInputElement;
    dispatchState({ type: target.id, payload: target.value });
  };

  useEffect(() => {
    dispatch({
      type: reducerStates.UPDATE_INIT,
      payload: state,
    });
  }, [state, dispatch]);

  const sx = { m: 2, ml: 0 };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <FormControl sx={sx}>
        <Select
          onChange={handleChange}
          defaultValue={"annuitet"}
          id="type"
          disabled
          sx={{ fontSize: "20px" }}
        >
          <MenuItem value="annuitet">{getPhrase(l, "annuity")}</MenuItem>
          <MenuItem value="differ">{getPhrase(l, "differ")}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel htmlFor="creditTotal">
          {getPhrase(l, "totalPrice")}
        </InputLabel>
        <OutlinedInput
          sx={{ fontSize: "20px" }}
          type="number"
          id="creditTotal"
          startAdornment={
            <InputAdornment position="start">
              {getPhrase(l, "currency")}
            </InputAdornment>
          }
          label={getPhrase(l, "totalPrice")}
          value={state.creditTotal ?? ""}
          onChange={onChangeHandle}
        />
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel htmlFor="startSum">{getPhrase(l, "startSum")}</InputLabel>
        <OutlinedInput
          sx={{ fontSize: "20px" }}
          type="number"
          id="startSum"
          startAdornment={
            <InputAdornment position="start">
              {getPhrase(l, "currency")}
            </InputAdornment>
          }
          label={getPhrase(l, "startSum")}
          value={state.startSum ?? ""}
          onChange={onChangeHandle}
        />
      </FormControl>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={sx}>
          <InputLabel htmlFor="period">{getPhrase(l, "years")}</InputLabel>
          <OutlinedInput
            sx={{ fontSize: "20px" }}
            type="number"
            id="period"
            label={getPhrase(l, "years")}
            value={state.period ?? ""}
            onChange={onChangeHandle}
          />
        </FormControl>
        <FormControl sx={sx}>
          <InputLabel htmlFor="yearRate">{getPhrase(l, "percent")}</InputLabel>
          <OutlinedInput
            sx={{ fontSize: "20px" }}
            type="number"
            id="yearRate"
            label={getPhrase(l, "percent")}
            value={state.yearRate ?? ""}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            onChange={onChangeHandle}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
