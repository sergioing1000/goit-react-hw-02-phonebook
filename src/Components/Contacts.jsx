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


export const Contacts = ({ contacts }) => {


  const [filter, setFilter] = useState("");

  const [filteredItems, setFilteredItems] = useState(contacts);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);

    const filtered = contacts.filter((item) =>
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
            {filter === ""
              ? contacts.map((item) => (
                  <Items key={item.id} nombre={item.name} tel={item.number}>
                    {" "}
                  </Items>
                ))
              : filteredItems.map((item) => (
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
