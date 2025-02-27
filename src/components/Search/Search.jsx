import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

export const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const submit = (e) => {
    if(e.key === "Enter" && e.target.value.trim() !== "") {
        onSubmit(e.target.value.trim());
        setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input value={value} onChange={handleChange} onKeyUp={submit} className={s.input} type="text" placeholder={"Search a tv show you may like"}/>
    </>
  );
};
