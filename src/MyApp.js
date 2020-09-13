import React, { Component } from 'react'
import './style.css'

function MyApp() {
    return(
     <div className="container">
        <Navbar />  
        <Timer /> 
        <Main />
    </div>
    )
}

class Main extends Component {
    render() {
      const names = ['1', '2', '3', '5'];
   
      return (
        <div className="tasks">
            {names.map((value, index) => {
                // return <h1 key={index}>{value}</h1>;
                return (
                  <div key = {index} className="task">
                    <input className="checkbox" type="checkbox"/>
                    <label className="paragraph"> Task numer {value} </label>
                  </div>
                )
            })}
        </div>
      );
    }
  }

  function Navbar() {
    return (
      <div className="navbar">
        <p>
          TODO apliacation
        </p>
      </div>
    )
  }
  
  class Timer extends Component {
    render() {
      const date = new Date()
      const hours = date.getHours()
      let timeOfDay

      if(hours < 12 && hours >= 4) timeOfDay = 'morning'
      else if(hours >= 12 && hours < 18) timeOfDay = 'afternoon'
      else timeOfDay = 'night'

      return (
        <div className="timer">
          <div>Good {timeOfDay}</div>
        </div>
      )
    }
  }
   

export default MyApp