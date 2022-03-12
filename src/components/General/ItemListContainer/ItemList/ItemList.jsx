import React, { useEffect } from "react";

const ItemList = () => {
  const data = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { title: "Budin sin tacc", image: "", detail: "", stock: 6 },
          { title: "Alfajor sin tacc Yuca", image: "", detail: "", stock: 6 },
        ]),
      2000
    );
  });

  useEffect(() => {
    console.log("esto");
    data.then((e) => {
      console.log(e);
    });
  }, []);

  return <div>itemList</div>;
};

export default ItemList;
