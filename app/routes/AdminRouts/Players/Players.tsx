import { useEffect, useState } from "react";

import PlayerCard from "../Player/PlayerCard";
import styles from "./Players.module.scss";
import { useNavigate } from "react-router";

const Players = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/admin");
  };

  return (
    <div className={styles.players}>
      <div className={styles.modalHeader}>
        <h1>PLAYERS TABLE</h1>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.main}>
          <PlayerCard />
        </div>
      </div>
    </div>
  );
};

export default Players;
