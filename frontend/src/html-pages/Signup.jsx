import axios from 'axios'
import React, { useState } from 'react'
import Login from './Login.jsx'



function Signup() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  // console.log(userName,password)

  async function submit(e){
    e.preventDefault()
    const body ={
      userName,
      password
    }
    try{
      const res= await axios.post('http://localhost:2000/user/signup', body)
      setResponse(res.data.message)
    }catch(err){
      setResponse(err.data)
    }
  }

  return (
    <>
    <div>
      <h2>Sign In !!!</h2>
      <form onSubmit={submit} >
        <table>
        <tr>
          <td><label htmlFor="userName">User name: </label></td>
          <td><input type="text" name="userName" id="user" onChange={(e)=>{setUserName(e.target.value)}} /> </td>
        </tr>
        <tr>
          <td><label htmlFor='password'>Password:</label></td>
          <td><input type="password" name="password" id="pass" onChange={(e)=>{setPassword(e.target.value)}}/></td>
        </tr>
        </table>
        <input type="submit" value="Signin" />
      </form>
      <p>Already have an account ? <a href='<Login/>'>Login</a></p>
      {response && <>
      <h5>{response}</h5>
      </>}
      </div>
    </>
  )
}

export default Signup