import firebase from 'firebase';
import "firebase/storage";

    // Your Credentials
    const firebaseConfig = {
        apiKey: "AIzaSyB_uZAjqSgKpPku3wa0ndBj28G0lHqUffk",
        authDomain: "schoolfind-e535a.firebaseapp.com",
        projectId: "schoolfind-e535a",
        storageBucket: "schoolfind-e535a.appspot.com",
        messagingSenderId: "51615042014",
        appId: "1:51615042014:web:5c2eb24cd50573e641354f",
        measurementId: "G-LKZ7NKL60Q"
      };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage, firebase as default };