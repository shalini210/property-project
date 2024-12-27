import React, { useRef, useState } from 'react'
import axios from 'axios'
export default function UserRegistration() {
  const [msg,setmsg]=useState("");
  let nameref = useRef("")
  let pwdref = useRef("")
  let emailref = useRef("")
  let contactref = useRef("")
  let addUser = ()=>
  {
    let data = {username:nameref.current.value
      ,pwd:pwdref.current.value,email:emailref.current.value,
      contact:contactref.current.value,verified:false}
    axios.post("http://localhost:8080/user",data)
    .then((d)=>{
      setmsg("User Registered, please verify your account")
    clearData()})
    .catch((e)=>setmsg("user not registered , please try after some time"))
  }
  let clearData=() =>
  {
    nameref.current.value="";
    emailref.current.value=""
    pwdref.current.value=""
    contactref.current.value=""
  }
  return (
    <div className='grid grid-cols-1 gap-2 w-1/2'>
    <h1>    UserRegistration</h1>
    <p>
      Name : <input type="text" ref={nameref} className="textbox"/>
    </p>
    <p>
      email: <input type="text" ref={emailref} className="textbox"/>
    </p>
    <p>
      contact no : <input type="text" ref={contactref} className="textbox"/>
    </p>
    <p>
      password : <input type="text"  ref={pwdref} className="textbox"/>
    </p>
    <div className='grid grid-cols-2 gap-2 w-1/2'>
    <input type="button" className='bg-green-400 '
     value="Register" onClick={()=>addUser()} />  
    <input type="button" value="Cancel" className='bg-red-400'
     onClick={()=>clearData()} />
    
    </div>
    {msg}
    </div>
  )
}
