import React, { useContext } from 'react'
import userContext from '../context/userContext'
export default function Logout() {
  let user = useContext(userContext)
  return (
    <input type="button " value="logout"  className='bg-red-500'
    onClick={()=>user.setislogin(false)}/>
  )
}
