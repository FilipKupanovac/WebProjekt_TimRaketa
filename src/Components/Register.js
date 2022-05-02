//register new user, username, email and password required
import React, {Component} from 'react'
//Components

//CSS

class Register extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            username : '',
            password : ''
        }
    }
    render(){
        let {changeCurrentTab} = this.props
        return(
            <div className="tc">
                <h1>Register</h1>
                <div className="flexi justify-center form-w">
                    <p>Email</p>
                    <input type="email" placeholder="enter your email"
                    onChange={(event) => {this.onInputChange(`email`, event)}}
                    ></input>
                </div>
                <div className="flexi justify-center form-w">
                    <p>Username</p>
                    <input type="text" placeholder="enter your username"
                    onChange={(event) => {this.onInputChange(`username`, event)}}
                    ></input>
                </div>
                <div className="flexi">
                    <p>Password</p>
                    <input type="password" placeholder="enter your password"
                    onChange={(event) => {this.onInputChange(`password`, event)}}
                    ></input>
                </div>
                <button
                    onClick={() => this.tryRegister()}
                >Register</button>
                <p className="flexi">Already a trainer?
                    <p className="linker"
                        onClick={() => changeCurrentTab('signin')}
                    >Signin</p>
                </p>
            </div>
        )
    }

    tryRegister = () => {
        //for mock register only requirements are username length > 5 and password = `pokedex`
        let {email,username,password} = this.state;
        if(email !== '' && username.length > 5 && password === 'pokedex'){
            this.props.loginUser(username);
            this.props.changeCurrentTab('pokedex')
        }
    }

    onInputChange = (key, event) => {
        console.log(`SET ${key} as: ${event.target.value}`)
        this.setState({[key] : event.target.value})
    }
}
    

export default Register