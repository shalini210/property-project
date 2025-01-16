import React, { useEffect, useRef, useState } from 'react'
import profileContext from '../context/profileContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import userContext from '../context/userContext'
export default function ChangePwd() {
    let user = useContext(userContext)
    const [msg,setmsg ] = useState("")
    let profileData = useContext(profileContext)
    const navigate = useNavigate()
    let oldpwdref = useRef("")
    let newpwdref = useRef("")
    let renewpwdref = useRef("")
    useEffect(()=>
    {
        if(profileData.userProfileData==undefined)
        {
          console.log("in if ")
          navigate("/login")
        }
        else
        {
        }    
    },[])
    let changepassword =async ()=>
    {
        if(newpwdref.current.value!= renewpwdref.current.value)
        {
            alert("both the passwords shold be same ");
        }   
        else
        {
            let data = {id: profileData.userProfileData[0]._id,
                pwd:oldpwdref.current.value ,
                newpwd:newpwdref.current.value }
                
  await axios.put("http://localhost:8080/user/updatepassowrd",data)
             .then((d)=>{
                if(d.data=="0")
                {
                    setmsg = "Password not updated"
                }
                else
                {
                    alert("password updated successfully, login again")
                    user.setislogin(false)
                    navigate("/login")
                }
                }
                )
             .catch((err)=>console.log(err))
        }
    }
  return (
    <>
    <div className='text-3xl'>ChangePwd</div>
    <p>
        Old password : <input type="text" ref={oldpwdref}/>
    </p>
    <p>new password : <input type="text"  ref={newpwdref}/></p>
    <p>re-enter new password : <input type="text" 
    ref={renewpwdref}/></p>
    <input type="button" value="Change Password"
    onClick={()=>changepassword()} />
    <input type="button" value="Cancel" />
    </>
  )
}
