import { ReactNode, createContext, useState } from "react";

export const LangContext = createContext("en");
export const SetLangContext = createContext(() => {});

interface Props {
  children?: ReactNode;
}

export default function LanguageProvider({ children }: Props) {
  const [lang, setLang] = useState("en");
  return (
    <SetLangContext.Provider value={setLang}>
      <LangContext.Provider value={lang}>{children}</LangContext.Provider>
    </SetLangContext.Provider>
  );
}
