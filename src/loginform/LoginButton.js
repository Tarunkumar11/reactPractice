import React from 'react'
import './LoginButton.css'

function LoginButton(props) {
    return (
        <div className="login-button">
            <button type="submit" id={props.id} >{props.text}</button>
        </div>
    )
}

export default LoginButton;