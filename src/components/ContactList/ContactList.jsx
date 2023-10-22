// import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.list)
  const filter = useSelector(state => state.filter)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    
      <List>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
        ))}
      </List>
    
  );
};
