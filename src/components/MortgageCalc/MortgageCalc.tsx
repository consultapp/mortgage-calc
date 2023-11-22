import { Box, Container, Grid, Typography } from "@mui/material";
import MortgageForm from "../MortgageForm/MortgageForm";
import MortgageResult from "../MortgageResult/MortgageResult";
// import MortgageTable from "../MortgageTable/MortgageTable";
import CalcProvider from "../../context/CalcProvider";
import LanguageProvider, { LangContext } from "../../lang/LanguageProvider";
import LangSwitch from "../LangSwitch/LangSwitch";
import { useContext } from "react";
import getPhrase from "../../lang/lang";
import InfoBox from "../InfoBox/InfoBox";

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
              <MortgageHeader />
            </Grid>
            <Grid item xs={12} md={6}>
              <MortgageForm />
            </Grid>
            <Grid item xs={12} md={6} sx={{ justifyContent: "flex-start" }}>
              <MortgageResult />
            </Grid>
            {/* <Grid item xs={12}>
              <MortgageTable />
            </Grid> */}
          </Grid>
          <Box sx={{ position: "absolute", right: "25px", top: "25px" }}>
            <LangSwitch />
          </Box>
          <InfoBox />
        </Container>
      </CalcProvider>
    </LanguageProvider>
  );
}

function MortgageHeader() {
  const l = useContext(LangContext);
  return (
    <Typography mt={8} mb={2} variant="h2" component="h1">
      {getPhrase(l, "name")}
    </Typography>
  );
}

export default MortgageCalc;
