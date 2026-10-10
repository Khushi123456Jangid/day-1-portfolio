import { useState,useRef,useEffect } from 'react'
import { UserContext } from './context/UserContext';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './App.css'

function App() {
 let [tasks,setTasks]=useState(function(){
  let savedTasks=localStorage.getItem("studyTasks");
  if(savedTasks){
    try{
      return JSON.parse(savedTasks)
    }catch{
      return [];
    }
  }
  return [];
 });
 let [task,setTask]=useState("");
 let inputRef=useRef(null);
 useEffect(function(){localStorage.setItem('studyTasks',JSON.stringify(tasks))},[tasks])
 function addTask(){
  if(task.trim()===""){
    return;
  }
  let newTask={
    id:Date.now(),
    title:task,
    completed:false
  }
  setTasks([...tasks,newTask]);
  setTask("");
  inputRef.current.focus();
 };
 function toggleTask(id){
  let updatedTask=tasks.map(function(task){
    if(task.id===id){
      return{...task,completed:!task.completed};
    }
    return task;
  });
  setTasks(updatedTask);
 };
 function deleteTask(id){
  setTasks(tasks.filter(function(task){
    return task.id!==id;
  }));
 };
//  main content
return(
  <UserContext>
  <div className='app'>
    <Navbar/>
    <header>
      <p className='eyebrow'>MY DAILY PROGRESS</p>
      <h1>Study Planer 📚</h1>
      <p>Small steps every day leads to big achievements</p>
    </header>
    <section className='summary'>
      <div>
        <span>Total tasks:</span>
        <h2>{tasks.length}</h2>
      </div>
      <div>
        <span>Completed</span>
        <h2>{tasks.filter(function(item){return item.completed===true}).length}</h2>
      </div>
    </section>
    <section className='task-panel'>
      <h2>Today's task</h2>
      <div className='task-form'>
        <input ref={inputRef} type="text" placeholder='Enter the task...' value={task} onChange={function(event){setTask(event.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length===0?(
        <p className='empty'>No task yet.Add your first study goal!</p>
      ):(
        <ul>{tasks.map(function(item){
          return(
          <li key={item.id}>
            <label className={item.completed?"done":""}>
              <input type="checkbox" checked={item.completed} onChange={function(){toggleTask(item.id)}}/>
              {item.title}
            </label>
            <button onClick={function(){deleteTask(item.id)}} className='delete'>
              Delete
            </button>
          </li>);
        })}</ul>
      )}
    </section>
    <Profile/>
  </div>
  </UserContext>
)
}

export default App
