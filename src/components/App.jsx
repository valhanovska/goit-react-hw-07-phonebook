import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import s from './App.module.css';

export function App() {
  return (
    <div>
      <h1 className={s.text}>Phonebook</h1>
      <div className={s.container}>
        <div>
          <h2>Add new contacts</h2>

          <Form />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
