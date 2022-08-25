import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBat4T-zhq6-nLVRuWw9-vcfmhwtUlF2RM",
    authDomain: "app-autocafe.firebaseapp.com",
    databaseURL: "https://app-autocafe-default-rtdb.firebaseio.com",
    projectId: "app-autocafe",
    storageBucket: "app-autocafe.appspot.com",
    messagingSenderId: "606271508131",
    appId: "1:606271508131:web:a00ac909ead0e12b683916",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };