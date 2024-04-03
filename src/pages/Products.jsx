import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const { request, loading } = useFetch();
  const [dados, setDados] = React.useState([]);
  const navigate = useNavigate();

  const obterDados = React.useCallback(async () => {
    const url = "https://ranekapi.origamid.dev/json/api/produto";
    const { response, json } = await request(url);
    setDados(json || []);

    return { response, json };
  }, [request]);

  React.useEffect(() => {
    async function fetchData() {
      await obterDados();
    }

    fetchData();
  }, [request, obterDados]);

  function onSelect(item) {
    navigate(`/produto/${item.id}`);
  }

  return (
    <div className="content">
      <Title>Produtos</Title>

      {loading && <p>Carregando...</p>}

      <div className="grid">
        {dados.map((produto) => {
          return (
            <ProductItem
              onSelect={onSelect}
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              fotos={produto.fotos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
