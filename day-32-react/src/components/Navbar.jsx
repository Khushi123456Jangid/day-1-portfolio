import { useContext } from "react";
import UserContext from "../context/UserContext";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
function Navbar(){
    let user=useContext(UserContext);
    return(
        <nav>
            <h2>LUMA</h2>
            <div>
                <a href="#">Home</a>
                <a href="#">Dashboard</a>
                <a href="#">Profile</a>
            </div>
            <p>{user.name} | {user.role}</p>
        </nav>
    )
}
export default Navbar;