import { UserProvider } from "../context/UserContext";
import { useContext } from "react";
function Profile(){
    let {studentName,setStudentName}=useContext(UserProvider);
    return(
        <section>
            <h2>Student Profile</h2>
            <p>Current Name: {studentName}</p>
            <button onClick={function(){setStudentName("Khushi Jangid")}}>Update Name</button>
        </section>
    )
}
export default Profile;