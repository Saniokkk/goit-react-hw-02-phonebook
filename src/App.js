import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { ContactList } from 'components/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <>
        <Section title="Phone book">
          <ContactForm stateApp={this.changeStateAfterSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList
            contacts={this.state.contacts}
            handleBtn={this.handleDeleteBtn}
          />
        </Section>
      </>
    );
  }
}

export default App;
