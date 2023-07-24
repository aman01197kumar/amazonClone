import React, { useEffect, useState } from "react";
import styles from "./AccessoriesBox.module.scss";
import axios from "axios";
import AccessoriesBox from "../AccessoriesBox/AccessoriesBox";
import { useNavigate } from "react-router-dom";
function AccessoriesBoxes() {
  const [data, setData] = useState([]);
  const [obj, setObj] = useState([]);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // setData(response.data);
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
    setObj(Object.keys(data));
  }, [data]);

  const sentenceCase = (str) => {
    const words = str.split(" ");
    const word = words.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return word.join(" ");
  };
  return (
    <div className={styles.AccessoriesBoxes__wrapper}>
      {Object.keys(data).map((category, i) => {
        return (
          <div
            className={styles.AccessoriesBoxes__container}
            onClick={() => navigate("/" + category)}
          >
            {sentenceCase(category)}
          </div>
        );
      })}
    </div>
  );
}

export default AccessoriesBoxes;
