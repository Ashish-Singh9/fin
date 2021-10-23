import React from 'react'
import NavBar from './myComp/NavBar'
import LoginComp from './myComp/LoginComp'
import './css/login.css'
function Login() {
    return (
        <div className="loginBody">
            <NavBar plus="false" user="false" login="true" signup="true"/>
            <LoginComp/>
        </div>
    )
}

export default Login
