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
import { MortgageType, initialCalcState } from "../../classes/MortgageClass";
import { reducer } from "./reducer";
import { useLang } from "../../lang/useLang";

export default function MortgageForm() {
  const { dispatch } = useContext(CalcContext);
  const lang = useLang();
  const [state, dispatchState] = useReducer(reducer, initialCalcState);

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    dispatchState({ type: target.id, payload: target.value });
  };
  const selectOnChangeHandle = (event: SelectChangeEvent) => {
    const target = event.target as HTMLSelectElement;
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
          onChange={selectOnChangeHandle}
          defaultValue={MortgageType.A}
          id="type"
          disabled
          sx={{ fontSize: "20px" }}
        >
          <MenuItem value={MortgageType.A}>{lang(MortgageType.A)}</MenuItem>
          <MenuItem value={MortgageType.D}>{lang(MortgageType.D)}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel htmlFor="creditTotal">{lang("totalPrice")}</InputLabel>
        <OutlinedInput
          sx={{ fontSize: "20px" }}
          type="number"
          id="creditTotal"
          startAdornment={
            <InputAdornment position="start">{lang("currency")}</InputAdornment>
          }
          label={lang("totalPrice")}
          value={state.creditTotal || ""}
          onChange={onChangeHandle}
          inputProps={{ step: 100000 }}
        />
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel htmlFor="startSum">{lang("startSum")}</InputLabel>
        <OutlinedInput
          sx={{ fontSize: "20px" }}
          type="number"
          id="startSum"
          startAdornment={
            <InputAdornment position="start">{lang("currency")}</InputAdornment>
          }
          label={lang("startSum")}
          value={state.startSum || ""}
          onChange={onChangeHandle}
          inputProps={{ step: 100000 }}
        />
      </FormControl>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={sx}>
          <InputLabel htmlFor="period">{lang("years")}</InputLabel>
          <OutlinedInput
            sx={{ fontSize: "20px" }}
            type="number"
            id="period"
            inputProps={{ max: 50, min: 1 }}
            label={lang("years")}
            value={state.period || ""}
            onChange={onChangeHandle}
          />
        </FormControl>
        <FormControl sx={sx}>
          <InputLabel htmlFor="yearRate">{lang("percent")}</InputLabel>
          <OutlinedInput
            sx={{ fontSize: "20px" }}
            inputProps={{ max: 30, min: 1, step: 0.1 }}
            type="number"
            id="yearRate"
            label={lang("percent")}
            value={state.yearRate || ""}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            onChange={onChangeHandle}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
