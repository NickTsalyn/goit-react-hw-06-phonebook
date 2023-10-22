
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout.styled';

export const App = () => {
  


  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      />
    </Layout>
  );
};
