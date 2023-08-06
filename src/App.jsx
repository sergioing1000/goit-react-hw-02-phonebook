import './App.css'
import { useState } from "react";
import { customAlphabet } from "nanoid";


import { Formu } from "./Components/Formu";
import { Contacts } from "./Components/Contacts";
import { Generador } from "./Components/Generador";

function App() {


  const generateUniqueID = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&/()=+',
    10
  );

  let state = {
    contacts: [
      { id: 1, name: "Rosie Simpson", number: "459-12-56" },
      { id: 2, name: "Hermione Kline", number: "443-89-12" },
      { id: 3, name: "Eden Clements", number: "645-17-79" },
      { id: 4, name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
  };

  const [contacts, setContacts] = useState(state.contacts);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleFormSubmit = (nameValue, telValue) => {

    setName(nameValue);
    setTel(telValue);

    const newContact = { id: generateUniqueID(), name: nameValue, number: telValue };

    setContacts([...contacts, newContact]);

  };

  return (
    <>
      <h2>Phonebook</h2>
      <Formu onSubmit={handleFormSubmit} />
      <Contacts contacts={contacts}/>
    </>
  );
}

export default App