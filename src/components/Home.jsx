import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import Login from './Login'
import Logout from './Logout'
import UserProfile from './UserProfile'

export default function Home() {
let user = useContext(userContext)
  return(<>
    {user.islogin?<UserProfile></UserProfile>:<Login></Login>}
        </>
  )
}
