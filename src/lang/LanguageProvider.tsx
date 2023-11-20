import { ReactNode, createContext, useState } from "react";

export const LangContext = createContext("en");
export const SetLangContext = createContext<React.Dispatch<any>>(() => null);

interface Props {
  children?: ReactNode;
}

export default function LanguageProvider({ children }: Props) {
  const [lang, setLang] = useState<string>("en");
  return (
    <SetLangContext.Provider value={setLang}>
      <LangContext.Provider value={lang}>{children}</LangContext.Provider>
    </SetLangContext.Provider>
  );
}
