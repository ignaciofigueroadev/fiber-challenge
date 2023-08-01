import React from "react";

// Component imports
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";

// Styles import
import styles from "./Hero.module.css";

// Icon imports
import CheckMark from "/assets/checkmark.svg";
import Illustration from "/assets/hero-illustration.png";
import RateStars from "/assets/star.svg";

const Hero = () => {
  const numStars = 5;
  const starsArray = Array.from({ length: numStars });

  return (
    <section className={styles.heroGrid}>
      <Image
        src={Illustration}
        alt="Illustration"
        className={styles.heroIllustration}
      />
      <div className={styles.hero}>
        <div className={styles.heroRatingStars}>
          {starsArray.map((_, index) => (
            <Image
              key={index}
              src={RateStars}
              alt="Stars"
              className={styles.heroStarIcons}
            />
          ))}
          <p className={styles.heroRatingText}>Rated 4.8/5 (243 reviews)</p>
        </div>
        <h2 className={styles.heroTitle}>Create your portfolio in minutes.</h2>
        <p className={styles.heroDescription}>
          With faiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <div className={styles.heroButtons}>
          <Button title="Start Free Trial" variant="secondary" />
          <a href="#" className={styles.heroViewExamples}>
            View examples
          </a>
        </div>
        <div className={styles.heroInfo}>
          <div className={styles.heroInfoItem}>
            <Image
              src={CheckMark}
              alt="Checkmark icon"
              className={styles.heroCheckIcon}
            />
            <p>No Credit Card Required</p>
          </div>
          <div className={styles.heroInfoItem}>
            <Image
              src={CheckMark}
              alt="Checkmark icon"
              className={styles.heroCheckIcon}
            />
            <p>10 Free Templates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
