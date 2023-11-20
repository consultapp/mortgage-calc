import {
  FormControl,
  Box,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { CalcContext } from "../../context/context";
import { reducerStates } from "../../context/states";
import { initialCalcState } from "../../MortgageClass";
import { LangContext } from "../../lang/LanguageProvider";
import getPhrase from "../../lang/lang";

export default function MortgageForm() {
  const { dispatch } = useContext(CalcContext);
  const l = useContext(LangContext);
  const [state, setState] = useState(initialCalcState);

  console.log("state", state);
  const onChangeHandle = ({ target }: { target: EventTarget }) => {
    setState((prev) => ({ ...prev, [target.id]: parseFloat(target.value) }));
  };

  useEffect(() => {
    dispatch({
      type: reducerStates.UPDATE_INIT,
      payload: state,
    });
  }, [state, dispatch]);

  const sx = { m: 2, ml: 0 };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <FormControl sx={sx}>
        <InputLabel htmlFor="creditTotal">Total Price</InputLabel>
        <OutlinedInput
          type="number"
          id="creditTotal"
          startAdornment={
            <InputAdornment position="start">
              {getPhrase(l, "currency")}
            </InputAdornment>
          }
          label="Total Price"
          value={state?.creditTotal ? state.creditTotal : ""}
          onChange={onChangeHandle}
        />
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel htmlFor="startSum">Start Sum</InputLabel>
        <OutlinedInput
          type="number"
          id="startSum"
          startAdornment={
            <InputAdornment position="start">
              {getPhrase(l, "currency")}
            </InputAdornment>
          }
          label="Start Sum"
          value={state?.startSum ? state.startSum : ""}
          onChange={onChangeHandle}
        />
      </FormControl>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={sx}>
          <InputLabel htmlFor="period">Years</InputLabel>
          <OutlinedInput
            type="number"
            id="period"
            label={getPhrase(l, "percent")}
            value={state?.period ? state.period : ""}
            onChange={onChangeHandle}
          />
        </FormControl>
        <FormControl sx={sx}>
          <InputLabel htmlFor="yearRate">{getPhrase(l, "percent")}</InputLabel>
          <OutlinedInput
            type="number"
            id="yearRate"
            label={getPhrase(l, "percent")}
            value={state?.yearRate ? state.yearRate : ""}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            onChange={onChangeHandle}
          />
        </FormControl>
      </Box>
    </Box>
  );
}