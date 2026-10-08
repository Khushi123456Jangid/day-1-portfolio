import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile(){
    let user=useContext(UserContext);
    return(
        <section className="profile-card">
            <h2>User Profile</h2>
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Role: </strong>{user.role}</p>
            <p><strong>Status: </strong>{user.status}</p>
        </section>
    )
}
export default Profile;
