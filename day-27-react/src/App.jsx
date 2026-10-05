import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard'
function App() {
 let [formData,setFormData]=useState({name:"",course:"",email:""});
 let [students,setStudents]=useState([]);
 function handleChange(event){
    let {name,value}=event.target;
    setFormData({...formData,[name]:value});
 }
 function handleSubmit(event){
    event.preventDefault();
    if(!formData.name || !formData.course || !formData.email){
        alert('Please fill all the fields!')
        return;
    }
    let newStudent={
        id:Date.now(),
        name:formData.name,
        email:formData.email,
        course:formData.course
    };
    setStudents([...students,newStudent]);
    setFormData({
        name:"",
        email:"",
        course:""
    });
 }
 function deleteStudent(id){
    setStudents(students.filter(function(student){
        return student.id!==id;
    }));
 }
 return(
    <main className='app'>
        <header className='hero'>
            <p className='eyebrow'>REACT DAY 26</p>
            <h1>Course Enrollment</h1>
            <p>Add and manage student dynamically</p>
        </header>
        {/* form */}
        <section className='form-section'>
            <form onSubmit={handleSubmit} className='student-form'>
                <h2>Enroll Student</h2>
                <div className='form-group'>
                    <label>Student Name</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter student name'/>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter email'/>
                </div>
                <div className='form-group'>
                    <label>Course</label>
                    <select name='course' onChange={handleChange} value={formData.course}>
                        <option value="">Select Course</option>
                        <option value="B.Tech CSE">B.Tech CSE</option>
                        <option value="B.Tech IT">B.Tech IT</option>
                        <option value="B.Tech AI">B.Tech AI</option>
                        <option value="B.Tech ECE">B.Tech ECE</option>
                    </select>
                </div>
                <button type='submit' className='enroll-btn'>Enroll</button>
            </form>
        </section>
        <section className='students-section'>
            <div className='section-header'>
                <div>
                    <p className='section-label'>STUDENT</p>
                    <h2>Enroll Student</h2>
                </div>
                <span className='student-count'>
                    {students.length}
                    {" "}
                    {students.length===1?"Student":"Students"}
                </span>
            </div>
            {
                students.length===0?(
                    <div className='empty-state'>
                        <div className='empty-icon'>🎓</div>
                        <h3>No students enrolled.</h3>
                        <p>Add your first student using the form above</p>
                    </div>
                ):(
                    <div className='student-grid'>
                        {
                            students.map(function(student){
                                return(
                                    <StudentCard key={student.id} student={student} onDelete={function(){
                                        deleteStudent(student.id);
                                    }} />
                                )
                            })
                        }
                    </div>
                )
            }
        </section>
    </main>
 )
}

export default App
