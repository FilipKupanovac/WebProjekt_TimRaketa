//sign in, (username || email) && password
import React, { Component } from 'react'
//Components
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
                    <p>Username</p>
                    <input type="text" placeholder="enter your username or email"
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
        //for mock signin only requirements are credentials length > 5 and password = `pokedex`
        let { credentials, password } = this.state;
        if (credentials.length > 5) {
            var firebaseConfig = {
                apiKey: "AIzaSyB3chaZc-TREtoMZAgRemjuUozwKXK5xn0",
                authDomain: "pokedex-4235c.firebaseapp.com",
                projectId: "pokedex-4235c",
                storageBucket: "pokedex-4235c.appspot.com",
                messagingSenderId: "873604095463",
                appId: "1:873604095463:web:91252982f92892a26db142",
                measurementId: "G-B8L1LHXNWM"
            };
            var firebaseApp = initializeApp(firebaseConfig)
            let auth = getAuth();
            var email = credentials
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user.email;
                    this.props.loginUser(user.split("@")[0]);
                    this.props.changeCurrentTab('pokedex')
                    console.log("made it");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("ERROR:" + errorMessage);
                });

        }
    }

    onInputChange = (key, event) => {
        // console.log(`SET ${key} as: ${event.target.value}`)
        this.setState({ [key]: event.target.value })
    }
}


export default Signin