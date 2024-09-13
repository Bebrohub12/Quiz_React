
 import React from 'react'
import { Link } from 'react-router-dom'
 
 function Header() {
   return (
     <header>
        <h1>Quiz</h1>
        <Link to="/Register"><h2>Register</h2></Link>
        <Link to="/"><h2>Login</h2></Link>
        {/* <Link to="/Score"><h2>Score</h2></Link> */}
     </header>
   )
 }
 
 export default Header