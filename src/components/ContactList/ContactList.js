import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={s.ContactList}>
    {contacts.length ? (
      contacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={s.ContactList__item}>
          <p className={s.ContactList__text}>{name}:</p>
          <p className={s.ContactList__text}>{number}</p>

          <button
            className={s.ContactList__btn}
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))
    ) : (
      <p>😔Контакт не знайдено</p>
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
