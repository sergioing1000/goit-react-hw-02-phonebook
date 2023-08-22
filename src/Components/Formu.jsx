import { useState } from "react";
import { customAlphabet } from "nanoid";

import "./formu.css";

export const Formu = ( {onSubmit} ) => {

  const [inputValueName, setinputValueName] = useState("");
  const [inputValueTel, setinputValueTel] = useState("");

  const onInputNamechange = (event) => {
    setinputValueName(event.target.value);
  };
  
  const onInputTelchange = (event) => {
    setinputValueTel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValueName, inputValueTel);

    setinputValueName("");
    setinputValueTel("");
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
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
          onChange={onInputTelchange}
          value={inputValueTel}
          pattern="[0-9\s\-\(\)+]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className="formButton" type="submit">
          New Contact
        </button>
      </form>
    </>
  );
}