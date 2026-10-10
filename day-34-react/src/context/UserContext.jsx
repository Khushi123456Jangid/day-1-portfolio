import { createContext,useState } from "react";
export let UserProvider=createContext(null);
import Navbar from "../components/Navbar";
export function UserContext({children}){
    let [studentName,setStudentName]=useState("Khushi");
    return(
        <UserProvider.Provider value={{studentName,setStudentName}}>
            {children}
        </UserProvider.Provider>
    )
}