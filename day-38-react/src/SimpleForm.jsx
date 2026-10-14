import { useState } from "react";
function SimpleForm(){
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        alert('Form submitted');
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-card">
                    <label htmlFor="studentName">Name</label>
                    <input id="studentName" type="text" value={name} onChange={function(event){setName(event.target.value)}} placeholder="Enter the student name"/>
                </div>
                <div className="form-card">
                    <label htmlFor="studentEmail">Email</label>
                    <input id="studentEmail" type="email" value={email} onChange={function(event){setEmail(event.target.value)}} placeholder="Enter email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="info-card">
                <h1 className="name">Hello, {name}</h1>
                <p className="email">Email Address : {email}</p>
            </div>
        </div>
    )
}
export default SimpleForm;