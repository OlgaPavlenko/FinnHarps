import UserCard from "../UserCard/UserCard";
import styles from "./Users.module.scss";
import { useNavigate } from "react-router";
import { useState } from "react";

const Users = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/admin");
  };

  return (
    <div className={styles.users}>
      <div className={styles.modalHeader}>
        <h1>USERS TABLE</h1>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.main}>
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Users;
