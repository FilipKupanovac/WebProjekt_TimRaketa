//register new user, username, email and password required
import React from 'react'
//Components

//CSS

const Register = () => {
    return(
        <div className="tc">
            <h1>Register</h1>
            <div className="flexi">
                <p>Email</p>
                <input type="email" placeholder="enter your email"></input>
            </div>
            <div className="flexi">
                <p>Username</p>
                <input type="text" placeholder="enter your username"></input>
            </div>
            <div className="flexi">
                <p>Password</p>
                <input type="password" placeholder="enter your password"></input>
            </div>
            <button>Register</button>
            <div className="flexi">
                <p>Already a trainer?
                    <a href="www.google.com" target="_blank">Sign in</a>
                </p>
            </div>
        </div>
    )
}

export default Register