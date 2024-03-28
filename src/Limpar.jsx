import React from "react";

import { GlobalContext } from "./GlobalContext";

const LimparDados = () => {
  const { limparDados } = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={limparDados}>Limpar Dados</button>
    </div>
  );
};

export default LimparDados;
