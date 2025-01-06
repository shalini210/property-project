import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import profileContext from '../context/profileContext';
import userContext from '../context/userContext'
export default function Login() {
  let emailref = useRef("")
  let pwdref = useRef("");
let user = useContext(userContext);

let profileData = useContext(profileContext)

const [msg,setmsg ]=useState("");
let loginuser=()=>
{
  let data = {email:emailref.current.value,pwd:pwdref.current.value}
  axios.post("http://localhost:8080/user/login",data)
  .then((d)=>{
    if(d.data)
    {
      console.log(d.data)
      profileData.setUserProfileData(d.data)
      user.setislogin(true);
    }
    else
    {
      setmsg("invalid user")
    }
  })
  .catch((e)=> console.log(e))
  // user.setislogin(true);
}
  return (
    <>
    <p>
      Enter Email:  <input type="text"  ref={emailref}/>
    </p>
    <p>
      Enter password : <input type="password" ref={pwdref}/>
    </p>
    <input type="button" value="login"  className='bg-blue-300'
     onClick={()=>loginuser()}/>
     <h1>{msg}</h1>
     </>
  )
}
