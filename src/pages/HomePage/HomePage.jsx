import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>Welcome to the Phonebook App!</h1>

      <p>Manage your contacts easily and efficiently.</p>

      <div className={css.imageContainer}>
        <img
          src={"/img/cat.png"}
          loading="lazy"
          alt="A greeting"
          className={css.image}
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
