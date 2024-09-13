import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [name , setname] = useState("")
  const [password , setpassword] = useState("")
  const navigate  = useNavigate()
  function loginhandler (e) {
    e.preventDefault()
    const storeddata = JSON.parse(localStorage.getItem("userdetails"))


    const filtereddata = storeddata.filter(data => data.name === name && data.password === password)
    if(filtereddata.length > 0){
      alert(`Welcome ${name}`)
      navigate("/Question")
     }
     else{
       alert("you have entered wrong credentials check your username or password or you should register first")
     } 
  

  }
  return (
    <div className='home'>
      <form onSubmit={loginhandler}>
        <input type="text" placeholder='Enter your name' autoFocus required value={name} onChange={(e) => setname(e.target.value)}
        ></input><br/>
        <input type="password" placeholder='Enter your password' required value={password} onChange={(e) => setpassword(e.target.value)}
        ></input><br/>
        <button type='submit' >Log in</button>
      </form>
        
    </div>
  )
}

export default Home