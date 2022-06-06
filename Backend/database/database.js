import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

export const Database = () => {

    var firebaseConfig = {
        apiKey: "AIzaSyB3chaZc-TREtoMZAgRemjuUozwKXK5xn0",
        authDomain: "pokedex-4235c.firebaseapp.com",
        projectId: "pokedex-4235c",
        storageBucket: "pokedex-4235c.appspot.com",
        databaseURL: "https://pokedex-4235c-default-rtdb.europe-west1.firebasedatabase.app/",
        messagingSenderId: "873604095463",
        appId: "1:873604095463:web:91252982f92892a26db142",
        measurementId: "G-B8L1LHXNWM"
    };
    var firebaseApp = initializeApp(firebaseConfig)
    const db = getDatabase(firebaseApp);

    async function getFavorites(email) {
        let emailModified = removeIllegalChars(email)
        return get(ref(db, 'emails/' + emailModified)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return snapshot.val()
            } else {
                console.log("No data available");
                return []
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    async function putFavorites(email, pokemons) {
        let emailModified = removeIllegalChars(email)
        set(ref(db, 'emails/' + emailModified), {
            favorites: pokemons,
        });

        return get(ref(db, 'emails/' + emailModified)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return snapshot.val()
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    function removeIllegalChars(email) {
        email = email.replace(/\./g, '');
        email = email.replace(/\#/g, '');
        email = email.replace(/\$/g, '');
        email = email.replace(/\[/g, '');
        email = email.replace(/\]/g, '');
        return email
    }

    return {
        putFavorites,
        getFavorites
    }

}