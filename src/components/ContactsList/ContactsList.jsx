import { Button } from 'components/BaseStyles/BaseStyles.styled';
import { ContactList, ListItem } from './ContactsList.styled';
// const ColtactListItem = ({ element:{name,number,id},deleteData }) => {

//     return (
//     <li data-id={id}>
//       {name}: {number}<button onClick={deleteData}>Delete</button>
//     </li>
//   );
// };

export const ContactsList = ({ contacts, deleteData }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id} data-id={id}>
            {name}: {number}
            <Button onClick={deleteData}>Delete</Button>
          </ListItem>
        );
      })}
      {/* {contacts.map(el => {
          return <ColtactListItem key={el.id} element={el} deleteData={deleteData} />;
      })} */}
    </ContactList>
  );
};
