import './App.css'


import { Formu } from "./Components/Formu";
import { Contacts } from "./Components/Contacts";
import { Generador } from "./Components/Generador";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Formu />
      <Contacts />
      <Generador />
    </>
  );
}

export default App