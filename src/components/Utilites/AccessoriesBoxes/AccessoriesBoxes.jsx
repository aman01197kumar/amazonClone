import React, { useEffect, useState } from "react";
import styles from "./AccessoriesBox.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushTitleArray } from "../../../store/title";
function AccessoriesBoxes({ setTitle }) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      const newArr = {};
      response?.data?.forEach((item) => {
        if (newArr[item?.category]) {
          newArr[item?.category].push(item);
        } else {
          newArr[item?.category] = [item];
        }
      });
      setData(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(pushTitleArray(Object.keys(data)));
  }, [data]);
  // console.log(, "data");
  const sentenceCase = (str) => {
    const words = str.split(" ");
    const word = words.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return word.join(" ");
  };
  return (
    <div className={styles.AccessoriesBoxes__wrapper}>
      <div className={styles.AccessoriesBoxes__wrapper__container}>
        {Object.keys(data).map((category, i) => {
          return (
            <div
              key={i}
              className={styles.AccessoriesBoxes__container}
              onClick={() =>
                navigate("/category/" + category, {
                  state: { data: { data } },
                })
              }
            >
              {sentenceCase(category)}
              <div className={styles.AccessoriesBoxes__images__container}>
                {data[category].slice(0, 4).map((item) => (
                  <div className={styles.AccessoriesBoxes__images}>
                    <img
                      src={item.image}
                      key={item.id}
                      height="100px"
                      width="100px"
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccessoriesBoxes;
