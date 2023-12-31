import React from "react";
import styles from "./CategoryBoxes.module.scss";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../Utilites/Header/Header";
import Footer from "../../Utilites/Footer/Footer";
import CategoryBox from "../../Utilites/CategoryBox/CategoryBox";
function CategoryBoxes() {
  const location = useLocation();
  const { category } = useParams();
  const { data } = location.state;
  return (
    <div className={styles.Category__wrapper}>
      <Header />
      <div className={styles.Category__wrapper__container}>
        {data?.data[category]?.map((item) => {
          return (
            <CategoryBox
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              rating={item.rating}
              category={item.category}
              itemId={item.id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default CategoryBoxes;
