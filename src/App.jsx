import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <Button width={300} margin={"2rem"}>
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default App;
