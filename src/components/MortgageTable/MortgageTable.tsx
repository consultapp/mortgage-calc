import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(
  month: string,
  mainDeptPart: number,
  percentDeptPart: number,
  totalDept: number
) {
  return { month, mainDeptPart, percentDeptPart, totalDept };
}

const rows = [
  createData("1", 159, 6.0, 24),
  createData("1", 159, 6.0, 24),
  createData("1", 159, 6.0, 24),
  createData("1", 159, 6.0, 24),
  createData("1", 159, 6.0, 24),
];

export default function MortgageTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Month</StyledTableCell>
            <StyledTableCell align="right">Dept,&nbsp;$</StyledTableCell>
            <StyledTableCell align="right">Percents,&nbsp;$</StyledTableCell>
            <StyledTableCell align="right">
              Loan balance,&nbsp;$
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell
                component="th"
                scope="row"
                align="center"
                style={{ width: 50 }}
              >
                {i + 1}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.mainDeptPart}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.percentDeptPart}
              </StyledTableCell>
              <StyledTableCell align="right">{row.totalDept}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
