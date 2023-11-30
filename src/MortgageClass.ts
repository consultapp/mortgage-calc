export type MortgageInit = {
  yearRate: number | string;
  period: number | string;
  creditTotal: number | string;
  startSum: number | string;
  type: "annuitet" | "differ";
};

interface IMortgageCalc {
  monthPayment: number;
  updateInitialData?(data: MortgageInit): void;
  getTable?(): {
    period: number;
    mainDebtPart: number;
    percentDebtPart: number;
    balance: number;
  }[];
}

export const initialCalcState: MortgageInit = {
  yearRate: 15.9,
  period: 20,
  creditTotal: 10000000,
  startSum: 4000000,
  type: "annuitet",
};

export class Mortgage implements IMortgageCalc {
  yearRate: number = Number(initialCalcState.yearRate);
  period: number = Number(initialCalcState.period);
  periodYears: number = 0;
  creditTotal: number = Number(initialCalcState.creditTotal);
  startSum: number = Number(initialCalcState.startSum);
  type: "annuitet" | "differ" = "annuitet";
  monthPayment: number = 0;

  constructor(data: MortgageInit) {
    this.updateInitialData(data);
  }

  updateInitialData({ yearRate, period, creditTotal, startSum }: MortgageInit) {
    this.yearRate = Number(yearRate);
    this.periodYears = Number(period);
    this.period = Number(period) * 12;
    this.creditTotal = Number(creditTotal);
    this.startSum = Number(startSum);
  }
  getTable(): {
    period: number;
    mainDebtPart: number;
    percentDebtPart: number;
    balance: number;
  }[] {
    let balance = this.monthPayment * this.period;
    return new Array(this.periodYears).fill({}).map((_, i) => {
      balance -= this.monthPayment * 12;
      return {
        period: i + 1,
        mainDebtPart: 0,
        percentDebtPart: 0,
        balance: balance,
      };
    });
  }
}

export class MortgageAnnuitent extends Mortgage {
  //calculated
  monthRate: number = 0;
  debt: number = 0;
  totalRate: number = 0;
  monthPayment: number = 0;

  constructor(data: MortgageInit) {
    super(data);
    this.updateData();
  }
  updateInitialData(data: MortgageInit) {
    super.updateInitialData(data);
    this.updateData();
  }
  updateData() {
    this.monthRate = this.yearRate / 12 / 100;
    this.debt = this.creditTotal - this.startSum;
    this.totalRate = (1 + this.monthRate) ** this.period;
    this.monthPayment = parseFloat(
      (
        (this.debt * this.monthRate * this.totalRate) /
        (this.totalRate - 1)
      ).toFixed(2)
    );
  }

  getTable(): {
    period: number;
    mainDebtPart: number;
    percentDebtPart: number;
    balance: number;
  }[] {
    let balance = this.monthPayment * this.period;
    return new Array(this.periodYears).fill({}).map((_, i) => {
      balance -= this.monthPayment * 12;
      return {
        period: i + 1,
        mainDebtPart: 0,
        percentDebtPart: 0,
        balance: balance,
      };
    });
  }
}
export class MortgageDiffer extends Mortgage {
  monthRate: number = 0;
  debt: number = 0;
  totalRate: number = 0;
  monthPayment: number = 0;

  constructor(data: MortgageInit) {
    super(data);
    this.updateData();
  }
  updateInitialData(data: MortgageInit) {
    super.updateInitialData(data);
    this.updateData();
  }
  updateData() {}
}

// ЕЖЕМЕСЯЧНАЯ_СТАВКА = ПРОЦЕНТНАЯ_СТАВКА_ГОДОВЫХ / 12 / 100
// ОБЩАЯ_СТАВКА = (1 + ЕЖЕМЕСЯЧНАЯ_СТАВКА) ^ СРОК_ИПОТЕКИ_МЕСЯЦЕВ
// ЕЖЕМЕСЯЧНЫЙ_ПЛАТЕЖ = СУММА_КРЕДИТА * ЕЖЕМЕСЯЧНАЯ_СТАВКА * ОБЩАЯ_СТАВКА / (ОБЩАЯ_СТАВКА - 1)
// ОСТАТОК_ДОЛГА = СУММА_КРЕДИТА

// в цикле для каждого ТЕКУЩИЙ_МЕСЯЦ в ипотеке:
//     ПРОЦЕНТНАЯ_ЧАСТЬ = ОСТАТОК_ДОЛГА * ЕЖЕМЕСЯЧНАЯ_СТАВКА
//     ОСНОВНАЯ_ЧАСТЬ = ЕЖЕМЕСЯЧНЫЙ_ПЛАТЕЖ - ПРОЦЕНТНАЯ_ЧАСТЬ
//     ОСТАТОК_ДОЛГА = ОСТАТОК_ДОЛГА - ОСНОВНАЯ_ЧАСТЬ
//     добавить (ТЕКУЩИЙ_МЕСЯЦ; ПРОЦЕНТНАЯ_ЧАСТЬ; ОСНОВНАЯ_ЧАСТЬ) на график
