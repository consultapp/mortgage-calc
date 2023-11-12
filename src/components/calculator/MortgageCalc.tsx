import {
  Container,
  FormControl,
  Box,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { MortgageAnnuitent } from "@src/MortgageClass";

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   "&.Mui-checked": {
//     color: theme.status.danger,
//   },
// }));

function MortgageCalc() {
  const mortgage = new MortgageAnnuitent({
    yearRate: 9.6,
    period: 20,
    creditTotal: 2000000,
    startSum: 500000,
  });
  console.log("mortgage", mortgage);

  return (
    <Container maxWidth="sm">
      <Typography mt={10} mb={2} variant="h2" component="h1">
        Mortgage Calculator
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
        <FormControl sx={{ m: 2 }}>
          <InputLabel htmlFor="total-price">Total Price</InputLabel>
          <OutlinedInput
            id="total-price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Total Price"
          />
        </FormControl>
        <FormControl sx={{ m: 2 }}>
          <InputLabel htmlFor="start-sum">Start Sum</InputLabel>
          <OutlinedInput
            id="start-sum"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Start Sum"
          />
        </FormControl>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl sx={{ m: 2 }}>
            <InputLabel htmlFor="years">Years</InputLabel>
            <OutlinedInput id="years" label="Years" />
          </FormControl>
          <FormControl sx={{ m: 2 }}>
            <InputLabel htmlFor="percent">Percent</InputLabel>
            <OutlinedInput
              id="percent"
              label="Percent"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
}

export default MortgageCalc;
