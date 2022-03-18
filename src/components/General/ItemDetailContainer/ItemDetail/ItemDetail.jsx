import React, { useEffect, useState } from "react";
import "./style.css";

const ItemDetail = ({ data }) => {
  const { id, name, calories, img, price } = data;
  const [images, setImages] = useState({
    selected: 0,
    names: [...Object.keys(img)],
  });
  console.log("data");
  console.log(images);
  useEffect(() => {}, []);

  console.log(images);

  return (
    <div className="item_detail">
      <div className="item-detail-view">
        <h2>{name}</h2>
        <h3 className="item-detail-id">ID: #{id}</h3>
        <img
          className="item-detail-image"
          src={img[images.names[images.selected]]}
          alt=""
        />
      </div>
      <div className="item-detail-description">
        <ul>
          <li className="item-detail-list-item">
            <b>Calorias:</b> {calories}
          </li>
          <li className="item-detail-list-item">
            <b>Precio:</b> {price}
          </li>
          <li className="item-detail-list-item">
            {images.names.map((e, i) => (
              <button
                key={i}
                className={"item-container-button-" + i}
                onClick={() => setImages({ selected: i, names: images.names })}
              >
                {e}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;
