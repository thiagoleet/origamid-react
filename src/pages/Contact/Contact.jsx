import React from "react";
import Title from "../../components/Title";
import Head from "../../components/Head";
import styles from "./Contact.module.css";
import foto from "../../img/contato.jpg";

const Contact = () => {
  return (
    <>
      <Head title="Contato" descriptin="Fale Conosco" />
      <section className={[styles.contato, "animeLeft"].join(" ")}>
        <img src={foto} alt="Máquina de escrever" />
        <div>
          <Title>Entre em contato</Title>
          <ul className={styles.dados}>
            <li>email@teste.com</li>
            <li>11 912345678</li>
            <li>P. Sherman, 42, Wallaby Way, Sydney</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
