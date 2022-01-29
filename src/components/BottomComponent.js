import React from 'react';
import styles from "./BottomComponent.module.css";

const BottomComponent = () => {
    return (<>
        <div className={styles.container}>
            <figure className={styles.fig}>
                <img src="/stock-photo.png" alt="Happy People Stock Photo" />
                <figcaption className={styles.caption}>
                    <h2>
                        A Tagline About The Team
                    </h2>
                    <p>
                        An engineer by trade, Braden began building quant models for publicly traded stocks in engineering school. Stratosphere Investing was originally his blog and passion project to share investing ideas, models and equity research. Through the years, he found there was no reliable low-cost software powered analytics and research platform for managing his own investment portfolio.
                    </p>
                </figcaption>
            </figure>
        </div>
            <div className={styles.space}>
                
            </div></>
    )
}

export default BottomComponent;