import { useState } from "react";
function Login({onLogin,onClose}){
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('')
    function handleSubmit(event){
        event.preventDefault();
        if(!email||!password){
            alert('Please fill all the field');
            return;
        }
        onLogin();
    }
    return(
        <div className="modal-overlay">
            <div className="login-modal">
                <button onClick={onClose} className="close-modal">×</button>
                <div className="login-icon">✦</div>
                <p className="modal-label">WELCOME BACK</p>
                <h2>Sign in to NOVA</h2>
                <p className="modal-description">Access your account and continue shopping.</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="email" value={email} onChange={function(event){setEmail(event.target.value);}}  placeholder="xyz@gmail.com"/>
                    <label>Password</label>
                    <input type="password" value={password} onChange={function(event){setPassword(event.target.value);}} placeholder="Enter password"/>
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}
export default Login;