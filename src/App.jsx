import './App.css'

import { Generador } from './Components/Generador'
import { Formu } from "./Components/Formu";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Formu />

      <Generador />
      
    </>
  );
}

export default App