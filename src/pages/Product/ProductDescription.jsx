import React from "react";
import styled from "styled-components";
import Slide from "../../components/Slide/Slide";

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

const ProductDescription = ({ dados }) => {
  return (
    <>
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
