const LANG: { [index: string]: { [index: string]: string } } = {
  ru: {
    currency: "\u20BD",
    percent: "Процентная ставка",
    years: "Срок (годов)",
    initialDebt: "Сумма кредита",
    annuity: "Аннуитетный платеж",
    differ: "Дифференцированный платеж",
    name: "Ипотечный калькулятор",
    initDebt: "Начальный долг",
    overpay: "Проценты",
    totalLoan: "Долг + Проценты",
    totalPrice: "Стоимость объекта",
    startSum: "Первоначальный взнос",
    monthPayment: "Ежемесячный платёж",
  },
  en: {
    currency: "$",
    percent: "Loan percent",
    years: "Years",
    initialDebt: "Initial Debt",
    annuity: "Annuity payment",
    differ: "Differentiated payment",
    name: "Mortgage Calculator",
    initDebt: "Initial Debt",
    overpay: "Overpayment",
    totalLoan: "Total Loan",
    totalPrice: "Total Price",
    startSum: "Start Sum",
    monthPayment: "Month Payment",
  },
};

export default function getPhrase(lang: string, phrase: string): string {
  return LANG[lang][phrase];
}
