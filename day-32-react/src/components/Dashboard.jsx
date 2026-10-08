import { useContext } from "react";
import UserContext from "../context/UserContext";
function Dashboard(){
    let user=useContext(UserContext);
    return(
        <section className="dashboard">
            <div className="dashboard-heading">
                <p>YOUR DASHBOARD</p>
                <h2>Welcome back, {user.name} 👋</h2>
            </div>
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <span>👤</span>
                    <h3>{user.name}</h3>
                    <p>Current User</p>
                </div>
                <div className="dashboard-card">
                    <span>💻</span>
                    <h3>{user.role}</h3>
                    <p>Your Role</p>
                </div>
                <div className="dashboard-card">
                    <span>🟢</span>
                    <h3>{user.status}</h3>
                    <p>Account Status</p>
                </div>
            </div>
        </section>
    )
}
export default Dashboard;
