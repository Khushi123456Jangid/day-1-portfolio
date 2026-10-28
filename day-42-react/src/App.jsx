import { useState,useEffect } from 'react'
import './App.css'

function App() {
  let [taskInput,setTaskInput]=useState("")
  let [tasks,setTasks]=useState(function(){
    let savedTask=localStorage.getItem("studyTasks")
    if(savedTask){
        return JSON.parse(savedTask)
    }
    return[];
  });
  useEffect(
    function(){
        localStorage.setItem("studyTasks",JSON.stringify(tasks))
    },[tasks]
  )
  function addTask(){
    if(taskInput.trim()===""){
        return;
    }
    let newTask={
        id:Date.now(),
        text:taskInput
    }
    setTasks([
        ...tasks,newTask
    ]);
    setTaskInput("")
  }
  function deleteTask(id){
    let updateTasks=tasks.filter(function(task){
        return task.id!==id;
    })
    setTasks(updateTasks)
  }
  return(
    <div className='dashboard'>
        <h1>📚 Study Dashboard</h1>
        <p className='subtitle'>React Hooks Revision Project</p>
        <div className='input-section'>
            <input type="text" value={taskInput} onChange={function(event){
                setTaskInput(event.target.value)
            }} />
            <button onClick={addTask}>Add Task</button>
        </div>
        <h2>My Study Task</h2>
        {
            tasks.length===0?(
                <p className='empty'>No study tasks empty</p>
            ):(
                <div className='task-list'>
                    {tasks.map(function(task){
                        return(
                        <div key={task.id} className='task'>
                            <span>{task.text}</span>
                            <button onClick={function(){
                                deleteTask(task.id)
                            }} className='delete-btn'>Delete</button>
                        </div>)
                    })}
                </div>
            )
        }
    </div>
  )
}

export default App
