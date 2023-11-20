import React, { useContext } from "react";
import { LangContext, SetLangContext } from "../../lang/LanguageProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function LangSwitch() {
  const l = useContext(LangContext);
  const setLang = useContext(SetLangContext);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value ?? "En");
  };

  return (
    <FormControl variant="standard">
      <Select
        id="demo-simple-select"
        onChange={handleChange}
        defaultValue={"en"}
      >
        <MenuItem value={"en"}>En</MenuItem>
        <MenuItem value={"ru"}>Ru</MenuItem>
      </Select>
    </FormControl>
  );
}
