import { useContext } from "react";
import { SetLangContext } from "../../lang/LanguageProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function LangSwitch() {
  const setLang = useContext(SetLangContext);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value ?? "ru");
  };

  return (
    <FormControl variant="standard">
      <Select onChange={handleChange} defaultValue={"ru"}>
        <MenuItem value={"en"}>En</MenuItem>
        <MenuItem value={"ru"}>Ru</MenuItem>
      </Select>
    </FormControl>
  );
}
