import { UserProvider } from "../context/UserContext";
import { useContext } from "react";
function Navbar(){
    let {studentName}=useContext(UserProvider);
    return(
        <nav>
            <h2>Study Planer 📚</h2>
            <p>Welcome, {studentName}</p>
        </nav>
    )
}
export default Navbar;