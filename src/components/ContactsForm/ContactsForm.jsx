import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { useState } from "react";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className={styles.input}
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
