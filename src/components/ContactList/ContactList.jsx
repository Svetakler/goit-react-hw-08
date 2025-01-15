import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import styles from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const { loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
