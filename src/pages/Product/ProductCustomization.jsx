import React from "react";
import Head from "../../components/Head";

const ProductCustomization = ({ dados }) => {
  return (
    <>
      <Head
        title={`${dados.nome} - Customizado`}
        descriptin={dados.descricao}
      />

      <div>
        <h1>Customizado</h1>
      </div>
    </>
  );
};

export default ProductCustomization;
