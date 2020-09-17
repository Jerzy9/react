import React, { Component } from 'react'
import './style.css'
import products from './productsData'
// import { render } from 'react-dom'



class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(i) {
    i++;
    this.setState({ count: i})
  }

  render() {
    let i = 0;
      return (
        <div >
          <h1>{this.state.count}</h1>
           <button onClick={this.handleClick(i)}>Change</button>
        </div>
      );
    
  }
}


export default MyApp