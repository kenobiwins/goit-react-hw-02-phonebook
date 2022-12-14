const ColtactListItem = ({ element:{name,number,id},deleteData }) => {
  
    return (
    <li data-id={id}>
      {name}: {number}<button onClick={deleteData}>Delete</button>
    </li>
  );
};

export const ContactsList = ({ contacts,deleteData }) => {
  return (
    <ul>
      {contacts.map(el => {
          return <ColtactListItem key={el.id} element={el} deleteData={deleteData} />;
      })}
    </ul>
  );
};
