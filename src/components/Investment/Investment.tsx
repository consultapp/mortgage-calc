import {
  FormControl,
  Box,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Grid,
  Switch,
} from "@mui/material";
import { useLang } from "../../lang/useLang";
import { ChangeEvent, useContext, useState } from "react";
import { CalcContext } from "../../context/context";

const sx = { m: 2, ml: 0 };

export default function Investment() {
  const lang = useLang();
  const [state, setState] = useState<number>(30000);
  const [connected, setConnected] = useState<boolean>(true);
  const { mortgage } = useContext(CalcContext);

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setState(Number(target.value) || NaN);
  };

  const onToggler = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setConnected(target.checked);
    if (target.checked) {
      setState(mortgage.monthPayment);
    }
  };
  return (
    <>
      <Typography variant="h5" sx={{ mt: 4 }}>
        {lang("investHeader")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <FormControl sx={{ m: 2, ml: 0, flexGrow: 1 }}>
              <InputLabel htmlFor="creditTotal">
                {lang("rentIncomeMonth")}
              </InputLabel>
              <OutlinedInput
                sx={{ fontSize: "20px" }}
                type="number"
                id="creditTotal"
                startAdornment={
                  <>
                    <Switch defaultChecked onChange={onToggler} />
                    <InputAdornment position="start">
                      {lang("currency")}
                    </InputAdornment>
                  </>
                }
                label={lang("rentIncomeMonth")}
                value={connected ? mortgage.monthPayment : state || ""}
                onChange={onChangeHandle}
                inputProps={{ step: 1000 }}
                disabled={connected}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography mt={1} mb={0} variant="h4" component="h3">
              {state && Math.round(mortgage.creditTotal / (state * 12))}{" "}
              {lang("year")}
            </Typography>
            <Typography mt={0} mb={2} variant="h6" component="h5">
              {lang("payback")}
            </Typography>
          </Box>
          <Box>
            <Typography mt={1} mb={0} variant="h4" component="h3">
              {state &&
                Math.round(((state * 12) / mortgage.creditTotal) * 10000) / 100}
              &nbsp;%
            </Typography>
            <Typography mt={0} mb={2} variant="h6" component="h5">
              {lang("yearIncomePercent")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
