import React from "react";

// styles import
import styles from "./Button.module.css";

const Button = ({ title, variant, onClick, type }) => {
  const buttonClass =
    variant === "primary"
      ? styles.primaryButton
      : variant === "outlined"
      ? styles.outlinedButton
      : variant === "cancel"
      ? styles.cancelButton
      : styles.secondaryButton;

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
