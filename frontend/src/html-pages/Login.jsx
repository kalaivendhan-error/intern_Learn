import axios from 'axios'
import React, { useState } from 'react'
import Signup from './Signup.jsx'


function Login() {
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
    //http://localhost:2000/login
    try{
      const res= await axios.post('http://localhost:2000/user/login', body)
      setResponse(res.data)
    }catch(err){
      setResponse(err)
    }
  }

  return (
    <>
    <div>
      <h2>Login !!!</h2>
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
        <input type="submit" value="login" />
      </form>
      <p>Create new account? <a href={<Signup/>}>Sign Up</a></p>
      {response && <>
      <h5>{response}</h5>
      </>}
      </div>
    </>
  )
}

export default Login