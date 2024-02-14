import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import styles from "./loader.module.css";

/**
 * 
 * @param {*} param0 
 * @returns loading page
 */
const Loader = () => {
  return (
    <div
      className={`${styles.loader_wrapper} flex-column justify-center align-center`}
    >
      <CirclesWithBar
        height="50"
        width="50"
        color="#4fa94d"
        visible={true}
        outerCircleColor="var(--accent-green)"
        innerCircleColor="var(--accent-green)"
        barColor="var(--accent-green)"
        ariaLabel="circles-with-bar-loading"
      />
      <p className={`${styles.loader_text}`}>HangTight: your graph is Loading</p>
    </div>
  );
};

export default Loader;