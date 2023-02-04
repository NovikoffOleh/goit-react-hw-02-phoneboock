import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
       ],
    filter: '',
  };

  deleteContact = contactid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactid),
    }));
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const existContact = this.state.contacts.find(
      newContact => newContact.name === contact.name,
    );

    if (existContact) {
      return alert(`${existContact.name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (!filter.trim()) {
      return contacts;
    }
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <h1>Телефон 
          <span class = "App_title_color" >Book</span>
        </h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Контакти</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
