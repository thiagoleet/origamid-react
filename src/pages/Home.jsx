import React from "react";
import Title from "../components/Title";
import Head from "../components/Head";

const Home = () => {
  return (
    <>
      <Head title="Home" descriptin="Esta é a Home" />
      <div className="content">
        <Title>Home</Title>
      </div>
    </>
  );
};

export default Home;
