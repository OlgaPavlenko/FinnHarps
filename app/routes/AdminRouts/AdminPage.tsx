import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ADMIN_MENU } from "~/constants";
import styles from "./AdminPage.module.scss";

const AdminPage = () => {
  return (
    <div className={styles.main}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {ADMIN_MENU.map((menuItem) => (
            <ListItem key={menuItem.option} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<menuItem.icon />}</ListItemIcon>
                <ListItemText
                  primary={menuItem.option}
                  className={styles.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider orientation="vertical" />
      </Box>
      ;<div className={styles.right}>Dashboard</div>
    </div>
  );
};

export default AdminPage;
