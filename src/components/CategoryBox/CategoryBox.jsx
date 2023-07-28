import React, { useEffect, useState } from "react";
import styles from "./CategoryBox.module.scss";
import { useNavigate } from "react-router-dom";

function CategoryBox({ title, image, description, price, rating, category }) {
  const [showStars, setShowStars] = useState(null);
  const navigate = useNavigate();
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
  function trimExtras(str) {
    const newStr = str.split("");
    if (newStr.length >= 44) {
      return newStr.slice(0, 44).join("") + "...";
    }
    return str;
    // return newStr
  }
  return (
    <div
      className={styles.CategoryBox__wrapper}
      onClick={() =>
        navigate(`/category/${category}/${title}`, {
          state: {
            title: title,
            description: description,
            image: image,
            price: price,
            rating: rating,
            category: category,
            // stars: showStars,
          },
        })
      }
      target="_blank"
    >
      <div className={styles.CategoryBox__image}>
        <img src={image} alt={title} height="200px" width="150px" />
      </div>
      <div className={styles.CategoryBox__container}>
        <div className={styles.CategoryBox__title}>{trimExtras(title)}</div>
        <div className={styles.CategoryBox__popularity__container}>
          <div className={styles.CategoryBox__stars}>{showStars}</div>
          <div className={styles.CategoryBox__count}>{rating?.count}</div>
        </div>
        <div className={styles.CategoryBox__currency}>
          <div className={styles.CategoryBox__currency__icon}>
            <i class="bi bi-currency-rupee" />
          </div>
          <div className={styles.CategoryBox__currency__value}>{price}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
