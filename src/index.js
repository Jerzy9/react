import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return(
     <div>  
        <ul>
            <li>apple</li>
            <li>banana</li>
            <li>orange</li>
        </ul>
    </div>
    )
}

ReactDOM.render(<MyApp /> ,document.getElementById("root"));