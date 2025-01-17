import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactsForm from "../../../src/components/ContactsForm/ContactsForm";
import Filter from "../../../src/components/Filter/Filter";
import ContactList from "../../../src/components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Your Contacts</h1>
      <ContactsForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
