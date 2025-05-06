import { Button, TextField } from "@mui/material";

import PlayerCard from "../Player/PlayerCard";
import SquadSelect from "../SquadSelect/SquadSelect";
import styles from "./Players.module.scss";
import { useNavigate } from "react-router";
import { useState } from "react";

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
          <div className={styles.workBar}>
            <Button variant="outlined">Add new player</Button>
            <TextField
              id="outlined-basic"
              label="Search by name"
              variant="outlined"
              size="small"
            />
            <SquadSelect /> <Button variant="outlined">Sort</Button>
          </div>
          <PlayerCard />
        </div>
      </div>
    </div>
  );
};

export default Players;
