import { useState } from 'react'
import StudentCard from './components/StudentCard'
import './App.css'
function App() {
  let [formdata,setFormdata]=useState({
    name:"",
    email:"",
    age:"",
    course:"",
    city:""
  });
  let [student,setStudent]=useState([]);
  function handleChange(event){
    let {name,value}=event.target;
    setFormdata({
      ...formdata,[name]:value
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    if(!formdata.name || !formdata.email || !formdata.age || !formdata.course || !formdata.city){
      alert('Please fill all the fields!')
      return;
    }
    let newStudent={
      id:Date.now(),
      name:formdata.name,
      email:formdata.email,
      age:formdata.age,
      course:formdata.course,
      city:formdata.city,
    }
    setStudent([...student,newStudent]);
    setFormdata({
      name:"",
      email:"",
      age:"",
      course:"",
      city:""
    });
  }
  function deleteStudent(id){
    setStudent(
      student.filter(function(stu){
        return stu.id!==id;
      })
    );
  }
  return(
    <main className='app'>
      <header className='hero'>
        <p className='eyebrow'>DAY 24 REACT</p>
        <h1>Student Registration</h1>
        <p>Register student using react state.</p>
      </header>
      <section className='registration-section'>
        <form className='student-form' onSubmit={handleSubmit}>
          <h2>Student Registration</h2>
          <div className='form-group'>
            <label>Full Name</label>
            <input type="text" name="name" placeholder='Enter the student name' value={formdata.name} onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type="email" name='email' placeholder='Enter the email' value={formdata.email} onChange={handleChange} />
          </div>
          <div className='form-raw'>
            <div className='form-group'>
              <label>Age</label>
              <input type="number" name='age' placeholder='Enter age' value={formdata.age} onChange={handleChange}/>
            </div>
            <div className='form-group'>
              <label>City</label>
              <input type="text" name='city' placeholder='Enter the city' value={formdata.city} onChange={handleChange}/>
            </div>
          </div>
          <div className='form-group'>
            <label>Course</label>
            <select name="course" value={formdata.course} onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="B.Tech CSE">B.Tech CSE</option>
              <option value="B.Tech AI">B.Tech AI</option>
              <option value="B.Tech IT">B.Tech IT</option>
              <option value="B.Tech ECE">B.Tech ECE</option>
            </select>
          </div>
          <button className='register-btn' type='submit'>Register Student</button>
        </form>
      </section>
      <section className='students-section'>
        <div className='section-header'>
          <h2>Register Student</h2>
          <span>{student.length} Student{student.length !==1 && "s"}</span>
        </div>
        {student.length===0?(<div className='empty-state'>
            <p>No students registered yet</p>
          </div>):(
          <div className='student-grid'>
            {student.map(function(stu){
              return(<StudentCard
                key={stu.id}
                student={stu}
                onDelete={function(){
                  deleteStudent(stu.id)
                }}
              />)
            })}
          </div>)}
      </section>
    </main>
  );
}

export default App
