import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" className={css.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
