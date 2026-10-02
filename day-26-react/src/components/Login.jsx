function Login({onLogin}){
    return(
        <section className="login-card">
            <div className="login-icon">🔐</div>
            <h2>Welcome Back</h2>
            <p>Login to access your account</p>
            <button onClick={onLogin} className="login-btn">Login</button>
        </section> 
    )
}
export default Login;