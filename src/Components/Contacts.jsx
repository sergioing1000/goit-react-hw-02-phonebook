import './contacts.css'

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

  return (
    <>
      <section className="contactsSec">
        <h2>CONTACTS</h2>
        <div>
          <ul>
              {rData.data.map((item) => (
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
