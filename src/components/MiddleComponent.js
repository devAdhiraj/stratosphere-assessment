import React from 'react';
import {ReactComponent as GreenIcon } from '../assets/green-icon.svg';
import {ReactComponent as YellowIcon } from '../assets/yellow-icon.svg';
import {ReactComponent as BlueIcon } from '../assets/blue-icon.svg';
import {ReactComponent as OrangeIcon } from '../assets/orange-icon.svg';
import {ReactComponent as PurpleIcon } from '../assets/purple-icon.svg';
import {ReactComponent as RedIcon } from '../assets/red-icon.svg';
import styles from "./MiddleComponent.module.css";

const MiddleComponent = () => {
    return (
        <section className={styles.componentWrapper}>
            <div className={styles.container}>
                <div className={styles.elemWrapper}>
                    <BlueIcon />
                    <p>
                        Growing top line revenue and cash flows.
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <OrangeIcon />
                    <p>
                        Recognizable moat that is durable and we suspect will be intact for a long time.
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <GreenIcon />
                    <p>
                        Underpinned by secular growth trends.
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <PurpleIcon />
                    <p>
                        Has pricing power. Not commoditized product or service.
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <YellowIcon />
                    <p>
                        Growing top line revenue and cash flows.
                    </p>
                </div>
                <div className={styles.elemWrapper}>
                    <RedIcon />
                    <p>
                        Management aligned with long term performance and execution.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MiddleComponent;