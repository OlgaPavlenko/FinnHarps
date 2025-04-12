import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { pages } from "~/constants";

const theme = createTheme({
  // typography: {
  //   fontFamily: saira.style.fontFamily,
  // },
});

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = () => (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <NavLink to="/">
            <img src="/svg/logo.svg" alt="header" width={100} height={100} />
          </NavLink>
        </Typography>
        <Divider />
        <List>
          {pages.map(({ name, href }, index) => (
            <NavLink key={index} to={href}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={name}></ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              position: "static",
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to={"/"}>
                  <img
                    src="/svg/logo.svg"
                    alt="header"
                    width={150}
                    height={150}
                  />
                </NavLink>
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  alignSelf: "start",
                }}
              >
                {pages.map(({ name, href }, index) => (
                  <NavLink key={index} to={href}>
                    <Button
                      sx={{
                        color: "#fff",
                        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                        opacity: 0.9,
                      }}
                    >
                      {name}
                    </Button>
                  </NavLink>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer()}
            </Drawer>
          </nav>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
