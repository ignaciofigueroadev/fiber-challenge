import React from "react";

// Component imports
import Image from "../Image/Image";

// Styles import
import styles from "./Feature.module.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.feature}>
      <Image src={icon} alt="Icon" className={styles.featureIcon} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
