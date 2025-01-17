import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { getFilter } from "../../redux/filters/selectors";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      setIsModalOpen(false);
      setContactToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <div className={css.contactDetails}>
              <span className={css.icon}>
                <FaUserAlt />
              </span>
              <p className={css.contactName}>{contact.name}</p>
            </div>
            <div className={css.contactDetails}>
              <span className={css.icon}>
                <FaPhoneAlt />
              </span>
              <p className={css.contactNumber}>{contact.number}</p>
            </div>
            <button
              className={css.deleteButton}
              onClick={() => handleDeleteClick(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className={css.modalOverlay}>
          <div className={css.modal}>
            <h3>Are you sure you want to delete this contact?</h3>
            <div>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
