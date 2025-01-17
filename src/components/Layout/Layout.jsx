import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./Layout.module.css";

const Layout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main className={css.main}>
        {isRefreshing ? <p>Loading...</p> : <Outlet />}
      </main>
    </>
  );
};

export default Layout;
