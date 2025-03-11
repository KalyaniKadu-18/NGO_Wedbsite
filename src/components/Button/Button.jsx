import React from "react";
import styles from "./Button.module.css"; // Import CSS file

const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
