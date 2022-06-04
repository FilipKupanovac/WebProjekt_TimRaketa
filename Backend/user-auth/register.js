import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


export const Register = () => {

    function tryRegister() {
        //for mock register only requirements are username length > 5 and password = `pokedex`
        let { email, username, password } = this.state;

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
        var analytics = getAnalytics(firebaseApp);

        if (email !== '' && username.length > 5 && email.includes("@")) {
            // this.props.loginUser(username);
            // this.props.changeCurrentTab('pokedex')
            let auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const email = userCredential.user.email;
                    console.log(email);
                    this.props.loginUser(email.split("@")[0]);
                    this.props.changeCurrentTab('pokedex')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ..
                });

        }
    }

}
