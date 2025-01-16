import React, { useContext } from 'react'
import userContext from '../context/userContext'
import Login from './Login'
import Logout from './Logout'
import UserProfile from './UserProfile'
import UserRegistration from './UserRegistration'
import { Link } from 'react-router'
export default function Togglelogin() {
    let user = useContext(userContext)
    let uifalse =<div> <Link to="/register">Register</Link> | <Link to="/login">Login</Link></div>
    let uitrue =<div>
      <Link to="/userprofile">Profile</Link> | <Link to="/logout">Logout</Link>
      | <Link to = "/changepassword">Change Password</Link></div>

  return (
    <div>
{user.islogin?uitrue:uifalse}
    </div>
  )
}
