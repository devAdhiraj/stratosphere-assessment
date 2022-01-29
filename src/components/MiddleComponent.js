import React from 'react';
import {ReactComponent as GreenIcon } from '../assets/green-icon.svg';
import {ReactComponent as YellowIcon } from '../assets/yellow-icon.svg';
import {ReactComponent as BlueIcon } from '../assets/blue-icon.svg';
import {ReactComponent as OrangeIcon } from '../assets/orange-icon.svg';
import {ReactComponent as PurpleIcon } from '../assets/purple-icon.svg';
import {ReactComponent as RedIcon } from '../assets/red-icon.svg';
import styles from "./MiddleComponent.module.css";

const MiddleComponent = ({data}) => {
    return (
        <section className={styles.componentWrapper}>
            <div className={styles.container}>
                <div className={styles.elemWrapper}>
                    <BlueIcon />
                    <p>
                        {data.blueText}
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <OrangeIcon />
                    <p>
                        {data.orangeText}
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <GreenIcon />
                    <p>
                        {data.greenText}
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <PurpleIcon />
                    <p>
                        {data.purpleText}
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <YellowIcon />
                    <p>
                        {data.yellowText}
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <RedIcon />
                    <p>
                        {data.redText}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MiddleComponent;