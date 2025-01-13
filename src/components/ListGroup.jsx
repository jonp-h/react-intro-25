// RFCE

// ol
// ul

// li

function ListGroup() {
  //map
  let navn = ["Jon", "Knut", "Roar", "Bent", "Heidi"];
  //   navn = [];

  //   if (navn.length === 0) return "Tom liste";

  return (
    <>
      <h1>Navn</h1>
      {navn.length !== 0 ? (
        <ul className="list-group">
          {navn.map((navn) => (
            <li
              className={
                navn === "Bent" ? "list-group-item active" : "list-group-item"
              }
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
