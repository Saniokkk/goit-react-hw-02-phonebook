import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteBtn = event => {
    this.setState(() => {
      const contacts = Object.values(this.state.contacts);
      const currentId = event.target.closest('li').id;
      const newState = contacts.filter(({ id }) => {
        return id !== currentId;
      });
      return { contacts: [...newState] };
    });
  };

  changeStateAfterSubmit = (contactName, contactNumber) => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: contactName, number: contactNumber, id: nanoid() },
        ],
      };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, console.log(this.contactsFilter()));
  };

  contactsFilter(event) {
    const { contacts, filter } = this.state;

    console.log(event);
    console.log(filter);

    contacts.filter(({ name }) => {
      console.log(name);
      console.log(filter);

      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  }

  render() {
    return (
      <>
        <Section title="Phone book">
          <ContactForm stateApp={this.changeStateAfterSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList
            onChange={this.handleChange}
            contacts={this.state.contacts}
            handleBtn={this.handleDeleteBtn}
            // filter={this.contactsFilter()}
            value={this.state.filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
