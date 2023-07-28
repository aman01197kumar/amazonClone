import React from "react";
import styles from "./AmazonBrief.module.scss";
import { amazonBriefData } from "../Data/amazonBriefData";

function AmazonBrief() {
  return (
    <div className={styles.AmazonBrief__wrapper}>
      {amazonBriefData?.map((item, i) => {
        return (
          <div className={styles.AmazonBrief__wrapper__container}>
            <div className={styles.AmazonBrief__heading} key={i}>
              {item?.title}
            </div>
            <div className={styles.AmazonBrief__subtitle__container}>
              {item?.sub_titles?.map((subtitle) => {
                return (
                  <div className={styles.AmazonBrief__subtitles}>
                    {subtitle}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AmazonBrief;
