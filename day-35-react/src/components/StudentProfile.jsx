import useName from "../hooks/useName";
import React from "react";
function StudentProfile(){
    let [name,updateName]=useName("Khuhsi")
    let [course,setCourse]=React.useState("Computer Science")
    let [year,setYear]=React.useState("4th sem")
    return(
        <section className="profile-card">
            <div className="avatar">🎓</div>
            <h2>{name || "Student Name"}</h2>
            <p>{course}</p>
            <p>{year}</p>
            <label>Student Name</label>
            <input type="text" value={name} onChange={function(event){updateName(event.target.value)}} placeholder="Enter student name..."/>
            <label>Course</label>
            <input type="text" value={course} onChange={function(event){setCourse(event.target.value)}} placeholder="eg. Btech,BCA"/>
            <label>Year</label>
            <select value={year} onChange={function(event){setYear(event.target.value)}}>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
            </select>
        </section>
    )
}
export default StudentProfile;