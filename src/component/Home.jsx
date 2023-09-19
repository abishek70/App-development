import React from 'react'

import {FaBars,FaTimes} from "react-icons/fa"

const Home = () => {
   
  return (
    <div>
        <header> 
            <nav>
                <h3>LOGO</h3>
                <a href='/#'>Home</a>
                <a href='/#'>My Account</a>
                <a href='/#'>Plans</a>
                <a href='/#'>About</a>
                <button >
                    <FaTimes/>
                </button>
            </nav>
            <button >
                <FaBars/>
            </button>
        </header>
    </div>
  )
}

export default Home