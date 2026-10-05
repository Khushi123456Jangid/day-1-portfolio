import { useState,useEffect, use } from 'react'
import StudentCard from './components/StudentCard'
import './App.css'

function App() {
 let [formData,setFormData]=useState({name:"",email:"",course:""});
 let [students,setStudent]=useState([]);
 let [searchText,setSearchText]=useState("");
 useEffect(function() {
  document.title=`Students : ${students.length}`
 },[students]);
 function handleChange(event){
  let {name,value}=event.target;
  setFormData({...formData,[name]:value});
 }
 function handleSearch(event){
  setSearchText(event.target.value);
 }
 function handleSubmit(event){
  event.preventDefault();
  if(!formData.name||!formData.email||!formData.course){
    alert('Please fill all fields!');
    return
  }
  let newStudent={
    id:Date.now(),
    name:formData.name,
    email:formData.email,
    course:formData.course
  };
  setStudent([newStudent,...students]);
  setFormData({
    name:"",
    email:"",
    course:""
  });
 }
 function handleDelete(id){
  setStudent(students.filter(function(student){
    return student.id!==id;
  }));
 }
 let filteredStudent=students.filter(function(student){
  let name=student.name.trim().toLowerCase();
  let course=student.course.trim().toLowerCase();
  let search=searchText.toLowerCase();
  return (name.includes(search)||course.includes(search));
 });
 return(
  <main className='app'>
    <header className='hero'>
      <p className='eyebrow'>REACT DAY 29</p>
      <h1>Student Dashboard</h1>
      <p>Manage your student with react.</p>
    </header>
    <section className='form-section'>
      <form onSubmit={handleSubmit} className='student-form'>
        <h2>Add Student</h2>
        <div className='form-group'>
          <label>Student Name</label>
          <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter student name'/>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email'/>
        </div>
        <div className='form-group'>
          <label>Course</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="B.Tech AI">B.Tech AI</option>
            <option value="B.Tech IT">B.Tech IT</option>
            <option value="B.Tech ECE">B.Tech ECE</option>
          </select>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </section>
    <section className='students-section'>
      <div className='section-header'>
        <div>
          <p className='section-label'>
            STUDENT DIRECTORY
          </p>
          <h2>Students</h2>
        </div>
        <span className='student-count'>
          {filteredStudent.length}{" "}{filteredStudent.length===1?"Student":"Students"}
        </span>
      </div>
      <div className='search-box'>
        <span className='search-icon'>🔍</span>
        <input type="text" value={searchText} onChange={handleSearch} placeholder='Enter student name or course...'/>
      </div>
      {students.length===0?(
        <div className='empty-state'>
          <div className='empty-icon'>🎓</div>
          <h3>No student yet</h3>
          <p>Add your first student using the form above.</p>
        </div>
      ): filteredStudent.length===0?(
        <div className='empty-state'>
          <div className='empty-icon'>🔍</div>
          <h3>No result found</h3>
          <p>Try another search</p>
        </div>
      ):(
        filteredStudent.map(function(student){
          return(
            <StudentCard key={student.id} student={student} onDelete={function(){handleDelete(student.id)}}/>
          )
        })
      )}
    </section>
  </main>
 )
}

export default App
