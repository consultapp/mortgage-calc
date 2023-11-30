import { useContext } from "react";
import { LangContext } from "./LanguageProvider";
import { LANG } from "./lang";

export const useLang = (): ((field: string) => string) => {
  const l = useContext(LangContext);
  return (field) => LANG[l][field];
};
