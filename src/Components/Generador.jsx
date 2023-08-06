import { customAlphabet } from 'nanoid';
import { useState } from 'react';


const generateUniqueID = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&/()=+', 15);

const uniqueID = generateUniqueID();

export const Generador = () => {

  const initialList = [
    "Manzana", "Plátano","Naranja","Fresa","Uva","Sandía","Piña","Mango","Pera","Kiwi","Melón","Frutas del bosque","Zanahoria","Brócoli","Espinaca","Lechuga","Tomate","Pepino","Pimiento","Calabacín","Patata","Batata","Cebolla","Ajo","Arroz","Pasta","Pan","Lentejas","Garbanzos","Pollo","Pavo","Pescado","Tofu","Queso","Yogur"];

  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(initialList);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);

    const filtered = initialList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <>
      <h2>Generador</h2>
      <p>{uniqueID}</p>

      <div>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar elementos"
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}