import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => onDelete(id);

  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
