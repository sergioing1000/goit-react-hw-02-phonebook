import { useState } from 'react';
import { customAlphabet } from "nanoid";

  
import './formu.css'

import { Contacts } from "../Components/Contacts";

export const Formu = () => {

  const generateUniqueID = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&/()=+',10);

  let state = {
    contacts: [
      { id: 1, name: "Rosie Simpson", number: "459-12-56" },
      { id: 2, name: "Hermione Kline", number: "443-89-12" },
      { id: 3, name: "Eden Clements", number: "645-17-79" },
      { id: 4, name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
  };

  const [inputValueName, setinputValueName] = useState("");
  const [inputValueTel, setinputValueTel] = useState("");


  const onInputTelchange = (event) => {
    setinputValueTel(event.target.value);
  };

  const onInputNamechange = (event) => {
    setinputValueName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAgregarNombreFunc(inputValueName, inputValueTel);
  };

  const [arreglo, setarreglo] = useState(state.contacts);

  const onAgregarNombreFunc = (valN, valT) => {
    valN = valN.trim();
    valT = valT.trim();

    if (valN < 1) return;
    if (valT < 1) return;

    const envio = {
      id: generateUniqueID(),
      name: valN,
      number: valT,
    };

    setarreglo([...arreglo, envio]);

    setinputValueName("");
    setinputValueTel("");

  };

  return (
    <>
      <form className="formulario" onSubmit={(event) => onSubmit(event)}>
        <p>Name:</p>

        <input
          type="text"
          className="inputFieldText"
          name="name"
          placeholder="Ingresa nuevo nombre"
          value={inputValueName}
          onChange={onInputNamechange}
          pattern="[A-Za-z\s\-']+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <br />

        <p>Number:</p>

        <input
          type="tel"
          className="inputFieldTel"
          name="telnumber"
          placeholder="Ingresa nuevo teléfono"
          value={inputValueTel}
          onChange={onInputTelchange}
          pattern="[0-9\s\-\(\)+]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className="formButton">Add Contact</button>
      </form>



      <Contacts data={arreglo}> </Contacts>
    </>
  );
}