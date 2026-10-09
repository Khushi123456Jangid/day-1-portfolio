import { useState ,useRef,useEffect} from 'react'
import './App.css'

function App() {
  let taskInputRef=useRef(null);
  let [taskText,setTaskText]=useState();
  let [tasks,setTasks]=useState([]);
  useEffect(function(){
    taskInputRef.current.focus();
  },[]);
  function addTask(){
    if(taskText.trim()===""){
      taskInputRef.current.focus();
      return;
    }
    setTasks([...tasks,taskText.trim()]);
    setTaskText("")
    taskInputRef.current.focus();
  }
  function deleteTask(indexToDelete){
    setTasks(tasks.filter(function(task,index){
      return index!==indexToDelete;
    }))
  }
  return(
    <main className='app'>
      <h1>FocusFlow</h1>
      <p>Your day,organized.</p>
      <div className='task-form'>
        <input type="text" ref={taskInputRef} value={taskText} onChange={function(event){setTaskText(event.target.value)}} 
          onKeyDown={function(event){if(event.key==='Enter'){
            addTask()
          }}}
          placeholder='Enter task'
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <section className='task-list'>
        <h2>My tasks {tasks.length}</h2>
        {tasks.length===0?(
          <p className='empty-message'>No task yet</p>
        ):(
          tasks.map(function(task,index){
            return(
              <article className='task-item' key={index}>
                <span>{task}</span>
                <button onClick={function(){deleteTask(index)}} className='delete-btn'>Delete</button>
              </article>
            );
          })
        )}
      </section>
    </main>
  )
}

export default App
