import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () =>{
    return <footer className={styles.container} id="contact">
        <div className={styles.title}>
        <h3>Contacto</h3>
        <p >Puedes comunicarte conmigo a través de: </p>
        </div>
        <div className={styles.socialMedia}>
            <ul className={styles.list}>
                <li className={styles.mediaItem}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Icono de email" />
                    <a href="mailto:atia.walter.martin@gmail.com">atia.walter.martin@gmail.com</a>
                </li>
                <li className={styles.mediaItem}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Icono de GitHub" />
                    <a href="https://github.com/martinatia" target="new">github.com/martinatia</a>
                </li>
                <li className={styles.mediaItem}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Icono de LinkedIn" />
                    <a href="https://www.linkedin.com/in/martin-atia/" target="new">linkedin.com/in/martin-atia</a>
                </li>
            </ul>
        </div>
    </footer>
}