import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, nome, fotos, onSelect }) => {
  function handleClick() {
    onSelect({ id, nome, fotos });
  }

  return (
    <Link to={`/produto/${id}`} key={id} onClick={handleClick}>
      <h4 style={{ margin: "0.5rem 0" }}>{nome}</h4>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </Link>
  );
};

export default ProductItem;
