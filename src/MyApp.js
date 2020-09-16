import React, { Component } from 'react'
import './style.css'
import products from './productsData'



function MyApp() {

   let names = products.map((product) => <Name product={product} /> )

  return (
  <div>
      {names}
  </div>
  )
  
}

function Name(props) {
    return (
      <div style={{display:"flex"}}>
        <input type="checkbox" checked={props.product.id[0]>5 ? true : false}/> 
        <p>{props.product.id}</p>
        <h3 style={{marginBottom: 50}}> {props.product.name} </h3>
        
      </div>
    )
}

export default MyApp