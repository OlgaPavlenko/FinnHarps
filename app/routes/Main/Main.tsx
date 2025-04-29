import "./globals.css";

import Banner from "~/components/Banner";
import Footer from "~/components/Footer";
import Galary from "~/components/Galary";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import JoinUs from "~/components/JoinUs";
import Team from "~/components/Team";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Header />
        <Banner />
        <Hero />
        <Team />
        <Galary />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}
