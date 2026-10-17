import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function ThemeCard(){
    let {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <div className={`theme-card ${theme}`}>
            <h2>React context API</h2>
            <p>Current Theme : {theme}</p>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    )
}
export default ThemeCard;