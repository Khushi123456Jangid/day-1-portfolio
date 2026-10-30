import { useContext,useState,createContext } from "react";
let ThemeContext=createContext();
export function ThemeProvider({children}){
    let [theme,setTheme]=useState("light");
    function toggleTheme(){
        setTheme(function(currentTheme){
            return currentTheme==="light"?"dark":"light"
        })
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export function useTheme(){
    return useContext(ThemeContext);
}