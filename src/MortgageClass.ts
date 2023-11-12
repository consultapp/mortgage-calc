type MortgageInit = {
  yearRate: number;
  period: number;
  creditTotal: number;
  startSum: number;
};

export class Mortgage {
  yearRate: number;
  period: number;
  creditTotal: number;
  startSum: number;

  constructor({ yearRate, period, creditTotal, startSum }: MortgageInit) {
    this.yearRate = yearRate;
    this.period = period * 12;
    this.creditTotal = creditTotal;
    this.startSum = startSum;
  }
}

export class MortgageAnnuitent extends Mortgage {
  //calculated
  monthRate: number;
  debt: number;
  totalRate: number;
  monthPayment: number;

  constructor({ yearRate, period, creditTotal, startSum }: MortgageInit) {
    super({ yearRate, period, creditTotal, startSum });

    this.monthRate = this.yearRate / 12 / 100;
    this.debt = this.creditTotal - this.startSum;
    this.totalRate = (1 + this.monthRate) ** this.period;
    this.monthPayment =
      (this.debt * this.monthRate * this.totalRate) / (this.totalRate - 1);
  }
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
