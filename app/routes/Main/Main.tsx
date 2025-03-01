import "./globals.css";

import Banner from "~/components/Banner";
import Galary from "~/components/Galary";
import Hero from "~/components/Hero";
import JoinUs from "~/components/JoinUs";
import Team from "~/components/Team";
import styles from "./Main.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Banner />
        <Hero />
        <Team />
        <Galary />
        <JoinUs />
      </div>
    </div>
  );
}
