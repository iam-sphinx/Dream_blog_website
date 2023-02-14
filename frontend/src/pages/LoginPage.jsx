import React, { useContext, useState } from "react";
import {Navigate} from 'react-router-dom'
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  const login = async (e)=>{
    e.preventDefault();
   const response =  await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        setRedirect(true);
      })
    }
    else{
      alert('wrong credentials')
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
