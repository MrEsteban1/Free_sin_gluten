import React from 'react'
import "./style.css"


const Chart = ({products}) => {
    console.log(products)
  return (
    <div className='chart-screen'>
         <h3>Chart</h3>
         {products.length && products.map(e => <li key={e.id}>{e.title}</li>)}
    </div>
  )
}

export default Chart