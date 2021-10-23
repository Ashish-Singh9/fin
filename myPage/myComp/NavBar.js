import React from 'react'
import '../css/navBar.css'
import {Link} from "react-router-dom";
function NavBar(props) {
    return (
        <>
          <nav className="navbar navbar-expand">
                <a className="navbar-brand" href="#">
                <img className="logoImg" src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="logo"/>
                </a>
                <ul className="navbar-nav ml-auto">
                    {
                        props.plus==='true'?<li className="nav-item size">
                        <Link to="/createAgenda"><button className="fa fa-plus btnOutline"></button></Link>
                        </li>:""
                    }
                    {
                        props.user==='true'?<li className="nav-item dropdown dropleft size">
                        <button className="fa fa-user btnOutline" data-toggle="dropdown"></button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/">Profile</Link>
                            <Link className="dropdown-item" to="/setting">Setting</Link>
                            <Link className="dropdown-item" to="/logout">Logout</Link>
                        </div>
                    </li> :""   
                    }
                    {
                        props.edit==='true'?<li className="nav-item size">
                        <button className="btnOutline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                        </button>
                        </li>:""
                    }
                    {
                        props.setting==='true'?<li className="nav-item size">
                        <button className="btnOutline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            </svg>
                        </button>
                        </li>:""
                    }
                    {
                        props.login==='true'?<li className="nav-item">
                        <Link className={props.black?"nav-link text-dark":"nav-link text-white"} to="/Login">Login</Link>
                        </li>:""
                    }
                    {
                        props.signup==='true'?
                        <li className="nav-item">
                                <Link className={props.black?"nav-link text-dark":"nav-link text-white"} to="/Signup">Signup</Link>
                        </li>:""
                    }
                </ul>
            </nav> 
        </>
    )
}
NavBar.defaultProps={
    edit:'false',
    setting:'false',
    black:false
}
export default NavBar
