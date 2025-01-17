import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name or number
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Search by name or number"
      />
    </label>
  );
};

export default Filter;
