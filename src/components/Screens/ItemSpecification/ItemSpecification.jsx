import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ItemSpecification.module.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  CalculateAmount,
  CalculateQuantity,
  calculateAmount,
  calculateQuantity,
  findId,
  pushArray,
  // updateArray,
  updateCart,
  updateItem,
} from "../../../store/cart";

function ItemSpecification() {
  const [showStars, setShowStars] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const [addItem, setAddItem] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const { title, description, image, rating, price, itemId } = location.state;
  const objItem = {
    id: itemId,
    quantity: itemCount,
    title: title,
    price: itemCount * price,
  };
  console.log(itemId, "id");
  const cart_count = [1, 2, 3, 4, 5, 6];
  const StarIcon = ({ isFilled }) => (
    <i
      className={`bi ${isFilled ? "bi-star-fill" : "bi-star"}`}
      style={{ color: isFilled ? "gold" : "gray" }}
    />
  );

  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      const isFilled = i < rating?.rate;
      stars.push(<StarIcon key={i} isFilled={isFilled} />);
    }
    setShowStars(stars);
  };

  useEffect(() => {
    renderStars();
  }, []);

  const str = description.replace(/;/g, ";\n").replace(/;/g, ".");
  const arr = str.split("\n");

  function addToCartHandler() {
    const keyExists = addItem.findIndex((item) => item.id === objItem.id);

    if (keyExists === -1) {
      // Item doesn't exist, add a new item with quantity and price
      // dispatch(pushArray(objItem));
      setAddItem((prev) => [...prev, objItem]);
    } else {
      // Item already exists, update the quantity and price
      addItem[keyExists].quantity = objItem.quantity;
      addItem[keyExists].price = objItem.price;
      // setAddItem((prev) => [...prev, updatedItem]);
      // dispatch(pushArray(updatedItem));
    }
  }

  console.log(addItem, "add");
  // useEffect(() => {
  // }, [price, itemCount]);
  // useEffect(() => {
  //   // console.log(dispatch(calculateAmount(objItem.price)));
  //   // console.log(objItem.price, "price");
  // }, [objItem, dispatch]);

  // useEffect(() => {
  //   dispatch(calculateQuantity(objItem.quantity));
  // }, [objItem, dispatch]);

  // usss
  const { cartArray } = useSelector((state) => state.shoppingCart);
  // console.log(cartArray, "arrat");
  return (
    <div className={styles.ItemSpecification__wrapper}>
      <Header />
      <div className={styles.ItemSpecification__container}>
        <div className={styles.ItemSpecification__container__item__image}>
          <img src={image} alt={title} width="400px" height="500px" />
        </div>
        <div className={styles.ItemSpecification__container__item__content}>
          <div
            className={
              styles.ItemSpecification__container__item__content__container
            }
          >
            <div
              className={
                styles.ItemSpecification__container__item__content__title
              }
            >
              {title}
            </div>
            <div
              className={
                styles.ItemSpecification__container__item__popularity__container
              }
            >
              <div
                className={
                  styles.ItemSpecification__container__item__popularity__container__rating
                }
              >
                {rating.rate}
                <span
                  className={
                    styles.ItemSpecification__container__item__popularity__container__rating
                  }
                >
                  {showStars}
                </span>
              </div>
              <div
                className={
                  styles.ItemSpecification__container__item__popularity__container__count
                }
              >
                {rating.count}
              </div>
            </div>
          </div>
          <div
            className={
              styles.ItemSpecification__container__item__content__price
            }
          >
            <div
              className={
                styles.ItemSpecification__container__item__content__price__icon
              }
            >
              <i class="bi bi-currency-rupee" />
            </div>
            <div
              className={
                styles.ItemSpecification__container__item__content__price__value
              }
            >
              {price}/-
            </div>
          </div>
          <div
            className={
              styles.ItemSpecification__container__description__wrapper
            }
          >
            <div
              className={
                styles.ItemSpecification__container__description__header
              }
            >
              About the item
            </div>
            <ul
              className={
                styles.ItemSpecification__container__description__content
              }
            >
              {arr.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className={styles.ItemSpecification__container__cart__wrapper}>
            <div
              className={
                styles.ItemSpecification__container__cart__select__field
              }
            >
              <div
                className={
                  styles.ItemSpecification__container__cart__select__field__label
                }
              >
                Quantity:
              </div>

              <select onChange={(e) => setItemCount(e.target.value)}>
                {cart_count.map((item) => {
                  return (
                    <>
                      <option value={item}>{item}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div
              className={
                styles.ItemSpecification__container__cart__button__wrapper
              }
            >
              <button
                className={
                  styles.ItemSpecification__container__cart__button__add__to__cart
                }
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
              <button
                className={
                  styles.ItemSpecification__container__cart__button__buy__now
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ItemSpecification;
