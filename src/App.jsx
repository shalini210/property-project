import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegistration from './components/UserRegistration'
import userContext from './context/userContext'
import Home from './components/Home'
function App() {
const [login,setlogin]=useState(false)
  
  return (
    <>
    <userContext.Provider value={{islogin:login,setislogin:setlogin}}>
  {/* <UserRegistration></UserRegistration> */}
  <Home></Home>
  </userContext.Provider>
    </>
  )
}

export default App
