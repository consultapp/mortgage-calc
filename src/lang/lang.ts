const LANG: { [index: string]: { [index: string]: string } } = {
  ru: {
    currency: "\u20BD",
    percent: "Процентная ставка",
    years: "Срок (годов)",
    initialDebt: "Сумма кредита",
    annuity: "Аннуитетный платеж",
    differ: "Дифференцированный платеж",
    name: "Ипотечный калькулятор",
  },
  en: {
    currency: "$",
    percent: "Loan percent",
    years: "Years",
    initialDebt: "Initial Debt",
    annuity: "Annuity payment",
    differ: "Differentiated payment",
    name: "Mortgage Calculator",
  },
};

export default function getPhrase(lang: string, phrase: string): string {
  return LANG[lang][phrase];
}
