import React from "react";
import { GlobalContext } from "./GlobalContext";

const ObterProdutos = () => {
  const { obterDados } = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => obterDados()}>Obter Produtos</button>
    </div>
  );
};

export default ObterProdutos;
