
import { createContext,Dispatch,SetStateAction } from "react";

export type UserType={
    email:string|null;
    password?:string;
    username?:string;
}
export type UserContextType = {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
  };

export const UserContext=createContext<UserContextType>({
    user:{
        email:"",
        password:"",
        username:""
    },
    setUser:()=>{}
}
);

