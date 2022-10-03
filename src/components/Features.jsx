import React from "react";

// styles and assets
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={[styles.featureCard].join(" ")}>
    <img
      src={iconUrl}
      alt={iconText}
      className={[styles.featureImg].join(" ")}
    />
    <p className={[styles.featureText].join(" ")}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={[styles.section, styles.bgPrimary, "banner03"].join(" ")}>
      <div className={[styles.subSection, "flex-col text-center"].join(" ")}>
        <div className={[].join(" ")}>
          <h1 className={[styles.h1Text, styles.whiteText].join(" ")}>
            Technologies
          </h1>
          <p className={[styles.pText, styles.whiteText].join(" ")}>
            ProNef has been developed using a cross-platform technology, React
            Native
          </p>
        </div>
        <div className={[styles.flexWrap].join(" ")}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
