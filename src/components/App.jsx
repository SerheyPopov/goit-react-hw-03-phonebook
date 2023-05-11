import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ContactForm from './form/form';
import { ContactList } from './contacts/contactList';
import { Filter } from './filter/filter';
import { Container, Title, SubTitle } from './app.styled';

export class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddPhoneContact = text => {
    const phoneContact = {
      id: nanoid(),
      name: text.name,
      number: text.number,
    };
    const allertMassage = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === phoneContact.name.toLowerCase()
    );

    if (allertMassage.length === 0) {
      return this.setState(prevState => ({
        contacts: [phoneContact, ...prevState.contacts],
      }));
    }
    alert(phoneContact.name + ' is already in contacts');
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts)
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts
    ) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deletePhoneContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visiblesContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.AddPhoneContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList
          contact={visiblesContact}
          onDeleteContact={this.deletePhoneContact}
        />
      </Container>
    );
  }
}
