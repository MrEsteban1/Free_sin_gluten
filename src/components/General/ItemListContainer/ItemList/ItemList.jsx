import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDataByCategory,
  getRandomData,
} from "../../../../services/firebase";

//import SearchBar from "../../SearchBar/SearchBar";
import Item from "../Item/Item";

const ItemList = () => {
  //const [products, setProducts] = useState([]);
  const [recipes, setRecipe] = useState([]);

  const { category } = useParams();
  const resetProducts = () => setRecipe([]);

  useEffect(() => {
    const getDATA = async () => {
      resetProducts();
      category === "sin filtro"
        ? await getRandomData()
            .then((data) => {
              console.log(data);
              setRecipe([...data]);
            })
            .catch((e) => console.error(e))
        : getDataByCategory(category).then((data) => {
            console.log(data);
            setRecipe([...data]);
          });
    };
    getDATA();
    console.log(category);
  }, [category]);

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
            type={product.tipo}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
