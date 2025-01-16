import ListGroup from "./components/ListGroup";
import { useState, useEffect } from "react";

function App() {
  const navn = ["Jon", "Knut", "Roar", "Bent", "Heidi", "Roger"];
  const [name, setName] = useState("jon");

  return (
    <>
      <ListGroup navn={navn} name={name} setName={setName} />
      <ListGroup
        navn={["Elias", "Kåre", ...navn]}
        name={name}
        setName={setName}
      />
    </>
  );
}

export default App;
