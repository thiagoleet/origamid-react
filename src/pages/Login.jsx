import React from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Formulário enviado!");

    navigate("/");
  }

  return (
    <div className="content">
      <Title>Login</Title>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Entrar</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
