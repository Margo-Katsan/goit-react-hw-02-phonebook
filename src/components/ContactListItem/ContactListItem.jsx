import css from "./ContactListItem.module.css"

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li className={css.contact}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.number}>Tel.: {contact.number}</p>
      <button className={css.delBtn} onClick={() => {onDelete(contact.id)}}>Delete</button>
    </li>
  )
} 