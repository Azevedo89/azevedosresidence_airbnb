import React from "react"
import './index.css'
import logo from "./images/azevedosresidence.png"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer" 

function App(){
    return (
        <div>
            <Navbar />
             <div className="logo-container">
                <img src={logo} alt="Logo"/>
             </div>    
             <Footer />                     
        </div>
        
    )
}

export default App
