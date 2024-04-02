import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import useForm from "../hooks/useForm";

const options = ["Notebook", "Smartphone", "Tablet"];

const Form = () => {
  const [product, setProduct] = React.useState("");
  const [color, setColor] = React.useState("Azul");
  const [languages, setLanguages] = React.useState([]);
  const [terms, setTerms] = React.useState([]);
  const name = useForm("name");
  const email = useForm("email");
  const zipcode = useForm("zipcode");
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (zipcode.validate(zipcode.value)) {
      return;
    }

    console.log("Enviou");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="Nome" id="name" {...name} />

      <Input type="email" label="Email" id="email" required {...email} />

      <Input
        type="text"
        id="cep"
        placeholder="00000-000"
        label="CEP"
        {...zipcode}
      />

      <p style={{ color: "red" }}>{error}</p>

      <Select options={options} value={product} setValue={setProduct} />

      <p>
        <Radio
          options={["Azul", "Vermelho"]}
          value={color}
          setValue={setColor}
        />
      </p>

      <p>
        <Checkbox
          options={["Javascript", "PHP", "Ruby"]}
          value={languages}
          setValue={setLanguages}
        />
      </p>

      <p>
        <Checkbox
          options={["Li e aceito os termos."]}
          value={terms}
          setValue={setTerms}
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
