import React from "react";
import Head from "../../components/Head";

const ProductRating = ({ dados }) => {
  return (
    <>
      <Head title={`${dados.nome} - Avaliações`} descriptin={dados.descricao} />
      <div>
        <h3>Avaliações</h3>
        <p>Produto muito bom, recomendo!</p>
      </div>
    </>
  );
};

export default ProductRating;
