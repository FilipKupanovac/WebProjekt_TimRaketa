import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const Register = () => {

    async function tryRegister(email, password) {

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

        if (email !== '' && email.includes("@")) {
            let auth = getAuth();
            // try {
                return createUserWithEmailAndPassword(auth, email, password)
                .then(function (credentials) {
                    return credentials.user
                }, function (error) {
                    return error
                }
                )
                // .then(res => res.json())
                // .then(res => {
                //     return res
                // })

                // Signed in 
                // const email_1 = userCredential.user.email;
                // console.log(email_1);
                //  userCredential
            // } catch (error) {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     return errorMessage
            // }

        }
    }

    return{
        tryRegister
    }

}

