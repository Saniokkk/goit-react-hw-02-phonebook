import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { Contacts } from 'components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
        name: '',
        number: '',
      };
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state)
  };

  handleDeleteBtn = event => {
    // this.setState(() => {
    //   // this.state.contacts
    // })
    this.setState(() => {
      const contacts = Object.keys(this.state.contacts);
      console.log(event.target.closest('li').id);
      const currentId = event.target.closest('li').id;
      return contacts.filter(({ id }) => {
        return id !== currentId;
      });
    }, console.log(this.state.contacts));
  };

  render() {
    return (
      <>
        <Section title="Phone book">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" on>
              Add contact
            </button>
          </form>
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={this.state.contacts}
            handleBtn={this.handleDeleteBtn}
          />
        </Section>
      </>
    );
  }
}

export default App;
