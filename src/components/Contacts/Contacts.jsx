import { Button } from 'components/Button';
import style from './Contacts.module.css';

export const Contacts = ({ contacts, handleBtn }) => {
  console.log(handleBtn);
  return (
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
  );
};
