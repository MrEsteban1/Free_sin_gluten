import React, { useEffect, useState } from "react";
import { getRandomData } from "../../../../services/spoonacularAPI";
import SearchBar from "../../SearchBar/SearchBar";
import Item from "../Item/Item";

const ItemList = () => {
  //const [products, setProducts] = useState([]);
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    getRandomData("pasta").then((res) => {setRecipe([...res.recipes])});
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
            title={product.title}
            image={product.image}
            price={product.pricePerServing}
          />          
        ))
      )}
    </div>
  );
};

export default ItemList;
