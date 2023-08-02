import React from "react";
import styles from "./CartBox.module.scss";

function CartBox({ title, image, price_per_item, price, quantity }) {
  console.log(image, "image");
  function trimExtras(str) {
    const newStr = str.split("");
    if (newStr.length >= 44) {
      return newStr.slice(0, 44).join("") + "...";
    }
    return str;
    // return newStr
  }
  return (
    <div className={styles.CartBox__wrapper}>
      <div className={styles.CartBox__image__container}>
        <img src={image} alt={title} width="100px" height="100px" />
      </div>
      <div className={styles.CartBox__detail__container}>
        <div className={styles.CartBox__detail__container__title}>{title}</div>
        <div className={styles.CartBox____detail__price__container}>
          <div
            className={styles.CartBox____detail__price__per__item__container}
          >
            <div className={styles.CartBox____detail__price__per__item__header}>
              Price per item
            </div>
            <div className={styles.CartBox____detail__price}>
              <i class="bi bi-currency-rupee" />
              {price_per_item}
            </div>
          </div>
          <div
            className={styles.CartBox____detail__price__per__item__container}
          >
            <div className={styles.CartBox____detail__price__per__item__header}>
              Total price of item
            </div>
            <div className={styles.CartBox____detail__price}>
              <i class="bi bi-currency-rupee" />
              {price}
            </div>
          </div>
        </div>
        {/* <div className={styles.CartBox__detail__container__dropdown__btn}>
                      <select>
                          
                </select>
              </div> */}
      </div>
      <div className={styles.CartBox__delete__item__btn}>
        <i class="bi bi-trash3-fill" />
      </div>
    </div>
  );
}

export default CartBox;
