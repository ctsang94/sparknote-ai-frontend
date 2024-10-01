// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBSKAeek6Wzy2jhojikxMZC4CEp9iRPYis',
    authDomain: 'sparknote-aio.firebaseapp.com',
    projectId: 'sparknote-aio',
    storageBucket: 'sparknote-aio.appspot.com',
    messagingSenderId: '636310625711',
    appId: '1:636310625711:web:823f87cda434378440235a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
