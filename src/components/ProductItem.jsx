import React from "react";

const ProductItem = ({ id, nome, fotos, onSelect }) => {
  function handleClick() {
    onSelect({ id, nome, fotos });
  }

  return (
    <div key={id} className="grid-item" onClick={handleClick}>
      <h4 style={{ textAlign: "center" }}>{nome}</h4>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  );
};

export default ProductItem;
