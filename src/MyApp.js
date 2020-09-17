import React, { Component } from 'react'
import './style.css'
import products from './productsData'
import { render } from 'react-dom'



class MyApp extends React.Component{
  render() {
    let names = products.map((product) => <Name product={product} /> )

    return (
      <div>
          {names}
      </div>
    )
  }
}

class Name extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: "Yes",
    }

  }

  render() {

    return (
      <div style={{display:"flex"}}>
        <input type="checkbox" checked={this.props.product.id[0]>5 ? true : false}/> 
        <p>{this.props.product.id}</p>
        <h3 style={{marginBottom: 50}}> {this.props.product.name} </h3>
        <h2>{this.state.answer == "True" ? this.state.answer = "True" : this.state.answer = "Trufe"}</h2>
        
      </div>
    )
  }
}

export default MyApp