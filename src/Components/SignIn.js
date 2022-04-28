//sign in, (username || email) && password
import React from 'react'
//Components

//CSS

const Signin = () => {
    return(
        <div className="tc">
            <h1>Sign in</h1>
            <div className="flexi">
                <p>Username</p>
                <input type="text" placeholder="enter your username or email"></input>
            </div>
            <div className="flexi">
                <p>Password</p>
                <input type="password" placeholder="enter your password"></input>
            </div>
            <button>Sign in</button>
            <div className="flexi">
                <p>New trainer?
                    <a href="www.google.com" target="_blank">Register</a>
                </p>
            </div>
        </div>
    )
}

export default Signin