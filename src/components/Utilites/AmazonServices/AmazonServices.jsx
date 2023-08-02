import React from "react";
import styles from "./AmazonServices.module.scss";
import { amazonServicesData } from "../../Data/amazonServicesData";

function AmazonServices() {
  return (
    <div className={styles.AmazonServices__wrapper}>
      <div className={styles.AmazonServices__wrapper__container}>
        {amazonServicesData?.map((item, index) => (
          <div key={index} className={styles.AmazonServices__container}>
            <div className={styles.AmazonServices__title}>{item?.title}</div>
            <div className={styles.AmazonServices__desc}>{item?.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.AmazonServices__footer}>
        <div className={styles.AmazonServices__footer__flex__container}>
          <div
            className={styles.AmazonServices__footer__flex__container__content}
          >
            Conditions of Use & Sale
          </div>
          <div
            className={styles.AmazonServices__footer__flex__container__content}
          >
            Privacy Notice
          </div>
          <div
            className={styles.AmazonServices__footer__flex__container__content}
          >
            Interest based Ads
          </div>
        </div>
        <div className={styles.AmazonServices__footer__copyright}>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
}

export default AmazonServices;
