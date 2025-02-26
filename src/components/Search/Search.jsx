import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export const Search = ({ onSubmit }) => {
  const submit = (e) => {
    if(e.key === "Enter" && e.target.value.trim() !== "")
        onSubmit(e.target.value.trim());
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input onKeyUp={submit} className={s.input} type="text" placeholder={"Search a tv show you may like"}/>
    </>
  );
};
