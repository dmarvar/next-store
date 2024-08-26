import React from "react";
import styles from "./Hero.module.sass";

type Props = {};

export const Hero = (props: Props) => {
  console.log(styles);

  return (
    <section className={styles.Hero}>
      <h1>Future world</h1>
      <h2>Empowering Your Tomorrow, Today !</h2>
    </section>
  );
};
