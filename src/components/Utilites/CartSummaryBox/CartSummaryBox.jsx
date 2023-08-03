import React from "react";
import styles from "./CartSummaryBox.module.scss";

function CartSummaryBox({ totalQuantity, totalAmount }) {
  return (
    <div className={styles.CartSummaryBox__cart__summary__card}>
      <div className={styles.CartSummaryBox__total__quantity__container}>
        <div className={styles.CartSummaryBox__total__quantity__title}>
          Subtotal({totalQuantity}):
          <span className={styles.CartSummaryBox__total__quantity__figure}>
            <i class="bi bi-currency-rupee" />
            {totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <button
          className={
            styles.CartSummaryBox__total__quantity__container__proceed__btn
          }
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default CartSummaryBox;
