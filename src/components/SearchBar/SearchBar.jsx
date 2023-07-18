import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import amazonImage from "../../assests/amazonIcon.png";
import ManageProfile from "../ManageProfile/ManageProfile";

function SearchBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.SearchBar__wrapper}>
      <div className={styles.SearchBar__amazon__icon}>
        <img src={amazonImage} alt="amazonImage" />
      </div>
      <div className={styles.SearchBar__delivery__country__wrapper}>
        Deliver to&nbsp;
        <div className={styles.SearchBar__delivery__country__container}>
          <i class="bi bi-geo-alt"></i>
          <span className={styles.SearchBar__country}>India</span>
        </div>
      </div>
      <div className={styles.Searchbar__container__wrapper}>
        <div className={styles.SearchBar__container}>
          <select className={styles.SearchBar__dropdown__btn}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <input
            type="text"
            value="Search Amazon"
            className={styles.SearchBar__input__field}
          />
          <div className={styles.SearchBar__search__btn}>
            <i className={`bi bi-search ${styles.SearchBar__SearchBtn}`} />
          </div>
        </div>
      </div>
      <div className={styles.SearchBar__dropdown__country__code}>
        <select className={styles.SearchBar__dropdown__country__code_btn}>
          <option value="IN">IN</option>
          <option value="EN">EN</option>
          <option value="SP">SP</option>
        </select>
      </div>
      <div className={styles.SearchBar__dropdown__login__greetings__wrapper}>
        <div
          className={styles.SearchBar__dropdown__login__greeetings__container}
          onMouseOver={() => setToggle(true)}
          onMouseOut={() => setToggle(false)}
        >
          <div className={styles.SearchBar__dropdown__login__greetings}>
            HELLO AMAN
            <span
              className={styles.SearchBar__dropdown__login__greetings__span}
            >
              Accounts & Lists
            </span>
          </div>
          <div className={styles.SearchBar__dropdown__login__down__arrow__icon}>
            <i
              class={`bi bi-caret-down-fill ${styles.SubHeader__browsing__history__icon}`}
            ></i>
          </div>
        </div>
      </div>
      {toggle ? <ManageProfile setToggle={setToggle} /> : null}
      <div className={styles.SearchBar__return__wrapper}>
        <div className={styles.SearchBar__return__container}>
          Returns
          <span className={styles.SearchBar__dropdown__login__greetings__span}>
            &Orders
          </span>
        </div>
      </div>
      <div className={styles.SearchBar__cart__icon}>
        <i class={`bi bi-cart ${styles.SearchBar__cart__icons}`} />
        Cart
      </div>
    </div>
  );
}

export default SearchBar;
