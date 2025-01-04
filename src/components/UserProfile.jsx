import React from 'react'
import Logout from './Logout'

export default function UserProfile() {
  return (
    <>
    <div>UserProfile</div>
    <p>
      username: <input type="text"  className='textbox'/>

    </p>
    <p>
      email: <input type="text" className='textbox'/>
    </p>
    <p>
      contact : <input type="text" className='textbox'/>
    </p>
    <p>
      
    </p>
    <Logout></Logout>
    </>
  )
}
