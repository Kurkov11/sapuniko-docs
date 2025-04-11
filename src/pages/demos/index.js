import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout title="Demos" description="Demos Page">
      <h1 className={`${styles.sapunikoHeader} hero__title`}>Demo Websites</h1>
      <div className={styles.sapunikoDemosContainer}>
        <div class={styles.portfolioSingleCard}>
          <a
            href="https://sapuniko.com/demos/classic-demo"
            draggable="false"
            target="_blank"
          >
            <div class={styles.portfolioSingleCardImageContainer}>
              <img
                src="https://sapuniko.com/img/screenshot.png"
                draggable="false"
                alt=""
                class={styles.portfolioSingleCardImage}
              />
            </div>
            <p class={styles.portfolioSingleCardTitle}>Classic Portfolio</p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
