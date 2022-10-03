// @ts-nocheck
import React from "react";

// styles and assets
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const Download = () => {
  return (
    <div className={[styles.section, styles.bgWhite].join(" ")}>
      <div className={[styles.subSection, "flex-col text-center"].join(" ")}>
        <div>
          <h1 className={[styles.h1Text, styles.blackText].join(" ")}>
            Download the SOURCE Code
          </h1>
          <p className={[styles.pText, styles.blackText].join(" ")}>
            Get the full source code on Github
          </p>
        </div>

        <button
          onClick={() =>
            window.open(
              "https://github.com/Zokirkhon1002/firstReactNative",
              "_blank"
            )
          }
          className={[styles.btnPrimary].join(" ")}
        >
          Source Code
        </button>
        <div className={[styles.flexCenter].join(" ")}>
          <img
            src={assets.scene}
            alt="download_png"
            className={[styles.fullImg].join(" ")}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
