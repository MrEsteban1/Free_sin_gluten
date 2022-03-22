import React, { useEffect, useState } from "react";
import { getRandomData } from "../../../../services/spoonacularAPI";
import Item from "../Item/Item";

const ItemList = () => {
  //const [products, setProducts] = useState([]);
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    getRandomData("pasta").then((res) => setRecipe([...res.recipes]));
  }, []);

  console.log(recipes);

  return (
    <div className="productList">
      {recipes.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        recipes.map((product) => (
          <Item
            key={product.key}
            title={product.title}
            image={product.image}
            detail={product.detail}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
