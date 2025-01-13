function HelloWorld() {
  const navn = "";
  const alder = null;
  // kommentar

  return (
    <div className="alert-warning alert">
      {navn ? <h1>Hello {navn}</h1> : <h1>Hade bra!</h1>}
      {alder && <h2>Du er {alder} år!</h2>}
    </div>
  );
}

export default HelloWorld;
