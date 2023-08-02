import React from "react";
import styles from "./Button.module.scss";

function Button({ title }) {
  return (
    <button
      className={styles.Button_wrapper}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      Back to Top
    </button>
  );
}

export default Button;
