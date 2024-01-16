import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import {i18next} from '../../../src/translate/i18n'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{i18next.t('Hero.MeHero')}</h1>
        <p className={styles.description}>
        {i18next.t('Hero.describe')}
        </p>
        <a href="mailto:luansouzadealmeidadev@gmail.com" className={styles.contactBtn}>
        {i18next.t('buttons.contact')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/prog.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
