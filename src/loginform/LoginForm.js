import React from 'react'
import './LoginForm.css'
import LoginInput from './LoginInput'
import LoginButton from './LoginButton'


function LoginForm() {
    return (
        <div className="login-form">
            <h2>LOGIN</h2>
            <form>
                <LoginInput id="email" type="email" placeholder="Enter email" SpId="email_span"/>
                <LoginInput id="password" type="password" placeholder="Enter Password" SpId="pass_span" />
                {/* <LoginInput type="text" placeholder="Phone Number" SpId="phone-span" />
                <LoginInput type="text" placeholder="Phone Number" SpId="phone-span" /> */}
                <LoginButton id='login-btn' text='Login' />
                <small className="text-muted">Forgot Password ?</small> 
                <hr className='line'></hr>
                <LoginButton id='admin-login' text='Login as Admin'  />
            </form>
        </div>
    )
}
export default LoginForm;

