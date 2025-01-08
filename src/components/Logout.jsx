import React, { useContext,useEffect} from 'react'
import {useNavigate } from "react-router-dom"
import userContext from '../context/userContext'

export default function Logout() {
  const navigate = useNavigate()
  let user = useContext(userContext)
  useEffect(() => {
    if(!user.islogin) 
    {  
      navigate("/")
    }
  }, [])
  
  return (
    <input type="button " value="logout"  className='bg-red-500'
    onClick={()=>{
      user.setislogin(false)
      navigate("/");
    }}/>
  )
}
