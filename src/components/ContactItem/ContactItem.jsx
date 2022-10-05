import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <p>
        <span>{name}</span>: {number}
      </p>
      <button type="button" className={s.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
