import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Work.module.css";
import history from "../../data/history.json";
export const Jobs = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experiencia Laboral</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo}`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
