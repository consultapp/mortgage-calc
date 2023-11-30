import { useContext } from "react";
import { CalcContext } from "../../context/context";
import { Box, Grid, Typography } from "@mui/material";
import { useLang } from "../../lang/useLang";

export default function MortgageResult() {
  const lang = useLang();
  const { mortgage } = useContext(CalcContext);
  if (!mortgage) {
    <div>Data error</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} mb={2}>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage ? mortgage.debt.toLocaleString("ru-RU") : ""}&nbsp;
            {lang("currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {lang("initDebt")}
          </Typography>
        </Box>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage
              ? (
                  mortgage.monthPayment * mortgage.period -
                  mortgage.debt
                ).toLocaleString("ru-RU")
              : ""}
            &nbsp;{lang("currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {lang("overpay")}
          </Typography>
        </Box>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage
              ? (mortgage.monthPayment * mortgage.period).toLocaleString(
                  "ru-RU"
                )
              : ""}
            &nbsp;{lang("currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {lang("totalLoan")}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} mb={2}>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage ? mortgage.monthPayment.toLocaleString("ru-RU") : ""}
            &nbsp;{lang("currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {lang("monthPayment")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
