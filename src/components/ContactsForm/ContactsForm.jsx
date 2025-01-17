import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЄєЇїҐґ'’\s-]+$/;

  const numberRegex = /^[0-9]{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameRegex.test(name)) {
      setError("Name must contain only letters.");
      return;
    }

    if (!numberRegex.test(number)) {
      setError("Phone number must contain only 10 digits.");
      return;
    }

    if (name.trim() === "" || number.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </label>
      <label className={css.label}>
        Number:
        <input
          className={css.input}
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter phone number"
        />
      </label>
      {error && <p className={css.error}>{error}</p>}
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
