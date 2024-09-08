import  {initializeApp} from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAZHCDJuq264KJVRUXL3Xz55cVB8aUdW5o",
  authDomain: "shad-cn.firebaseapp.com",
  databaseURL: "https://shad-cn-default-rtdb.firebaseio.com",
  projectId: "shad-cn",
  storageBucket: "shad-cn.appspot.com",
  messagingSenderId: "56861098157",
  appId: "1:56861098157:web:d8211d3f56fa0511c2c624",
 };

export const app = initializeApp(firebaseConfig);

