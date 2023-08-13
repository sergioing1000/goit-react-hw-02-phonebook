import "./contacts.css";
import { useState } from "react";
import { useEffect } from "react";

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

  const Items = ({ nombre, tel, ident }) => {
    return (
      <li className="ItemList" style={{ textAlign: "left" }}>
        <span style={{ fontWeight: "bold" }}> 👤 {nombre}</span>
        <span> ............ </span>
        <span> 📞 {tel}</span>
        <span> ............ </span>
        <button className="ButtonList" onClick={() => clickDeletItem(ident)}>
          ⛔ Delete
        </button>
      </li>
    );
  };

  const clickDeletItem = (idToDelete) => {
    const updatedContacts = filteredItems.filter(
      (posici) => posici.id !== idToDelete
    );
    setFilteredItems(updatedContacts);
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
                  <Items
                    key={item.id}
                    nombre={item.name}
                    tel={item.number}
                    ident={item.id}
                  >
                    {" "}
                  </Items>
                ))
              : filteredItems.map((item) => (
                  <Items
                    key={item.id}
                    nombre={item.name}
                    tel={item.number}
                    ident={item.id}
                  >
                    {" "}
                  </Items>
                ))}
          </ul>
        </div>
      </section>
    </>
  );
};
