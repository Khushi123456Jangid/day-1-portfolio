import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard'
function App() {
 let [formData,setFormData]=useState({name:"",email:"",age:"",department:"",city:""});
 let [employee,setEmployee]=useState([]);
 function handleChange(event) {
  let {name,value}=event.target;
  setFormData({...formData,[name]:value})
 }
 function handleSubmit(event){
  event.preventDefault();
  if(!formData.name||!formData.email||!formData.age||!formData.department||!formData.city){
    alert("Please enter every valid value");
    return;
  }
  let newEmployee={
    id:Date.now(),
    name:formData.name,
    email:formData.email,
    age:formData.age,
    department:formData.department,
    city:formData.city
  };
  setEmployee([...employee,newEmployee])
  setFormData({
    name:"",email:"",age:"",department:"",city:""
  })
 }
 function deleteEmployee(id){
  setEmployee(
    employee.filter(function(emp){
      return emp.id!==id
    })
  );
 }
 return(
  <main className='app'>
    {/* hero */}
    <header className='hero'>
      <p className='eyebrow'>REACT DAY 25</p>
      <h1>Employee Registration</h1>
      <p>Practice React forms, state, objects, arrays, props and events.</p>
    </header>
    {/* registration form */}
    <section className='registration-section'>
      <form className='employee-from' onSubmit={handleSubmit}>
        <h2>Register Employee</h2>
        <div className='from-group'>
          <label>Full Name</label>
          <input type="text" value={formData.name} name='name' placeholder='Enter the employee name' onChange={handleChange}/>
        </div>
        <div className='from-group'>
          <label>Email</label>
          <input type="email" value={formData.email} name='email' placeholder='Enter email' onChange={handleChange}/>
        </div>
        <div className='form-row'>
          <div className='from-group'>
            <label>Age</label>
            <input type="number" value={formData.age} name='age' placeholder='Enter age' onChange={handleChange}/>
          </div>
          <div className='from-group'>
            <label>City</label>
            <input type="text" value={formData.city} name='city' placeholder='Enter city' onChange={handleChange}/>
          </div>
        </div>
        <div className='from-group'>
          <label>Department</label>
          <select name='department' value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="Java Department">Java Department</option>
            <option value="Frontend Department">Frontend Department</option>
            <option value="Backend Department">Backend Department</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
        <button type='submit' className='register-btn'>Register Employee</button>
      </form>
    </section>
    {/* Employee list */}
    <section className='employee-section'>
      <div className='section-header'>
        <div>
          <p className='section-label'>Team</p>
          <h2>Registered Employee</h2>
        </div>
        <span className='employee-count'>
          {employee.length}
          {""}
          {employee.length===1?"Employee":"Employees"}
        </span>
      </div>
      {/* emplty state */}
      {employee.length===0?(
        <div className='empty-state'>
          <div className='employee-icon'></div>
          <h2>No Employee Yet</h2>
          <p>Register your first employee using the form above.</p>
        </div>
      ):(<div className='employee-grid'>
        {employee.map(function(emp){
          return (<EmployeeCard key={emp.id} employee={emp} onDelete={deleteEmployee}/>)
        })}
      </div>)}
    </section>
  </main>
 )
}

export default App
