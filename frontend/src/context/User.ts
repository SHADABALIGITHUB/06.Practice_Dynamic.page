
import { createContext,Dispatch,SetStateAction } from "react";

export type UserType={
    displayName?:string|null;
    email:string|null;
    phoneNumber?:string|null;
    photoURL?:string|null;
    providerId?:string|null;
    uid?:string|null;
}
export type UserContextType = {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
  };

export const UserContext=createContext<UserContextType>({
    user:{
        displayName:"",
        email:"",
        phoneNumber:"",
        photoURL:"",
        providerId:"",
        uid:"",

  },
    setUser:()=>{}
}
);

