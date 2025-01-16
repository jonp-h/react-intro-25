import { useState } from "react";
// RFCE

// ol
// ul

// li

function ListGroup() {
  const [plassering, setPlassering] = useState();

  //map
  let navn = ["Jon", "Knut", "Roar", "Bent", "Heidi"];
  //   navn = [];

  //   if (navn.length === 0) return "Tom liste";

  return (
    <>
      <h1>Navn</h1>
      {navn.length !== 0 ? (
        <ul className="list-group">
          {navn.map((navn, index) => (
            <li
              key={navn}
              className={
                plassering === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setPlassering(index)}
            >
              {navn}
            </li>
          ))}
        </ul>
      ) : (
        "Dette var en tom liste, gitt!"
      )}
    </>
  );
}

export default ListGroup;
