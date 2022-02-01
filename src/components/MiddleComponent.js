import React from "react";
// import { ReactComponent as GreenIcon } from "../assets/green-icon.svg";
// import { ReactComponent as YellowIcon } from "../assets/yellow-icon.svg";
// import { ReactComponent as BlueIcon } from "../assets/blue-icon.svg";
// import { ReactComponent as OrangeIcon } from "../assets/orange-icon.svg";
// import { ReactComponent as PurpleIcon } from "../assets/purple-icon.svg";
// import { ReactComponent as RedIcon } from "../assets/red-icon.svg";
import { ReactComponent as GlobalIcon } from "../assets/global-icon.svg";
import styles from "./MiddleComponent.module.css";

const MiddleComponent = ({ data }) => {
  function getColorClass(color) {
    switch (color) {
      case "blue":
        return styles.blue;
      // Do rest of colors here
      default:
        break;
    }
  }
  return (
    <section className={styles.componentWrapper}>
      <div className={styles.container}>
        {/* Mapping through an array keeps code cleaner/more reusable. Allows you to add/remove items just by changing the JSON structure. This is a good practice to pick up. This is a DRY approach, do not repeat yourself. Make code reusable as much as posssible. */}
        {data.textItems.map((item) => (
          <div key={item.color} className={styles.elemWrapper}>
            <div className={getColorClass(item.color)}>
              {/*
              Here I am importing one hexagon and using CSS to change the BG color, rather than importing multiple hexagons.
              I would then import the symbols within the hexagon dynamically based on the JSON.
               */}
              <GlobalIcon />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
        {/* By mapping over content look how much HTML you can save. And then if you need to make changes you just change the one div above or the JSON file itself. No need to change 6 divs each time */}
        {/* <div className={styles.elemWrapper}>
          <BlueIcon />
          <p>{data.blueText}</p>
        </div>
        <div className={styles.elemWrapper}>
          <OrangeIcon />
          <p>{data.orangeText}</p>
        </div>
        <div className={styles.elemWrapper}>
          <GreenIcon />
          <p>{data.greenText}</p>
        </div>
        <div className={styles.elemWrapper}>
          <PurpleIcon />
          <p>{data.purpleText}</p>
        </div>
        <div className={styles.elemWrapper}>
          <YellowIcon />
          <p>{data.yellowText}</p>
        </div>
        <div className={styles.elemWrapper}>
          <RedIcon />
          <p>{data.redText}</p>
        </div> */}
      </div>
    </section>
  );
};

export default MiddleComponent;
