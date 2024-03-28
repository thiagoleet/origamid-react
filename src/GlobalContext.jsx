import React from "react";
import useFetch from "./hooks/useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([]);
  const { request, data } = useFetch();

  const obterDados = React.useCallback(async () => {
    const url = "https://ranekapi.origamid.dev/json/api/produto";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => setDados(json));

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

  function limparDados() {
    setDados([]);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, obterDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
