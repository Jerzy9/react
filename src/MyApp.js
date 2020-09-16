import React, { Component } from 'react'
import './style.css'
import products from './productsData'



function MyApp() {

   let names = products.map((product, key) => <Name key={key} id={product.id} name={product.name} /> )

  return (
  <div>
      {names}
  </div>
  )
  
}

function Name(props) {

  return (
    <div> 
      <p>{props.id}   {props.key}    .</p>
      <h3>{props.name}</h3>
    </div>
  )
}

export default MyApp