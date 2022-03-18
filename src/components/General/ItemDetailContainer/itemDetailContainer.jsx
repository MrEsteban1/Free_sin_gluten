import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./style.css";

const ItemDetailContainer = () => {
  const [data, setData] = useState({ data: {}, loading: true });
  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 123,
            name: "Alfajor Yuca Sin TACC",
            calories: 123,
            price: "$21",
            img: {
              membrillo:
                "https://d3ugyf2ht6aenh.cloudfront.net/stores/635/474/products/alfajor-de-membrillo-sin-tacc-yuka-50gr1-8c1d891733193cb27b16021862608266-640-0.jpg",
              dulce:
                "https://d3ugyf2ht6aenh.cloudfront.net/stores/635/474/products/alfajor-dulce-de-leche-sin-tacc-yuka-50gr1-a47f40c7dac9dffa4516021862614528-640-0.jpg",
            },
          }),
        2000
      );
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setData({ data: {}, loading: true });
    getItem().then((res) => setData({ data: res, loading: false }));
    console.log(data.data);
  }, []);
  return (
    <div className="item-container">
      {data.loading ? <h3>Loading...</h3> : <ItemDetail data={data.data} />}{" "}
    </div>
  );
};

export default ItemDetailContainer;
