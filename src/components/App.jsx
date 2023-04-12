import { useState, useEffect } from "react";
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StatWrap } from './Form/Form.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (contact) => {
    (contacts.map(contact =>
      contact.name.toLocaleLowerCase())).includes(contact.name.toLocaleLowerCase()) ?
      alert(`${contact.name} is alreade in contacts`) :
      setContacts([...contacts, contact])
  };

  const changeFilter = e => {
    setFilter(e.target.value)
  };

  const getFilterContacts = () => {
    const normalaizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedFilter))
  };

  const DeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };

  const filterContacts = getFilterContacts();

  return (
    <StatWrap >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />
      <ContactsList filterContacts={filterContacts} onDeletContact={DeleteContact} />
    </StatWrap >
  );


};








