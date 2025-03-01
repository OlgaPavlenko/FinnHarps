import Button from '../Button';
import { NavLink } from 'react-router';
import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <p className={styles.slogan}>
            Never let the <span className={styles.accent}>fear</span> of losing
            keep you from <span className={styles.accent}>winning</span> the
            game
          </p>
          <NavLink to="#anchor_join">
            <Button text="Register now" color="white" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
