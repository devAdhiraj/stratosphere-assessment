import React from 'react';
import styles from './TopComponent.module.css';

const TopComponent = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Investment Strategy
            </h1>
            <p className={styles.description}>
            At Stratosphere we are looking to own the highest quality businesses available with consistently growing cash flows.
            <br /><br />
            There are several factors in what makes a great business to own for the long-term. We must be able to prove that the company has the following characteristics:
            </p>
        </section>

    )
}

export default TopComponent;