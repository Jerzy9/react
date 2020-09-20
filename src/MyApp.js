import React, { Component } from 'react'
import './style.css'
import products from './productsData'
// import { render } from 'react-dom'



class MyApp extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    
    this.setState(prevState => {
      return {
        count:prevState.count + 1
      }
    })
  }


  render() {
  
      return (
        <div >
          <h1>{this.state.count}</h1>
           <button onClick={this.handleClick} >Change</button>
        </div>
      )
    
  }
}


export default MyApp