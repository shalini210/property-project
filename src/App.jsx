import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegistration from './components/UserRegistration'
import userContext from './context/userContext'
import Home from './components/Home'
import axios from 'axios'
import {Route,Routes} from "react-router-dom"
import Login from './components/Login'
import Logout from './components/Logout'
function App() {
const [login,setlogin]=useState(false)

useEffect(()=>
{
},[])
  return (
    <>
<h1>this is outside of routes from app </h1>
    <userContext.Provider value={{islogin:login,setislogin:setlogin}}>
  {/* <UserRegistration></UserRegistration> */}
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/logout' element={<Logout></Logout>}></Route>
  </Routes>
  <h1>this is outside of routes from app </h1>
  </userContext.Provider>
    </>
  )
}

export default App
