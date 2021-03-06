import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabyID } from "../../../services/firebase";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./style.css";

const ItemDetailContainer = () => {
  const [data, setData] = useState({ data: {}, loading: true });
  const { idItem } = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getItem = async (id) => {
      await getDatabyID(id).then((res) =>
        setData({ data: res, loading: false })
      );
    };
    setData({ data: {}, loading: true });
    getItem(idItem);
  }, []);

  return (
    <div className="item-container">
      {data.loading ? <h3>Loading...</h3> : <ItemDetail data={data.data} />}{" "}
    </div>
  );
};

export default ItemDetailContainer;
