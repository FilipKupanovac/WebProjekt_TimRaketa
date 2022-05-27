//sign in, (username || email) && password
import React, {Component} from 'react'
//Components

//CSS

class Signin extends Component {
    constructor(){
        super();
        this.state = {
            credentials : '',
            password : ''
        }
    }
    render(){
        let {changeCurrentTab} = this.props;
        return(
            <div className="tc">
                <h1>Sign in</h1>
                <div className="flexi form-w space-between">
                    <p>Username</p>
                    <input type="text" placeholder="enter your username or email"
                    onChange={(event) => {this.onInputChange(`credentials`, event)}}
                    ></input>
                </div>
                <div className="flexi form-w space-between">
                    <p>Password</p>
                    <input type="password" placeholder="enter your password"
                    onChange={(event) => {this.onInputChange(`password`, event)}}
                    ></input>
                </div>
                <button
                    onClick={()=> this.trySignin()}
                >Sign in</button>
                <p className="flexi">New trainer?
                    <p className="linker"
                        onClick={() => changeCurrentTab('register')}
                    >Register</p>
                </p>
            </div>
        )
    }

    trySignin = () => {
        //for mock signin only requirements are credentials length > 5 and password = `pokedex`
        let {credentials,password} = this.state;
        if(credentials.length > 5 && password === 'pokedex'){
            this.props.loginUser(credentials);
            this.props.changeCurrentTab('pokedex')
        }
    }

    onInputChange = (key, event) => {
        console.log(`SET ${key} as: ${event.target.value}`)
        this.setState({[key] : event.target.value})
    }
}
    

export default Signin