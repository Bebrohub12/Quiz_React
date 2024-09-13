import React, { useEffect, useState } from 'react'

import Home from './Home'


function Register() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [user, setuser] = useState([])
  const [go, setgo] = useState(true)
  // const navigate = useNavigate()

  useEffect(()=>{
    const getdetails = JSON.parse(localStorage.getItem("userdetails")) || []
    setuser(getdetails)
    
  },[])

  useEffect(() => {
    localStorage.setItem("userdetails", JSON.stringify(user))
  }, [user])

  


  function registerhandler(e) {
    e.preventDefault()
    console.log(name, email, password)
    const userdetails = {
      name: name,
      email: email,
      password: password          
    }

    setuser([...user, userdetails])
    alert("User registered sucessfully you can login now")
    setgo(false)
  }

  // console.log(user)
if(go){
  return (
    <div className='register'>
      <form onSubmit={registerhandler}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setname(e.target.value)} autoFocus required></input><br />
        <input type="email" placeholder='Enter your e-mail' value={email} onChange={(e) => setemail(e.target.value)} required></input><br />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setpassword(e.target.value)} required></input><br />
        <button type='submit' >Register</button>
      </form>

    </div>
  )
}
else{
  return(
   <Home/>
  )
}
  
}

export default Register