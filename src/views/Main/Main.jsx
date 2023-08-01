import React from "react";

// Component imports
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Image from "../../components/Image/Image";
import TestimonieCard from "../../components/TestimonieCard/TestimonieCard";

// Styles import
import styles from "./Main.module.css";

// Data and image import
import data from "../../json/data.json";
import PageImage from "/assets/page-image.png";

const Main = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.mainTitle}>Why Fiber?</h2>
      <p className={styles.mainDescription}>
        A good portfolio means a good employability.
      </p>
      <div className={styles.mainFeatures}>
        {data.features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className={styles.mainPromotion}>
        <div className={styles.mainPromotionInfo}>
          <h3 className={styles.mainPromotionTitle}>
            Diversify your portfolio.
          </h3>
          <p className={styles.mainPromotionDescription}>
            Create an even more impressive portfolio by creating case studies
            for your projects. Simply follow out step-by-step guide
          </p>
          <div className={styles.mainPromotionButton}>
            <Button title="Start Free Trial" variant="primary" />
          </div>
        </div>
        <div className={styles.mainPromotionImage}>
          <Image src={PageImage} />
        </div>
      </div>
      <div className={styles.mainTestimonie}>
        {data.testimonies.map((testimonie, index) => (
          <TestimonieCard
            key={index}
            avatar={testimonie.avatar}
            name={testimonie.name}
            revenue={testimonie.revenue}
            testimonie={testimonie.testimonie}
            buttonTitle={testimonie.buttonTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
