
import './App.css';
  import React, { useState } from 'react';
const MESSAGE_ERROR = {
  username: "Username error",
  email: "Email error",
  password: "Password error",
  confirmPassword: "Password must be the same"
} 
const REGEX = {
  username: /^[a-zA-Z]{2,}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
}

function App() {     
  const [email,setEmail] = useState()  
  const checkAccount = (e)=>{
    setEmail(e.target.value) 
  }         
  const checkLogin = ()=>{
    if( !REGEX.email.test(email)){
      alert(MESSAGE_ERROR.email)
    }
  }                                                                                                                               
  return (
    <div className="App">
      <form> 
        <h2>Đăng nhập </h2>
        <label htmlFor="email"><h4 className='cuc'>Email:</h4></label>
        <input className='cut' id='email'  onChange={checkAccount}  value={email} placeholder='email' />
        <br />
        <label htmlFor="password"><h4 className='cuc'>Password:</h4></label>
        <input id='password' className='cut' type="password" placeholder='password' />
        <br />
        <button type='button' onClick={checkLogin} >Login</button>
      </form>
    </div>
  );
  }
export default App;
