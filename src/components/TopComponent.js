import React from 'react';
import styles from './TopComponent.module.css';

const TopComponent = ({data}) => {
    const {title, description} = data;
    const topDescript = description.split(".")[0] + ".";
    const botDescript = description.split(".")[1] + ".";
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                {data.title}
            </h1>
            <p className={styles.description}>
                {topDescript}
            <br /><br />
                {botDescript}
            </p>
        </section>

    )
}

export default TopComponent;