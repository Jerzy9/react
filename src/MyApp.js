import React, { Component } from 'react'
import './style.css'

const jokes = [
    {
      id: 1,
      punchLine:"punch line1",
      question:"question1",
    },
    {
      id: 2,
      punchLine:"punch line2",
      question:"question2",
    },
    {
      id: 3,
      punchLine:"punch line3",
      question:"question3",
    }
  ]

function MyApp() {
  
  jokes.array.forEach(element => {
    return(
      <div className="container">
        <Joke punchLine={jokes.line[0].punchLine} question={jokes.line[0].question}/>
      </div>
    )
  });
    
}

function Joke(props) {
  return (
    <div className="joke">
      <ul>
        <li>
          {props.question}
        </li>
        <li>
          {props.punchLine}
        </li>
      </ul>
    </div>
  )
}


export default MyApp