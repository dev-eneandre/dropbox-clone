
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDKoBK8B-XHPRjMCeCS9usKwotKrDFRjSo",
    authDomain: "dropbox-clone-c72c6.firebaseapp.com",
    projectId: "dropbox-clone-c72c6",
    storageBucket: "dropbox-clone-c72c6.appspot.com",
    messagingSenderId: "616387675957",
    appId: "1:616387675957:web:29f31fa9b0afcd82bc2e7c"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };