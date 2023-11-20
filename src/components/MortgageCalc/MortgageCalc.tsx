import { Box, Container, Grid, Typography } from "@mui/material";
import MortgageForm from "../MortgageForm/MortgageForm";
import MortgageResult from "../MortgageResult/MortgageResult";
import MortgageTable from "../MortgageTable/MortgageTable";
import CalcProvider from "../../context/CalcProvider";
import LanguageProvider from "../../lang/LanguageProvider";
import LangSwitch from "../LangSwitch/LangSwitch";

function MortgageCalc() {
  return (
    <LanguageProvider>
      <CalcProvider>
        <Container
          maxWidth="lg"
          sx={{ position: "relative", marginBottom: "40px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} mb={2}>
              <Typography mt={10} mb={2} variant="h2" component="h1">
                Mortgage Calculator
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <MortgageForm />
            </Grid>
            <Grid item xs={12} md={6} sx={{ justifyContent: "flex-start" }}>
              <MortgageResult />
            </Grid>
            <Grid item xs={12}>
              <MortgageTable />
            </Grid>
          </Grid>
          <Box sx={{ position: "absolute", right: "25px", top: "25px" }}>
            <LangSwitch />
          </Box>
        </Container>
      </CalcProvider>
    </LanguageProvider>
  );
}

export default MortgageCalc;
