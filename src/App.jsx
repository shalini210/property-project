import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegistration from './components/UserRegistration'
import userContext from './context/userContext'
import Home from './components/Home'
import axios from 'axios'
import {Route,Routes} from "react-router-dom"
import { Link } from 'react-router'
import Login from './components/Login'
import Logout from './components/Logout'
import profileContext from './context/profileContext'
import Togglelogin from './components/Togglelogin'
import UserProfile from './components/UserProfile'
import AddProperty from './components/agentbuilder/AddProperty'
function App() {
const [login,setlogin]=useState(false)
const [userProfileData,setUserProfileData]=useState();
useEffect(()=>
{
},[])
  return (
    <>
    

    <userContext.Provider value={{islogin:login,setislogin:setlogin}}>
      <Togglelogin></Togglelogin>
      <profileContext.Provider 
      value={{userProfileData:userProfileData,setUserProfileData:setUserProfileData}}>
  {/* <UserRegistration></UserRegistration> */}
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/logout' element={<Logout></Logout>}></Route>
<Route path='/register' element={<UserRegistration></UserRegistration>}></Route>
<Route path='/userprofile' element={<UserProfile></UserProfile>}></Route>
<Route path='/addproperty' element={<AddProperty></AddProperty>}></Route>
  </Routes>

  </profileContext.Provider>

  </userContext.Provider>
    </>
  )
}

export default App
