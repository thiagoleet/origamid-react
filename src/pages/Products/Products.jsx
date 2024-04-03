import React from "react";
import useFetch from "../../hooks/useFetch";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import Head from "../../components/Head";
import styles from "./Products.module.css";

const Products = () => {
  const { request, loading } = useFetch();
  const [dados, setDados] = React.useState([]);

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

  return (
    <>
      <Head title="Produtos" descriptin="Página de produtos" />

      <Title>Produtos</Title>
      {loading && <p>Carregando...</p>}
      <section className={[styles.produtos, "animeLeft"].join(" ")}>
        {dados.map((produto) => {
          return (
            <ProductItem
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              fotos={produto.fotos}
            />
          );
        })}
      </section>
    </>
  );
};

export default Products;
