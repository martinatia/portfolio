import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>Hola! Soy Martin Atia</h1>
        <p className={styles.description}>
        ¡Hola! Soy Martin Atia, un apasionado la programación!
        Mi enfoque se centra en crear soluciones innovadoras y funcionales que satisfagan las necesidades del usuario. Me apasiona trabajar en equipo y colaborar con otros profesionales para alcanzar resultados excepcionales.
        </p>
        <a href="mailto:atia.walter.martin@gmail.com" className={styles.contactBtn}>Contactame</a>
      </div>
      <img
        src={getImageUrl("hero/martinAtia_.png")}
        alt="imagen de Martin Atia"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
