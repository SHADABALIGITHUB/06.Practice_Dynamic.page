import {initializeApp} from 'firebase/app';
import { createContext,ReactNode, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase,set,ref } from 'firebase/database';
import { UserCredential } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGE,
    appId: import.meta.env.VITE_APP_ID,
   };

   type AuthContextType = {
    FirebaseRegister: (email: string, password: string) => Promise<Boolean>;
    FirebaseDatabaseSet: (key: string, data: string) => Promise<void>;
    FirebaseLogin: (email: string, password: string) => Promise<UserCredential>;
  };




const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const FirebaseDatabase = getDatabase(FirebaseApp);



const FirebaseContext = createContext<AuthContextType|null> (null);

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
      throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
  }




export const FirebaseProvider = ({children}:{children:ReactNode}) => {
   

     const FirebaseRegister=async(email:string,password:string)=>{
        try {
            await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            
            return true;

          } catch (error) {
             return false;
          }
            
        }

        const FirebaseDatabaseSet=async(key:string,data:string)=>{
            try {
                await set(ref(FirebaseDatabase, key), data);
              }
                catch (error) {
                    console.error("Database error:", error);
                    throw error; // Rethrow the error so that components using this can handle it
                    }
            

        }
        const FirebaseLogin=async(email:string,password:string):Promise<UserCredential>=>{
            try{
            const UserCredential=await signInWithEmailAndPassword(FirebaseAuth,email,password);
             return UserCredential;
            }
            catch(error){
                 
               
                throw error;
            }
        }

        
     return (

        <FirebaseContext.Provider value={{FirebaseRegister,FirebaseDatabaseSet,FirebaseLogin}}>
            {children}

        </FirebaseContext.Provider>
        

     )
 
}