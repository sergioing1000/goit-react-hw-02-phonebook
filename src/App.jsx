import React from "react";
import "./App.css";

import { useState } from "react";

import { customAlphabet } from "nanoid";

import { Formu } from "./Components/Formu";
// import { Contacts } from "./Components/Contacts";
// import { Generador } from "./Components/Generador";

// import Swal from "sweetalert2";

function App() {

  const mostrarAlerta = (nome) => {
    const mensaje = `${nome},
     is already in Contacts`;

    Swal.fire("¡Sorry!", mensaje , "error");
  };

  const generateUniqueID = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&/()=+',
    10
  );

  let state = {
    contacts: [
      { id: "1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "2", name: "Hermione Kline", number: "443-89-12" },
      { id: "3", name: "Eden Clements", number: "645-17-79" },
      { id: "4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
  };

  const [contacts, setContacts] = useState(state.contacts);

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleFormSubmit = (nameValue, telValue) => {

    console.log("entró a handle form submit");
    
    setName(nameValue);
    setTel(telValue);

    const newContact = { id: generateUniqueID(), name: nameValue, number: telValue };

    console.log(newContact);

    let existeNombre = false;

    for (const element of contacts) {
      if (element.name === nameValue) {
        existeNombre = true;
        break;
      }
    }

    existeNombre
      ? mostrarAlerta(nameValue)
      : setContacts(contacts.push(newContact));
    
    console.log(state.contacts);

  };

  return (
    <>
      <h2 className="heading-with-shadow">Phonebook</h2>
      <Formu onSubmit={handleFormSubmit} />
      {/* <Contacts contacts={contacts} /> */}
    </>
  );
}

export default App;