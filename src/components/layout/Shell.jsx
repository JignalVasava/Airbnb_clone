import React from "react";
import styles from "./Shell.module.css";
import Header from "../common/Header";
import Footer from "../common/Footer";





export const Shell = ({ children }) => {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>{children}</div>
      </main>
      <Footer />
    </div>);

};

export default Shell;