import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.container}>
      <label className={css.label}>
        Search:
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Search contacts"
        />
      </label>
    </div>
  );
};

export default SearchBox;
