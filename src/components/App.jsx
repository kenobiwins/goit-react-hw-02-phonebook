import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleDelete = e => {
    const { id } = e.currentTarget.closest('li').dataset;

    const newArr = this.state.contacts.filter(el => {
      return el.id !== id;
    });

    this.setState(prevState => {
      return { contacts: [...newArr] };
    });
  };
  handleFilterInput = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  handleSubmit = (e, state, foo) => {
    e.preventDefault();
    const { name, number } = state;

    const user = {
      id: nanoid(),
      name,
      number,
    };
    const usersInclude = this.state.contacts.some(el => el.name === name);

    if (usersInclude) {
      alert(`${name} is already in contacts`);
      foo();
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, user],
      };
    });
    foo();
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section majorTitle={'Phonebook'}>
          <PhonebookForm contacts={contacts} onSubmit={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Filter
            handlerFilterInput={this.handleFilterInput}
            filterValue={filter}
          />
          <ContactsList
            contacts={this.filterContacts()}
            deleteData={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
