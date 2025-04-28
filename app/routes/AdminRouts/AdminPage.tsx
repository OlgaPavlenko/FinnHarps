import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { ADMIN_MENU } from "~/constants";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./AdminPage.module.scss";
import { useNavigate } from "react-router";

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // Обработчик закрытия модального окна
  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
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
          <h1>ADMIN DASHBOARD</h1>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.main}>
            <div className={styles.left}>
              <List>
                {ADMIN_MENU.map(({ option, icon }) => (
                  <ListItem key={option} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
                      <ListItemText primary={option} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider orientation="vertical" />
            </div>
            {/* <Divider orientation="vertical" /> */}
            <div className={styles.right}>
              <p className={styles.text}>Welcome to the main admin page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
