// @ts-nocheck
import React from "react";

// styles and assets
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={[
        "min-h-screen",
        styles.section,
        reverse ? styles.bgWhite : styles.bgPrimary,
        banner,
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center w-11/12 sm:w-full minmd:2-3/4",
          reverse ? styles.boxReverseClass : styles.boxClass,
        ].join(" ")}
      >
        <div
          className={[
            styles.descDiv,
            reverse ? "fadeRightMini" : "fadeLeftMini",
            reverse ? styles.textRight : styles.textLeft,
          ].join(" ")}
        >
          <h1
            className={[
              styles.h1Text,
              reverse ? styles.blackText : styles.whiteText,
            ].join(" ")}
          >
            {title}
          </h1>
          <p
            className={[
              styles.descriptionText,
              reverse ? styles.blackText : styles.whiteText,
            ].join(" ")}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@zokirkhan1002/myFirstApp?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className={["flex-1", styles.flexCenter, "p-8 sm:px-0"].join(" ")}>
          <img
            src={mockupImg}
            alt="mocup"
            className={[
              styles.sectionImg,
              reverse ? "fadeRightMini" : "fadeLeftMini",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
