import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactItem.module.css";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <p className={css.text}>
        <span className={css.contactName}>{name}</span>:{" "}
        <span className={css.contactNumber}>{number}</span>
      </p>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
