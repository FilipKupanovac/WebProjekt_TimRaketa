//sign in, (username || email) && password
import React, { Component } from 'react'
import { serverBaseURL } from '../serverBaseURL'

//Components

//CSS

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            credentials: '',
            password: ''
        }
    }
    render() {
        let { changeCurrentTab } = this.props;
        return (
            <div className="tc">
                <h1>Sign in</h1>
                <div className="flexi form-w space-between">
                    <p>Email</p>
                    <input type="text" placeholder="enter your email"
                        onChange={(event) => { this.onInputChange(`credentials`, event) }}
                    ></input>
                </div>
                <div className="flexi form-w space-between">
                    <p>Password</p>
                    <input type="password" placeholder="enter your password"
                        onChange={(event) => { this.onInputChange(`password`, event) }}
                    ></input>
                </div>
                <button
                    onClick={() => this.trySignin()}
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
        let { credentials, password } = this.state;
        fetch(`${serverBaseURL}/signin/${credentials}/${password}`, {
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
                        this.props.loginUser(res.email)
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


export default Signin