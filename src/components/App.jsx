import React, { Component } from "react";
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StatWrap } from './Form/Form.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };
  };

  addContact = (contact) => {
    (this.state.contacts.map(contact =>
      contact.name.toLocaleLowerCase())).includes(contact.name.toLocaleLowerCase()) ?
      alert(`${contact.name} is alreade in contacts`) :
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact]
      }))
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value })
  };

  getFilterContacts = () => {
    const normalaizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedFilter))
  };

  DeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };



  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <StatWrap >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList filterContacts={filterContacts} onDeletContact={this.DeleteContact} />
      </StatWrap >
    );
  }

};


