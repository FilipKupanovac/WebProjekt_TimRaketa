//register new user, username, email and password required
import React, { Component } from 'react'
import { serverBaseURL } from '../serverBaseURL'

//Components

//CSS

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }
    render() {
        let { changeCurrentTab } = this.props
        return (
            <div className="tc">
                <h1>Register</h1>
                <div className="flexi form-w space-between">
                    <p>Email</p>
                    <input type="email" placeholder="enter your email"
                        onChange={(event) => { this.onInputChange(`email`, event) }}
                    ></input>
                </div>
                <div className="flexi form-w space-between">
                    <p>Password</p>
                    <input type="password" placeholder="enter your password"
                        onChange={(event) => { this.onInputChange(`password`, event) }}
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
        let { email, password } = this.state;
        console.log(email);
        fetch(`${serverBaseURL}/register/${email}/${password}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 7, str: 'Some string: &=&' })
        }).then(res => res.json())
            .then(res => {
                if (res.name === "FirebaseError") {
                    alert(res.code)
                } else {
                    try {
                        console.log(res);
                        this.props.loginUser(res.email.split("@")[0])
                        this.props.changeCurrentTab("pokedex")
                    }
                    catch (error) {
                        console.log(error);
                    }

                }
            });
    }

    onInputChange = (key, event) => {
        this.setState({ [key]: event.target.value })
    }
}


export default Register