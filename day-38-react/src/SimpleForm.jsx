import { useState } from "react";
function SimpleForm(){
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [error,setError]=useState("");
    let [success,setSuccess]=useState("");
    function handleSubmit(event){
        event.preventDefault()
        setError("")
        setSuccess("")
        if(name.trim()===""){
            setError("Enter the student name!")
            return;
        }
        if(email.trim()===""){
            setError("Enter the email!")
            return;
        }
        if(!email.includes("@") || !email.includes(".")){
            setError("Please enter valid email!")
            return;
        }
        setSuccess("Form submitted");
    }
    function clearForm(){
        setEmail("")
        setError("")
        setName("")
        setSuccess("")
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-card">
                    <label htmlFor="studentName">Name</label>
                    <input id="studentName" maxLength={30} type="text" value={name} onChange={function(event){setName(event.target.value) 
                        setError("")
                        setSuccess("")}} placeholder="Enter the student name" />
                </div>
                <div className="form-card">
                    <label htmlFor="studentEmail">Email</label>
                    <input id="studentEmail" type="email" value={email} onChange={function(event){setEmail(event.target.value)
                        setError("")
                        setSuccess("")
                    }} placeholder="Enter email"/>
                </div>
                <div className="form-buttons">
                    <button type="submit" disabled={!name.trim() || !email.trim()} className="btn">Submit</button>
                    <button type="button" onClick={clearForm} >Clear Form</button>
                </div>
            </form>
            <div className="info-card">
                <h1 className="name">Hello, {name}</h1>
                <p className="email">Email Address : {email}</p>
                <p className="character-count">Character : {name.length}/30</p>
                {error && (
                    <p className="error">{error}</p>
                )}
                {
                    success && (
                        <p className="success">{success}</p>
                    )
                }
            </div>
        </div>
    )
}
export default SimpleForm;