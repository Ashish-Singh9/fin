import React from 'react'

function EnterOtpComp() {
    return (
        <>
         <div class="card">
        <div id="Second">
            <img src="./Forgot_password.svg" alt=""/>
            <form method="POST" class="form"action="/Login">
              <h1 class="headOtp">Enter OTP</h1>
                <input type="email" required placeholder="Email" name="email"/>
                <input class="mt-4" type="password" required placeholder="4-DIGIT-OTP" name="otp"/>
                <button class="mt-4" id="Login_Button" type="sumbit"> Enter OTP</button>
                <div class="text-center mt-3" id="Contact">
                    <h3>Contact Me</h3>
                    <a href="" class="fa fa-github text-decoration-none text-dark"></a>
                    <a href="" class="fa fa-instagram text-decoration-none text-dark"></a>
                    <a href="" class="fa fa-twitter text-decoration-none text-dark"></a>
                    <a href="" class="fa fa-telegram text-decoration-none text-dark"></a>
                    <a href="" class="fa fa-google text-decoration-none text-dark"></a>
                </div>
            </form>
        </div>
    </div>   
        </>
    )
}

export default EnterOtpComp
