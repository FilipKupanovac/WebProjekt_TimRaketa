//register new user, username, email and password required
import React, {Component} from 'react'
//Components

//CSS

class Register extends Component{
    render(){
        let {changeCurrentTab} = this.props
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
                <p className="flexi">Already a trainer?
                    <p className="linker"
                        onClick={() => changeCurrentTab('signin')}
                    >Signin</p>
                </p>
            </div>
        )
    }
}
    

export default Register