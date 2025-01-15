import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ContactList from "../ContactList/ContactList";
import ContactsForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      {" "}
      <div>
        <h1>Phonebook</h1>
        <SearchBox />
        <ContactsForm />
        <ContactList />
      </div>
    </ErrorBoundary>
  );
};

export default App;
