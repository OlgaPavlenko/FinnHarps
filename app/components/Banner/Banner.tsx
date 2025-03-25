import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrap}>
        <div className={styles.pic_wrap}>
          <img
            src="/banner_player.png"
            alt="banner image of player"
            className={styles.pic}
          />
        </div>
        <div className={styles.description}>
          <h1 className={styles.header_text}>
            founding of the football academy
          </h1>
          <div className={styles.article}>
            <p className={styles.article_p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type{" "}
            </p>
            <p>
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
