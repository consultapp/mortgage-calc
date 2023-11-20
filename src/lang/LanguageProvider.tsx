import { createContext, useState } from "react";

export const LangContext = createContext("en");
export const SetLangContext = createContext(() => {});

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <SetLangContext.Provider value={setLang}>
      <LangContext.Provider value={lang}>{children}</LangContext.Provider>
    </SetLangContext.Provider>
  );
}
