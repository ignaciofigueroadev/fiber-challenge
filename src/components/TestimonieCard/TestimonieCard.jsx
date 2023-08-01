import React from "react";

// Component imports
import Button from "../Button/Button";
import Image from "../Image/Image";

// Styles import
import styles from "./TestimonieCard.module.css";

const TestimonieCard = ({ avatar, name, revenue, testimonie, buttonTitle }) => {
  return (
    <div className={styles.testimonie}>
      <div className={styles.testimonieProfile}>
        <Image src={avatar} className={styles.testimonieAvatar} />
        <div>
          <h4 className={styles.testimonieName}>{name}</h4>
          <p>{revenue}</p>
        </div>
      </div>
      <div>
        <p>{testimonie}</p>
      </div>
      <div className={styles.testimonieButton}>
        <Button title={`View ${buttonTitle} Portfolio`} variant={"outlined"} />
      </div>
    </div>
  );
};

export default TestimonieCard;
