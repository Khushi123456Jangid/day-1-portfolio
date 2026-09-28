let tasks=[];
let taskInput=document.getElementById('taskInput');
let addButton=document.getElementById('addButton');
let taskList=document.getElementById('taskList');
let message=document.getElementById('message');
// function
addButton.addEventListener('click',function(){
    let taskName=taskInput.value.trim();
    if(taskName===""){
        message.textContent="Please enter the task";
        return;
    }
    let task={
        name: taskName,
        completed:false
    }
    tasks.push(task);
    taskInput.value="";
    message.textContent="";
    displayTasks();
});
function displayTasks(){
    taskList.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        let task=tasks[i];
        taskList.innerHTML +=`
            <div class="task">
                <span>${task.name}</span>
                <button class="delete-btn" onclick="deleteTask(${i})">
                    Delete
                </button>
            </div>
        `
    }
}
function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();
}