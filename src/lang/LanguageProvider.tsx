import { ReactNode, createContext, useState } from "react";

export const LangContext = createContext("en");
export const SetLangContext = createContext(() => {});

interface Props {
  children?: ReactNode;
}

export default function LanguageProvider({ children }: Props) {
  const [lang, setLang] = useState<string>("en");
  return (
    <SetLangContext.Provider value={() => {}}>
      <LangContext.Provider value={lang}>{children}</LangContext.Provider>
    </SetLangContext.Provider>
  );
}
