import React, { Component } from 'react'

function MyApp() {
    return(
     <div>   
        <Main />
    </div>
    )
}

class Main extends Component {
    render() {
      const names = ['1', '2', '3', '5'];
   
      return (
        <div>
            {names.map((value, index) => {
                return <h1 key={index}>{value}</h1>;
            })}
          
        </div>
      );
    }
  }
   
//   class Greeting extends Component {
//     render() {
//       return 
//     }
//   }
export default MyApp