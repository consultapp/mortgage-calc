const LANG: { [index: string]: { [index: string]: string } } = {
  ru: {
    currency: "\u20BD",
    percent: "Процентная ставка",
    initialDebt: "Сумма кредита",
    annuity: "Аннуитетный платеж",
    differ: "Дифференцированный платеж",
  },
  en: {
    currency: "$",
    percent: "Loan percent",
    initialDebt: "Initial Debt",
    annuity: "Annuity payment",
    differ: "Differentiated payment",
  },
};

export default function getPhrase(lang: string, phrase: string): string {
  return LANG[lang][phrase];
}
