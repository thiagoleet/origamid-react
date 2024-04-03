import React from "react";
import Title from "../components/Title";
import Head from "../components/Head";

const About = () => {
  return (
    <>
      <Head title="Sobre" descriptin="Sobre esta aplicação" />
      <div className="content">
        <Title>Sobre</Title>
      </div>
    </>
  );
};

export default About;
