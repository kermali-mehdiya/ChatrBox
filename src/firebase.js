//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuwJvbseXuARTzsqtS0Uy481bWpABgNTQ",
    authDomain: "firechat-41465.firebaseapp.com",
    projectId: "firechat-41465",
    storageBucket: "firechat-41465.appspot.com",
    messagingSenderId: "157507641283",
    appId: "1:157507641283:web:ee58ce294993eec0bc2776",
    measurementId: "G-6ESHMNQY84"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}