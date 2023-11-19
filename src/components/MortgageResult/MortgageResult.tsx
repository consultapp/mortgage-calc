import { useContext } from "react";
import { CalcContext } from "../../context/context";

export default function MortgageResult() {
  const { mortgage } = useContext(CalcContext);
  return (
    <div>
      MortgageResult:{mortgage?.monthPayment ? mortgage.monthPayment : ""}
    </div>
  );
}
