import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
