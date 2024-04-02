import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RadioField from "./Form/RadioField";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [resultado, setResultado] = React.useState(null);

  const [slide, setSlide] = React.useState(0);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function next() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  function previous() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ resposta, id }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  return (
    <>
      <Header />
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          {perguntas.map(({ pergunta, options, id }, index) => (
            <RadioField
              active={slide === index}
              key={id}
              pergunta={pergunta}
              options={options}
              id={id}
              value={respostas[id]}
              onChange={handleChange}
            />
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {slide < perguntas.length && (
              <>
                <button disabled={slide === 0} onClick={previous}>
                  Anterior
                </button>
                <button onClick={next}>Próxima</button>
              </>
            )}

            {resultado && <p>{resultado}</p>}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default App;
