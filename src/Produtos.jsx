import React from "react";

import { GlobalContext } from "./GlobalContext";
import Produto from "./Produto";

const Produtos = ({ onSelect }) => {
  const { dados } = React.useContext(GlobalContext);
  return (
    <div className="grid">
      {dados.map((produto) => {
        return (
          <Produto
            onSelect={onSelect}
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            fotos={produto.fotos}
          />
        );
      })}
    </div>
  );
};

export default Produtos;
