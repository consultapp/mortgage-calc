const LANG: { [key: string]: string } = {
  ru: {
    currency: "\u20BD",
    percent: "Процентная ставка",
    initialDebt: "Сумма кредита",
  },
  en: { currency: "$", percent: "Loan percent", initialDebt: "Initial Debt" },
};

export default function getPhrase(lang: string, phrase: string): string {
  return LANG[lang][phrase];
}
