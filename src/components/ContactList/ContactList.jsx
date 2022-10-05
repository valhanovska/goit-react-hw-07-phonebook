import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const lowerCaseContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim())
  );

  return (
    <>
      {lowerCaseContact.length > 0 && (
        <ul>
          {lowerCaseContact.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
