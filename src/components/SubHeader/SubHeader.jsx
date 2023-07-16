import { useState } from "react";
import styles from "./SubHeader.module.scss";
import HistoryPage from "../HistoryPage/HistoryPage";

function SubHeader() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.SubHeader__wrapper}>
      <div className={styles.SubHeader__container}>
        <div className={styles.SubHeader__all__container}>
          <i class={`bi bi-list ${styles.SubHeader__all__icon}`} />
          All
        </div>
        <div>Today's Deals</div>
        <div>Buy Again</div>
        <div>AMAN's Amazon.com</div>
        <div>Customer Service</div>
        <div>Gift Cards</div>
        <div
          className={styles.SubHeader__browsing__history__container}
          onMouseEnter={() => {
            setToggle(true);
          }}
        >
          Browsing History
          <i
            class={`bi bi-caret-down-fill ${styles.SubHeader__browsing__history__icon}`}
          ></i>
        </div>
        <div>Registry</div>
        <div>Sell</div>
      </div>
      {toggle ? <HistoryPage /> : null}
    </div>
  );
}

export default SubHeader;
