import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
    case "multiply":
      return state * action.payload;
    case "divide":
      return state / action.payload;
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  function increase() {
    dispatch({ type: "increase" });
  }

  function decrease() {
    dispatch({ type: "decrease" });
  }

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <button onClick={() => dispatch({ type: "divide", payload: 2 })}>
          --
        </button>
        <button onClick={() => decrease()}>-</button>
        <pre
          style={{
            fontFamily: "monospace",
            backgroundColor: "#ccc",
            padding: "1rem",
            width: "100px",
            textAlign: "center",
          }}
        >
          {state}
        </pre>

        <button onClick={() => increase()}>+</button>
        <button onClick={() => dispatch({ type: "multiply", payload: 10 })}>
          ++
        </button>
      </div>
      <div style={{ margin: "1rem auto 0", width: "50%" }}>
        <button
          style={{ width: "100%" }}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
