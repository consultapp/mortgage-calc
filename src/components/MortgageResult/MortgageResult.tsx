import { useContext } from "react";
import { CalcContext } from "../../context/context";
import { Box, Grid, Typography } from "@mui/material";
import { LangContext } from "../../lang/LanguageProvider";
import getPhrase from "../../lang/lang";

export default function MortgageResult() {
  const l = useContext(LangContext);
  const { mortgage } = useContext(CalcContext);
  if (!mortgage) {
    <div>Data error</div>;
  }
  console.log("mortgage", mortgage);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} mb={2}>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage ? mortgage.debt.toLocaleString("ru-RU") : ""}&nbsp;
            {getPhrase(l, "currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {getPhrase(l, "initDebt")}
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
            &nbsp;{getPhrase(l, "currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {getPhrase(l, "overpay")}
          </Typography>
        </Box>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage
              ? (mortgage.monthPayment * mortgage.period).toLocaleString(
                  "ru-RU"
                )
              : ""}
            &nbsp;{getPhrase(l, "currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            {getPhrase(l, "totalLoan")}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} mb={2}>
        <Box>
          <Typography mt={1} mb={0} variant="h4" component="h3">
            {mortgage ? mortgage.monthPayment.toLocaleString("ru-RU") : ""}
            &nbsp;{getPhrase(l, "currency")}
          </Typography>
          <Typography mt={0} mb={2} variant="h6" component="h5">
            Month payment
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
