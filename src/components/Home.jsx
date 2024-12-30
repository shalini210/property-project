import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import Login from './Login'
import Logout from './Logout'
export default function Home() {
    let user = useContext(userContext)


  return (<>
    {user.islogin?<Logout></Logout>:<Login></Login>}
        </>
  )
}
