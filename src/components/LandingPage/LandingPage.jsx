import React from "react";
import Header from "../Header/Header";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import styles from "./LandingPage.module.scss";

// SwiperCore.use([Navigation, Pagination, A11y]);

export default function LandingPage() {
  const slide_img = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
  ];

  return (
    <>
      <Header />
      <div className={styles.LandingPage__swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slide_img.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item}
                alt={`Slide ${i}`}
                className={styles.LandingPage__image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
