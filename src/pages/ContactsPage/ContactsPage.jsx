import ContactsForm from "../../../src/components/ContactsForm/ContactsForm";
import Filter from "../../../src/components/Filter/Filter";
import ContactList from "../../../src/components/ContactList/ContactList";
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
