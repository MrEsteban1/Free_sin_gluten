import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Home = () => {
  return (
    <section id="home-screen">
      <div>       
        <img className="home-img" src="https://ouch-cdn2.icons8.com/ORoDu9SnVnD-4sBGqEBVwNpxHLvbsAm8NPt7rpGHnrw/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODkx/L2E1MTcyOTViLWI0/MDEtNGRmZC05OTc2/LTYyNTUyYTNkZmJm/My5zdmc.png" alt="" />      
        <h3 className="home-tittle">Free Sin Gluten!</h3>
      </div>
      <h4 className='home-frase'>La mejor comida libre de gluten para que disfrutes!!</h4>
      <Link id="home-button-products" to={"/products/sin%20filtro"}>PRODUCTOS</Link>
    </section>
  )
}

export default Home