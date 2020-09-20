import React, { Component } from 'react'
import './style.css'
import products from './productsData'
import { render } from 'react-dom'


class MyApp extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogIn: false
    }
    this.handleClicked = this.handleClicked.bind(this)
  }

  handleClicked() {
    console.log("prevState " + this.state.isLogIn)
    let newState
    this.setState((prevState) => {
      newState = !prevState.isLogIn

      return {
        isLogIn:newState
      }
    })
    console.log("actualState " + this.state.isLogIn)
  }

 render() {
  let text
  let btnText

  if(this.state.isLogIn) {
    text = "You are log In" 
    btnText = "Log out"
  }
  else {
    text = "You are log out"
    btnText = "Log in"
  } 

   return(
     <div>
       <Text text={text}/>
       <Btn text={btnText} handleClicked={this.handleClicked} />

      </div>
   )
 
 }
}

class Text extends React.Component {
  render() {

    return(
      <div>
          <p>{this.props.text}</p>
      </div>
    )
  }
}

class Btn extends React.Component {
  render() {
    
    return(
      <div>
        <button onClick={this.props.handleClicked}>

          {this.props.text}
        </button>
      </div>
    )
  }
}

export default MyApp