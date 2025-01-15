import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input className={s.input} type="text" onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
