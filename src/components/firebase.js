import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = {
    apiKey: "AIzaSyAvK9jVua-gjO5S-XdoIR6ZqyI5YcJNA1o",
    authDomain: "realtimechatapp-1c1e1.firebaseapp.com",
    projectId: "realtimechatapp-1c1e1",
    storageBucket: "realtimechatapp-1c1e1.appspot.com",
    messagingSenderId: "1031547835304",
    appId: "1:1031547835304:web:d6c9b54c98ad39753a439d",
    measurementId: "G-GY2VGGLTFB"
};

const app = initializeApp(firebaseApp)
const db = getFirestore(app);

export default db;