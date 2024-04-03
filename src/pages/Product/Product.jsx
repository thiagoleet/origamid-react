import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";

import useFetch from "../../hooks/useFetch";
import Title from "../../components/Title";
import ProductDescription from "./ProductDescription";
import ProductRating from "./ProductRating";
import ProductCustomization from "./ProductCustomization";

const ProductNav = styled.nav`
  margin-bottom: 1rem;
`;

const Product = () => {
  const params = useParams();
  const { request, loading } = useFetch();
  const [dados, setDados] = React.useState({});

  const obterDados = React.useCallback(async () => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${params.id}`;
    const { response, json } = await request(url);
    setDados(json || []);

    return { response, json };
  }, [request, params]);

  React.useEffect(() => {
    async function fetchData() {
      await obterDados();
    }

    fetchData();
  }, [request, obterDados]);

  return (
    <div className="content">
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <Title>{dados.nome}</Title>
          <ProductNav>
            <NavLink to="">Descrição</NavLink>
            <NavLink to="avaliacao">Avaliação</NavLink>
            <NavLink to="customizado">Customizado</NavLink>
          </ProductNav>
          <Routes>
            <Route path="/" element={<ProductDescription dados={dados} />} />
            <Route path="avaliacao" element={<ProductRating dados={dados} />} />
            <Route
              path="customizado"
              element={<ProductCustomization dados={dados} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Product;
