import React, { useEffect, useState } from "react";
import styles from "./CartBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../../store/cart";

function CartBox({ title, image, price_per_item, price, id }) {
  const dispatch = useDispatch();
  const { cartArray } = useSelector((state) => state.shoppingCart);
  console.log(cartArray);
  const removeItemHandler = (id) => {
    console.log(id);
    dispatch(removeCartItem(id));
  };

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
      </div>
      <div
        className={styles.CartBox__delete__item__btn}
        onClick={() => removeItemHandler(id)}
      >
        <i class="bi bi-trash3-fill" />
      </div>
    </div>
  );
}

export default CartBox;
