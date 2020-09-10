import React from "react"

function MyApp() {
    return(
     <div>  
        <h1>
            Konrad
        </h1>
        <p>blabla bla balbalbalblablalblablalbla</p>
        <ul>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
        </ul> 
        <br /><br /><br />
        <Main />
        <br /><br /><br />
        <Footer />
    </div>
    )
}

function Main() {
    return (
    <main>
        <p>MAIN SECTION</p>
    </main>
    )
}
    

function Footer() {
    return(
        <div>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default MyApp