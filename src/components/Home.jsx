import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import AgentBuilderHome from './agentbuilder/AgentBuilderHome'
import Login from './Login'
import Logout from './Logout'
import UserProfile from './UserProfile'

export default function Home() {
let user = useContext(userContext)
const [UI,setUI] = useState(<UserProfile></UserProfile>)
useEffect(()=>
{
  if(user.userType==="Agent/Builder")
  {
setUI(<AgentBuilderHome></AgentBuilderHome>)
  }
  else
  {
    setUI(<UserProfile></UserProfile>)
  }
  console.log(user.userType)
},[user.userType]
)

  return(<>
    {user.islogin?UI:<Login></Login>}
        </>
  )
}
