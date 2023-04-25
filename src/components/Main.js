import React from "react";


function App(){
    return (
        <div className="main-container">
        {/* <main className={props.darkmode ? 'dark': 'light'}></main> */}
        
      <img src="./images/logo192.png"alt='react logo'/>      
    <h1 className="main--title">Fun facts about React</h1>
    <ul className='main--fact'>
        <li>Was first released in 2013</li>
        <li>Was originally created by jordan walke</li>
        <li>Has well over 100K starts on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprize apps,incluiding
            mobile apps
        </li>
    </ul>
 
        </div>
    )
}
export default App