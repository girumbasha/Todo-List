import React from "react";

function App(props){
    return (
        <div>
   <nav
   className= {props.darkMode ? 'dark': ''}
   >

     {/* <img src='./images/logo'/> */}
    <h3 className="nav--logo_text"> React Fact</h3>
    <h4 className="nav--title"> React course - project 1</h4>
   </nav>
        </div>
    )
}
export default App