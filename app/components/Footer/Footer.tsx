import { Box, Button } from "@mui/material";
import { Facebook, Instagram, X } from "@mui/icons-material";

import { NavLink } from "react-router";
import { pages } from "~/constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  const socialMedia = [
    {
      href: "https://x.com/FinnHarpsFC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2",
      icon: (className?: string) => (
        <X className={className} fontSize="large" />
      ),
    },
    {
      href: "https://www.instagram.com/finnharpsfc1954/?hl=en",
      icon: (className?: string) => (
        <Instagram className={className} fontSize="large" />
      ),
    },
    {
      href: "https://www.facebook.com/finnharpsfc/",
      icon: (className?: string) => (
        <Facebook className={className} fontSize="large" />
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.slogan}>
            ready for your
            <br /> <span className={styles.hightlight}>first</span> training?
          </div>
          <div className={styles.links}>
            <Box
              sx={{ display: { xs: "none", sm: "block" }, alignSelf: "start" }}
            >
              {pages.map(({ name, href }, index) => (
                <a key={index} href={href}>
                  <Button
                    sx={{
                      display: "flex",
                      color: "#fff",
                      fontSize: "clamp(1.2rem, 2vw, 1rem)",
                      opacity: 0.7,
                    }}
                  >
                    {name}
                  </Button>
                </a>
              ))}
            </Box>
          </div>
          <div className={styles.media}>
            {socialMedia.map(({ href, icon }, index) => (
              <NavLink
                key={index}
                to={href}
                target="_blank"
                className={styles.socialMedia}
              >
                {icon(styles.icon)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
