import React, { useEffect, useState } from "react";
import { getRandomData } from "../../../../services/firebase";

//import SearchBar from "../../SearchBar/SearchBar";
import Item from "../Item/Item";

const ItemList = () => {
  //const [products, setProducts] = useState([]);
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getDATA = async () => {
      await getRandomData()
        .then((data) => {
          console.log(data);
          setRecipe([...data]);
        })
        .catch((e) => console.error(e));
    };

    // getRandomData("pasta").then((res) => {
    //   setRecipe([...res.recipes]);
    // });
    getDATA();
  }, []);

  console.log(recipes);

  return (
    <div className="productList">
      {recipes.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        recipes.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.nombre}
            image={product.imagen}
            price={product.precio}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
