import { useState, useEffect } from "react";

function ListGroup({ navn, name, setName }) {
  const [plassering, setPlassering] = useState();

  useEffect(() => {
    console.log("hello");
  }, [plassering]);

  //   if (navn.length === 0) return "Tom liste";

  return (
    <>
      <h1>{name}</h1>
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
              onClick={() => {
                setPlassering(index);
                setName(navn);
              }}
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
