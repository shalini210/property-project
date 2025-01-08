import React from 'react'
import { Link } from 'react-router'
export default function AgentBuilderHome() {
  return (
    <div>
        <Link to="addproperty">Add Property</Link><br></br>
        <Link to = "changepassword">Change Password</Link>
    </div>
  )
}
