import React from "react";
import styles from "./TopComponent.module.css";

const TopComponent = ({ data }) => {
  const { title, descriptionArray } = data;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {descriptionArray.map((text, index) => (
        <p key={index} className={styles.description}>
          {text}
        </p>
      ))}
    </section>
  );
};

export default TopComponent;
