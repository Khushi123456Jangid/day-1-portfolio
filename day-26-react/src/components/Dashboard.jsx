function Dashboard({username,onLogout}){
    return(
        <section className="dashboard-card">
            <div className="profile-avatar">{username.charAt(0).toUpperCase()}</div>
            <p className="status">🟢 Online</p>
            <h2>Welcome, {username}! 👋</h2>
            <p className="dashboard-text">You are successfully logged in to your dashboard.</p>
            <div className="dashboard-actions">
                <button className="profile-btn">View Profile</button>
                <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
        </section>
    )
}
export default Dashboard;