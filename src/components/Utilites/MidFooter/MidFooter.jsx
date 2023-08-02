import React from "react";
import styles from "./MidFooter.module.scss";
import amazonLogo from "../../../assests/amazonIcon.png";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

function MidFooter() {
  return (
    <div className={styles.MidFooter__wrapper}>
      <div className={styles.MidFooter__container}>
        <div className={styles.MidFooter__amazon__icon__container}>
          <img src={amazonLogo} alt="amazonLogo" width="100px" />
        </div>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
        >
          English
        </TextField>
      </div>
    </div>
  );
}

export default MidFooter;
