import React from "react";
import styles from "./Team.module.scss";
import { team } from "~/constants";

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <ul className={styles.wrap}>
          {team.map(({ role, name, image }) => (
            <li key={name} className={styles.card}>
              <div className={styles.picWrap}>
                <img
                  src={image}
                  alt={""}
                  width={400}
                  height={400}
                  className={styles.pic}
                />
              </div>
              <div className={styles.description}>
                <h1>{name}</h1>
                <p className={styles.role}>{role}</p>
                <p className={styles.coachDescription}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo eligendi ea nostrum tempore aut, nam quibusdam.
                  Asperiores dolor, consequatur animi beatae aliquam aut facere
                  praesentium commodi modi ducimus nihil dignissimos?
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
