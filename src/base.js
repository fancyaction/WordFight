import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAKX1-id6F0r8dt1CC_GX6J_6RIPoEQR8Y",
    authDomain: "word-fight-203618.firebaseapp.com",
    databaseURL: "https://word-fight-203618.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
