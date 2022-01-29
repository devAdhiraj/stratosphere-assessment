import React from 'react';
import styles from "./BottomComponent.module.css";

const BottomComponent = ({data}) => {
    return (
        <>
        <div className={styles.container}>
            <figure className={styles.fig}>
                <img src="/stock-photo.png" alt="Happy People Stock Photo" />
                <figcaption className={styles.caption}>
                    <h2>
                        {data.figTitle}
                    </h2>
                    <p>
                        {data.figDescript}
                    </p>
                </figcaption>
            </figure>
        </div>
        <div className={styles.space}></div>
        </>
    )
}

export default BottomComponent;