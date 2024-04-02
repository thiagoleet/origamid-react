import React from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";

const slides = [
  {
    id: "slide 1",
    text: "Slide 1",
  },
  {
    id: "slide 2",
    text: "Slide 2",
  },
  {
    id: "slide 3",
    text: "Slide 3",
  },
];

const App = () => {
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
