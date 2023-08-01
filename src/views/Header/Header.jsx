import React, { useState } from "react";

// Component imports
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import Modal from "../../components/Modal/Modal";

// Style import
import styles from "./Header.module.css";

// Icon import
import CloseMenu from "/assets/close-menu.svg";
import BurguerMenu from "/assets/hamburger-menu.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerLogo}>Fiber</h1>
      </div>

      <button onClick={handleMenu} className={styles.headerBurguer}>
        <Image src={BurguerMenu} alt="Open Menu" title="Open menu" />
      </button>

      <nav
        className={`${styles.headerNav} ${menu ? styles.headerNavActive : ""}`}
      >
        <div className={styles.headerClose}>
          <button onClick={handleMenu}>
            <Image
              src={CloseMenu}
              alt="Close menu"
              title="Close menu"
              className={styles.headerCloseIcon}
            />
          </button>
        </div>

        <ul className={styles.headerUl}>
          <li className={styles.headerItem}>
            <a href="#">Community</a>
          </li>
          <li className={styles.headerItem}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.headerItem}>
            <a href="#">Features</a>
          </li>
        </ul>
        <div className={styles.headerButtons}>
          <Button title="Log in" variant="primary" />
          <Button
            title="Sign up"
            variant="secondary"
            onClick={handleModalOpen}
          />
        </div>
      </nav>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </header>
  );
};

export default Header;
