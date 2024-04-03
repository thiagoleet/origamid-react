import React from "react";

import Title from "../components/Title";
import Slide from "../components/Slide/Slide";

import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductGallery = styled.div`
  width: 60%;
`;

const ProductInfo = styled.div`
  width: 40%;
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
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
          <ProductPage>
            <ProductGallery>
              {dados.fotos && (
                <Slide productId={dados.id} slides={dados.fotos} />
              )}
            </ProductGallery>
            <ProductInfo>
              <p>{dados.descricao}</p>
              <ProductPrice>R$ {dados.preco}</ProductPrice>
            </ProductInfo>
          </ProductPage>
        </>
      )}
    </div>
  );
};

export default Product;
