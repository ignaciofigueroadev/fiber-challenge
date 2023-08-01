import React from "react";

// Component imports
import Button from "../Button/Button";

// Styles import
import styles from "./Modal.module.css";

// Image import
import SignUpImage from "/assets/sign-up-image.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalFirstColumn}>
          <div className={styles.modalTitles}>
            <h2 className={styles.modalTitle}>Fiber</h2>
            <p className={styles.modalSubtitle}>Create your Fiber account</p>
          </div>
          <form className={styles.modalForm}>
            <label>
              Your name
              <input
                type="text"
                placeholder="John Doe"
                className={styles.modalImput}
                required
                autoFocus
              />
            </label>
            <label>
              E-mail
              <input
                type="email"
                placeholder="john@example.com"
                className={styles.modalImput}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                className={styles.modalImput}
                required
              />
            </label>
            <div className={styles.modalConditions}>
              <p>
                By creating an account on Fiber, you agree to the{" "}
                <a href="#">Terms & Conditions</a>
              </p>
            </div>
          </form>
          <div className={styles.modalButtons}>
            <Button title="Create Account" />
            <Button title="Cancel" variant="cancel" onClick={onClose} />
          </div>
        </div>
        <div className={styles.modalSecondColumn}>
          <div className={styles.modalImage}>
            <img src={SignUpImage} alt="asdsads" />
          </div>
          <div className={styles.modalSecondColumnTitles}>
            <h3 className={styles.modalSecondColumnTitle}>
              Unparalleled Templates
            </h3>
            <p className={styles.modalSecondColumnSubtitle}>
              Crafted by team of proffesional designers, our templates are
              eunparalled in the market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
