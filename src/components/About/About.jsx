import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerca de</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/programming.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <h2>Educación Formal</h2>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/building-columns-solid.svg")}
              alt="Educación superior"
              color="#fff"
            />
            <div className={styles.aboutItemText}>
              <h3>Educación Superior</h3>
              <h2>
                Carreras: Lic. en Sistemas de Información, Prof. de Informática,
                Programador Universitario en Informática
              </h2>
              <p>
                Finalizando mis estudios en la Facultad de Ciencias Exactas y
                Tecnologías de la Universidad Nacional de Santiago del Estero
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/building-columns-solid.svg")}
              alt="Colegio secundario"
            />
            <div className={styles.aboutItemText}>
              <h3>Colegio Secundario</h3>
              <p>Escuela Normal Superior Dr. José Benjamín Gorostiaga</p>
              <p>La Banda - Santiago del Estero</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.contentCopy}>
      
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/digitalhouseschool_logo.jpeg")} alt="Digital House logo" color="#fff"/>
            <div className={styles.aboutItemText}>
            <h2>Digital House</h2>
            <h3>Programación Web Full Stack</h3>
            <p>MySQL, Express, React, Node.JS</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/udemy-logo.png")} alt="Udemy Logo" color="#fff"/>
            <div className={styles.aboutItemText}>
            <h2>Udemy</h2>
            <h3>Tu guía completa para IOS y Android</h3>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/udemy-logo.png")} alt="Udemy Logo" color="#fff"/>
            <div className={styles.aboutItemText}>
            <h2>Udemy</h2>
            <h3>Scrum Certification Course 2024 (Based on Scrum Guide 2020)</h3>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/udemy-logo.png")} alt="Udemy Logo" color="#fff"/>
            <div className={styles.aboutItemText}>
            <h2>Udemy</h2>
            <h3> HTML, JavaScript, & Bootstrap - Certification Course</h3>
            </div>
          </li>
          
        </ul>
        <h2>Cursos Online</h2>
      </div>
    </section>
  );
};
