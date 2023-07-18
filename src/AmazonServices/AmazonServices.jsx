import React from "react";
import styles from "./AmazonServices.module.scss";
import { amazonServicesData } from "../Data/amazonServicesData";

function AmazonServices() {
  return (
    <div className={styles.AmazonServices__wrapper}>
      {amazonServicesData?.map((item) => {
        return (
          <div className={styles.AmazonServices__container}>
            <div className={styles.AmazonServices__title}>{item?.title}</div>
            <div className={styles.AmazonServices__desc}>{item?.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AmazonServices;
