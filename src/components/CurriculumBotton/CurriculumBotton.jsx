import React from "react";
import styles from "./CurriculumBotton.module.css";
import { getImageUrl } from "../../utils";
export const CurriculumBotton = () => {
  return (
    <div className={styles.container}>
        <a href="https://drive.google.com/drive/folders/1BLWETPj4-qCmYc8erx8ZNbtZkWQ0iihb" target="new" className={styles.btn}>Ver Curriculum Completo</a>
    </div>
  );
};
