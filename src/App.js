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
    this.setState({ [event.target.name]: event.target.value });
  };

  contactsFilter = () => {
    this.setState(() => {
      this.state.contacts.map(({ name }) => {
        // return name.toLowerCase() === this.state.filter.toLowerCase().trim();
        const filter =
          name.toLowerCase() == this.state.filter.toLowerCase().trim();
        console.log(filter);
      });
      // console.log(this.state.contacts[0].name)
    });
  };

  render() {
    return (
      <>
        <Section title="Phone book">
          <ContactForm stateApp={this.changeStateAfterSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList
            onChange={this.contactsFilter}
            contacts={this.state.contacts}
            handleBtn={this.handleDeleteBtn}
            filter={this.handleChange}
            value={this.filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
