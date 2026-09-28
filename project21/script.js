// get html elements
let taskForm=document.getElementById('taskForm');
let taskInput=document.getElementById('taskInput');
let categoryInput=document.getElementById('categoryInput');
let searchInput=document.getElementById('searchInput');
let taskList=document.getElementById('taskList');
let taskCount=document.getElementById('taskCount');
let totalTasks=document.getElementById('totalTasks');
let completedTasks=document.getElementById('completedTasks');
let pendingTasks=document.getElementById('pendingTasks');
let progressPercent=document.getElementById('progressPercent');
let progressText=document.getElementById('progressText');
let progressBar=document.getElementById('progressBar');
let loadingMessage=document.getElementById('loadingMessage');
let emptyState=document.getElementById('emptyState');
// load data
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
// save data
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
// update statistics
function updateStatistics(){
    let completed=tasks.filter(function(task){return task.completed===true;}).length;
    let pending=tasks.length-completed;
    let progress=tasks.length===0?0:(Math.round((completed/tasks.length)*100));
    totalTasks.textContent=tasks.length;
    completedTasks.textContent=completed;
    pendingTasks.textContent=pending;
    progressPercent.textContent=progress+"%";
    progressText.textContent=progress+"%";
    progressBar.style.width=progress+"%";
}
// display task
function displayTasks(taskArray){
    taskList.innerHTML="";
    taskCount.textContent=taskArray.length+(taskArray.length===1?" Task":" Tasks");
    if(taskArray.length===0){
        emptyState.style.display="block";
        return;
    }
    emptyState.style.display="none";
    taskArray.forEach(function(task){
        let card=document.createElement("div");
        card.className="task-card";
        let titleClass=task.completed?"completed-title":"";
        card.innerHTML=`
            <div class="task-info">
                <input type="checkbox" class="task-check" ${task.completed?"checked":""} onchange="toggleTask(${task.id})">
                <div class="task-details">
                    <h3 class="${titleClass}">${task.title}</h3>
                    <p>Status: ${task.completed?"Completed":"Pending"}</p>
                    <span class="task-category">${task.category}</span>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash-can"></i> Delete</button>
        `;
        taskList.appendChild(card);
    });
}
taskForm.addEventListener("submit",function(event){
    event.preventDefault();
    let task={
        id:Date.now(),
        title:taskInput.value.trim(),
        category:categoryInput.value,
        completed:false
    };
    tasks.push(task);
    saveTasks();
    taskForm.reset();
    updateStatistics();
    displayTasks(tasks);
})
function toggleTask(id){
    let task=tasks.find(function(item){
        return item.id===id;
    });
    if(!task){
        return;
    }
    task.completed=!task.completed;
    saveTasks();
    updateStatistics();
    displayTasks(getFilteredTasks());
}
function deleteTask(id){
    tasks=tasks.filter(function(task){
        return task.id!==id;
    });
    saveTasks();
    updateStatistics();
    displayTasks(getFilteredTasks());
}
function getFilteredTasks(){
    let searchText=searchInput.value.trim().toLowerCase();
    return tasks.filter(function(task){
        let title=task.title.toLowerCase();
        let category=task.category.toLowerCase();
        return title.includes(searchText)||category.includes(searchText);
    });
}
searchInput.addEventListener("input",function(){
    displayTasks(getFilteredTasks());
});
function loadTasks(){
    loadingMessage.style.display="block";
    taskList.style.display="block";
    emptyState.style.display="none";
    setTimeout(function(){
        loadingMessage.style.display="none";
        taskList.style.display="flex";
        displayTasks(getFilteredTasks());
        updateStatistics();
    },1000)
}
loadTasks();