import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Produtos from "./Produtos";

import { GlobalStorage } from "./GlobalContext";
import LimparDados from "./Limpar";
import ObterProdutos from "./ObterProdutos";

import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { loading } = useFetch();

  function handleClick(produto) {
    setProduto(produto);
  }

  return (
    <GlobalStorage>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Produtos</h1>
          <ObterProdutos />
          <LimparDados />
        </div>
      </Header>

      {loading && <p>Carregando...</p>}
      {!loading && <Produtos onSelect={handleClick} />}

      <Footer />
    </GlobalStorage>
  );
};

export default App;
