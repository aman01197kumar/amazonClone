import React, { useEffect, useState } from "react";
import styles from "./CartScreen.module.scss";
import { useSelector } from "react-redux";
import Header from "../../Utilites/Header/Header";
import Footer from "../../Utilites/Footer/Footer";
import CartBox from "../../Utilites/CartBox/CartBox";
import CartSummaryBox from "../../Utilites/CartSummaryBox/CartSummaryBox";

function CartScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const calculateTotalQuantity = (arr) => {
    return arr.reduce((curr, acc) => {
      return (curr += acc.quantity);
    }, 0);
  };
  const totalQuantity = calculateTotalQuantity(items);
  const calculateTotalAmount = (arr) => {
    return arr.reduce((curr, acc) => {
      return (curr += acc.price);
    }, 0);
  };
  const totalAmount = calculateTotalAmount(items);
  return (
    <div className={styles.CartScreen__wrapper}>
      <Header />
      <div className={styles.CartScreen__wrapper__cart__screen}>
        {items.length > 0 ? (
          <div className={styles.CartScreen__container}>
            <div className={styles.CartScreen__item__container}>
              <div className={styles.CartScreen__wrapper__container__header}>
                <div
                  className={
                    styles.CartScreen__wrapper__container__header__title
                  }
                >
                  Shopping Cart
                </div>
                <div
                  className={
                    styles.CartScreen__wrapper__container__header__delete__btn
                  }
                >
                  Delete All
                </div>
              </div>
              <div
                className={styles.CartScreen__wrapper__container__container}
              ></div>
              {items?.map((item) => {
                return (
                  <CartBox
                    key={item.id}
                    title={item.title}
                    image={item.img}
                    price_per_item={item.price_per_item}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
            <CartSummaryBox
              totalQuantity={totalQuantity}
              totalAmount={totalAmount}
            />
          </div>
        ) : (
          <div className={styles.CartScreen__message}>
            Ooopps!! Cart is Empty
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartScreen;
