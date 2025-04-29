import { useEffect, useState } from "react";

import styles from "./Players.module.scss";
import { useNavigate } from "react-router";

const Players = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/admin");
  };

  // Предотвращение прокрутки страницы при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>PLAYERS TABLE</h1>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.main}></div>
        </div>
      </div>
    </div>
  );
};

export default Players;
