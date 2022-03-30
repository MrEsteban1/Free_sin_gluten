import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import ChartList from './ChartList/ChartList'
import "./style.css"


const Chart = ({products}) => {
 const handleBuy = () => {
   Swal.fire("Muchas gracias por su compra")
 }
 const navigate = useNavigate();

 useEffect(()=>{
   if(products.length === 0) navigate("/")
 }, [])
    
  return (
    <div className='chart-screen'>
         <h3>Carrito de compras:</h3>
         <ChartList />
         <button className='chart-comprarButton' onClick={handleBuy}>Comprar</button>

    </div>
  )
}

export default Chart