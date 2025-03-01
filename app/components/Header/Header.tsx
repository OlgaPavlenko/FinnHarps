import Navbar from "~/components/Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            train like
            <br /> a <span className={styles.textHightlite}>champ</span>
          </p>
        </div>
        <div className={styles.logo_text}>
          <span className={styles.logo_text_academy}>harps academy</span>
          <span>identify-develop-support</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
