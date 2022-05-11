import { Button } from 'components/Button';
import style from './ContactList.module.css';

export const ContactList = ({
  value,
  filter,
  contacts,
  handleBtn,
  onChange,
}) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={value}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
      />
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} id={id}>
              {name}: {number}
              <Button
                type="button"
                className={style.remBtn}
                name="Delete"
                handleBtn={handleBtn}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
