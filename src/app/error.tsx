"use client";
import React from "react";
import styles from "app/sass/global-error.module.sass";
import Image from "next/image";

type Props = {};

const GlobalError = ({ reset }: ErrorPageProps) => {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Something happened</h1>
      <Image src="/images/error.png" alt="Error" width={500} height={500} />
      <p className={styles.Error__message}>No te preocupes, intenta de nuevo</p>
      <button onClick={reset} className={styles.Error__button}>
        Try again
      </button>
    </main>
  );
};

export default GlobalError;
