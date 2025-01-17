import ContactsForm from "../../ContactsForm/ContactsForm";
import Filter from "../../Filter/Filter";
import ContactList from "../../ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
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
