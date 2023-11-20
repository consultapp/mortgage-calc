import { useContext } from "react";
import { CalcContext } from "../../context/context";

export default function MortgageResult() {
  const { mortgage } = useContext(CalcContext);
  if (!mortgage) {
    <div>Data error</div>;
  }
  console.log("mortgage", mortgage);
  return (
    <div>
      MortgageResult:{mortgage!.monthPayment ? mortgage.monthPayment : ""}
    </div>
  );
}
