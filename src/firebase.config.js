import { getApp, getApps, initializeApp }from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
                  apiKey: "AIzaSyC8laYC-73rc8UKslJlYzwnkIFlfgG2B-0",
                  authDomain: "foodorderingdemo-8a5ed.firebaseapp.com",
                  databaseURL: "https://foodorderingdemo-8a5ed-default-rtdb.firebaseio.com",
                  projectId: "foodorderingdemo-8a5ed",
                  storageBucket: "foodorderingdemo-8a5ed.appspot.com",
                  messagingSenderId: "1089686419645",
                  appId: "1:1089686419645:web:ba65e94b35e8e7ce9d9fd4"
                };


const app=getApp.length > 0 ?getApp():initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage =getStorage(app);

export { app,firestore,storage};