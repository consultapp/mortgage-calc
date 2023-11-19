import { Container, Grid, Typography } from "@mui/material";
import MortgageForm from "../MortgageForm/MortgageForm";
import MortgageResult from "../MortgageResult/MortgageResult";
import MortgageTable from "../MortgageTable/MortgageTable";
import CalcReducer from "../../context/CalcReducer";

function MortgageCalc() {
  return (
    <CalcReducer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography mt={10} mb={2} variant="h2" component="h1">
              Mortgage Calculator
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MortgageForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <MortgageResult />
          </Grid>
          <Grid item xs={12}>
            <MortgageTable />
          </Grid>
        </Grid>
      </Container>
    </CalcReducer>
  );
}

export default MortgageCalc;
