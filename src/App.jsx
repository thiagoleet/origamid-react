import React from "react";
import "./App.css";
import photo from "./assets/img/foto.jpg";
// import DogSvg from "./assets/img/dog.svg?react";
import DogSvg from "./components/DogSvg";

const App = () => {
  return (
    <>
      {/* <div className="fundo"><img src={photo} alt="Foto" /></div> */}
      <DogSvg color="#84e" />
    </>
  );
};

export default App;
