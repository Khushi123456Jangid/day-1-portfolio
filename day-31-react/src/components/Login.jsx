function Login({onLogin,onClose}){
    function handleSubmit(event){
        event.preventDefault();
        onLogin();
    }
    return(
        <div className="login-overlay">
            <div className="login-modal">
                <button onClick={onClose} className="close-btn">X</button>
                <p>Welcome Back!</p>
                <h2>Login to Luma market</h2>
                <p className="login-description">Sign in to manage your shopping experience.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter user email..." required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter the valid password" required/>
                    </div>
                    <button type="submit" className="login-submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;