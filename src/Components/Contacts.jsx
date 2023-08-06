import './contacts.css'
import { useState } from "react";

const Items = ({ nombre, tel }) => {

  return (
    <li style={{ textAlign: "left" }}>
      <span style={{ fontWeight: "bold" }}> 👤 {nombre}</span>
      <span> ............ </span>
      <span> 📞 {tel}</span>
    </li>
  );
};


export const Contacts = (rData) => {

  let initialList = [];

  for (let i = 0; i < rData.data.length; i++) {
    initialList.push(rData.data[i]);
  }
  
  // console.log(rData.data);
  // console.log(initialList);

  const [filter, setFilter] = useState("");

  const [filteredItems, setFilteredItems] = useState(initialList);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);


    const filtered = initialList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <>
      <section className="contactsSec">
        <h2>CONTACTS</h2>

        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar elementos"
          title="Use this field to filter"
        />

        <div>
          <ul>
            {filteredItems.map((item) => (
              <Items key={item.id} nombre={item.name} tel={item.number}>
                {" "}
              </Items>
            ))}
          </ul>          
        </div>
      </section>
    </>
  );
};
