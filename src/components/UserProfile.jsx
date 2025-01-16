import React, { useContext, useEffect, useRef } from 'react'
import profileContext from '../context/profileContext'
import Logout from './Logout'
import userContext from '../context/userContext'
import { useNavigate } from 'react-router'
export default function UserProfile() {
  
  let profileData = useContext(profileContext)
  let userNameRef = useRef("");
  let emailRef = useRef("");
  let contactRef = useRef("");
  const navigate = useNavigate()
  useEffect(()=>
  {
    if(profileData.userProfileData==undefined)
    {
      console.log("in if ")
      navigate("/login")
    }
    else
    {
     let u = profileData.userProfileData[0];
     userNameRef.current.value=u.username;
     emailRef.current.value=u.email;
     contactRef.current.value=u.contact;
    }
  },[])
  return (
    <>
    <div className='grid grid-cols-2'>
    <div>
    <div>UserProfile</div>
    <p>
      username: <input type="text" ref={userNameRef}
        className='textbox'/>

    </p>
    <p>
      email: <input type="text" disabled
       className='textbox' ref={emailRef}/>
    </p>
    <p>
      contact : <input type="text" className='textbox' ref={contactRef}/>
    </p>
    <p>
      
    </p>
    <input type="button" value="Save" className='btn'/>

    </div>
    <div>
    <Logout></Logout>
    </div>
    </div>
    </>
  )
}
