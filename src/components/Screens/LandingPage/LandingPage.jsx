import React, { useState } from "react";
import Header from "../../Utilites/Header/Header";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import styles from "./LandingPage.module.scss";
import Footer from "../../Utilites/Footer/Footer";
import AccessoriesBoxes from "../../Utilites/AccessoriesBoxes/AccessoriesBoxes";

SwiperCore.use([Navigation, Pagination, A11y]);

export default function LandingPage() {
  const [title, setTitle] = useState([]);
  const slide_img = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  ];
  // console.log(title, "title");
  return (
    <div className={styles.LandingPage__wrapper}>
      {/* <Header title={title} /> */}
      <div className={styles.LandingPage__swiperContainer}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {slide_img.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  style={{
                    backgroundImage: `url(${item})`,
                    height: "100vh",
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.LandingPage__Accessories__container}>
          <AccessoriesBoxes setTitle={setTitle} />
        </div>
      </div>
      <Footer title="Back to top" />
    </div>
  );
}
