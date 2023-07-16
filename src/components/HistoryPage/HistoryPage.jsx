import React from "react";
import styles from "./HistoryPage.module.scss";

function HistoryPage() {
  return (
    <div className={styles.HistoryPage__wrapper}>
      <div className={styles.HistoryPage__header}>
        Your Browsing History
        <span className={styles.HistoryPage__header__span}>View and Edit</span>
      </div>
      <div className={styles.HistoryPage__main_container}>
        <div className={styles.HistoryPage__main_content}>
          Your shopping history is empty
        </div>
        <div className={styles.HistoryPage__main_sub_content}>
          Check back here to see items you shop for on any device
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
