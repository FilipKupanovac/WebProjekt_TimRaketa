//sign in, (username || email) && password
import React, {Component} from 'react'
//Components

//CSS

class Signin extends Component {
    render(){
        let {changeCurrentTab} = this.props;
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
                <p className="flexi">New trainer?
                    <p className="linker"
                        onClick={() => changeCurrentTab('register')}
                    >Register</p>
                </p>
            </div>
        )
    }
}
    

export default Signin