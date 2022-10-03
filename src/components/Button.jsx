import React from "react";

// styles and assets
import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={[styles.btnBlack].join(" ")}
      onClick={() => window.open(link, "_blank")}
    >
      <img
        className={[styles.btnIcon].join(" ")}
        src={assetUrl}
        alt="expo_icon"
      />

      <div className="flex flex-col justify-start ml-4">
        <p className={[styles.btnText, "font-normal text-xs"].join(" ")}>View it on</p>
        <p className={[styles.btnText, "font-bold text-sm"].join(" ")}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
