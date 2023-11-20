import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { LangContext } from "../../lang/LanguageProvider";
import getPhrase from "../../lang/lang";
import { CalcContext } from "../../context/context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MortgageTable() {
  const l = useContext(LangContext);
  const { mortgage } = useContext(CalcContext);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Years</StyledTableCell>
            <StyledTableCell align="right">
              Debt,&nbsp;{getPhrase(l, "currency")}
            </StyledTableCell>
            <StyledTableCell align="right">
              Percents,&nbsp;{getPhrase(l, "currency")}
            </StyledTableCell>
            <StyledTableCell align="right">
              Loan balance,&nbsp;{getPhrase(l, "currency")}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mortgage.getTable().map((row) => (
            <StyledTableRow key={row.period}>
              <StyledTableCell
                component="th"
                scope="row"
                align="center"
                style={{ width: 50 }}
              >
                {row.period}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.mainDebtPart}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.percentDebtPart}
              </StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
