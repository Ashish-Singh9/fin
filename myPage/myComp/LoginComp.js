import React from 'react'

function LoginComp() {
    return (
        <>
           <div id="Second">
                <form method="POST" action="/Login">
                    <h1 className="loginHead">Login</h1>
                    <input type="email" required placeholder="Email" name="email"/>
                    <input className="mt-4" type="password" required placeholder="Password" name="password"/>
                    <button className="mt-4" id="Login_Button" type="sumbit">Login</button>
                    <div className="text-center mt-3">
                      <a href="">Forgot Password</a>
                      <p>Don't have an account ? <a href="">Signup</a></p>
                    </div>
                    <div className="text-center" id="Contact">
                        <h3>Contact Me</h3>
                        <a href="" className="fa fa-github text-decoration-none text-dark"></a>
                        <a href="" className="fa fa-instagram text-decoration-none text-dark"></a>
                        <a href="" className="fa fa-twitter text-decoration-none text-dark"></a>
                        <a href="" className="fa fa-telegram text-decoration-none text-dark"></a>
                        <a href="" className="fa fa-google text-decoration-none text-dark"></a>
                    </div>
                </form>
            </div> 
        </>
    )
}

export default LoginComp
