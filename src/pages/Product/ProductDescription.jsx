import React from "react";
import styled from "styled-components";
import Slide from "../../components/Slide/Slide";
import Head from "../../components/Head";

const ProductPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const ProductGallery = styled.div``;

const ProductInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;
`;

const ProductPrice = styled.span`
  padding: 0.5rem;
  background: #91fb5d;
  color: #017e01;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
`;

const ProductDescription = ({ dados }) => {
  return (
    <>
      <Head title={dados.nome} descriptin={dados.descricao} />

      <ProductPage>
        <ProductGallery>
          {dados.fotos && <Slide productId={dados.id} slides={dados.fotos} />}
        </ProductGallery>
        <ProductInfo>
          <p>{dados.descricao}</p>
          <ProductPrice>R$ {dados.preco}</ProductPrice>
        </ProductInfo>
      </ProductPage>
    </>
  );
};

export default ProductDescription;
