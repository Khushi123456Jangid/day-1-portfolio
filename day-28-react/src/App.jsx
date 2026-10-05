import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard'
function App() {
 let [formData,setFormData]=useState({
    name:"",email:"",course:""
 });
 let [student,setStudent]=useState([]);
 let [searchText,setSearchText]=useState("");
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
        alert('Please fill all the fields!');
        return;
    }
    let newStudent={
        id:Date.now(),name:formData.name,email:formData.email,course:formData.course
    };
    setStudent([...student,newStudent]);
    setFormData({name:"",email:"",course:"course"});
 }
 function handleDelete(id){
    setStudent(student.filter(function(stu){
        return stu.id!==id;
    }));
 }
 let filteredStudent=student.filter(function(stu){
    let name=stu.name.toLowerCase();
    let course=stu.course.toLowerCase();
    let search=searchText.toLowerCase();
    return(name.includes(search)||course.includes(search));
 });
//  ui
return(
    <main className='app'>
        {/* hero */}
        <header className='hero'>
            <p className='eyebrow'>REACT DAY 28</p>
            <h1>Student Search Dashboard</h1>
            <p>Add, search and manage student.</p>
        </header>
        {/* registration from */}
        <section className='form-section'>
            <form className='student-form' onSubmit={handleSubmit}>
                <h2>ADD STUDENT</h2>
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
                    <select name="course" onChange={handleChange} value={formData.course}>
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
        {/* student list */}
        <section className='students-section'>
            <div className='section-header'>
                <div>
                    <p className='section-label'>STUDENT DIRECTORY</p>
                    <h2>Students</h2>
                </div>
                <span className='student-count'>{student.length}{" "}{student.length===1?"Student":"Students"}</span>
            </div>
            {/* search box */}
            <div className='search-box'>
                <span className='search-icon'>🔍</span>
                <input type="text" value={searchText} onChange={handleSearch} placeholder='Search by name or course...'/>
            </div>
            {/* CONDITIONAL RENDERING */}
            {student.length===0?(<div className='empty-state'>
                <div className='empty-icon'>🎓</div>
                <h3>No student yet</h3>
                <p>Add your first student using the form above.</p>
            </div>)
            :
            filteredStudent.length===0?(<div className='empty-state'>
                <div className='empty-icon'>🔍</div>
                <h3>No result found</h3>
                <p>Try searching with another name or course.</p>
            </div>):(
                <div className='student-grid'>
                    {filteredStudent.map(function(stu){
                        return(
                            <StudentCard student={stu} key={stu.id} onDelete={function(){handleDelete(stu.id);}}/>
                        );
                    })}
                </div>
            )}
        </section>
    </main>
)
}

export default App
