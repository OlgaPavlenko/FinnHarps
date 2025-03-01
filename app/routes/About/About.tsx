import { principals } from "~/constants";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1>Our Academy’s 3 Core Principles</h1>
        <p>
          At our academy, we are dedicated to fostering the next generation of
          footballers both on and off the pitch. Our philosophy is built upon
          three key principles that guide everything we do:{" "}
          <span className={styles.hightlight}>
            Identify, Develop, and Support
          </span>
          .
        </p>

        {principals.map(({ name, description, list }, index) => (
          <div key={index}>
            <h2>{name}</h2>
            <h3>{description}</h3>
            {list.map((item, index) => (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
