// get html elements
let studentForm=document.getElementById('studentForm');
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let courseInput=document.getElementById('courseInput');
let marksInput=document.getElementById('marksInput');
let searchInput=document.getElementById('searchInput');
let courseFilter=document.getElementById('courseFilter');
let sortSelect=document.getElementById('sortSelect');
let studentList=document.getElementById('studentList');
let emptyState=document.getElementById('emptyState');
let loadingMessage=document.getElementById('loadingMessage');
let totalStudents=document.getElementById('totalStudents');
let averageMarks=document.getElementById('averageMarks');
let highestMarks=document.getElementById('highestMarks');
let passedStudents=document.getElementById('passedStudents');
let submitBtn=document.getElementById('submitBtn');
let cancelBtn=document.getElementById('cancelBtn');
let formTitle=document.getElementById('formTitle');
// Data
let students=JSON.parse(localStorage.getItem('students'))||[];
let editId=null;
// save data
function saveStudents(){
    localStorage.setItem("students",JSON.stringify(students));
}
// statistics
function updateStatistics(){
    totalStudents.textContent=students.length;
    if(students.length===0){
        averageMarks.textContent="0";
        highestMarks.textContent="0";
        passedStudents.textContent="0";
        return;
    }
    let totalMarks=students.reduce(function(total,student){
        return total+student.marks;
    },0);
    let average=totalMarks/students.length;
    let highest=Math.max.apply(null,students.map(function(student){
        return student.marks;
    }));
    let passed=students.filter(function(student){
        return student.marks>=40;
    }).length;
    averageMarks.textContent=average.toFixed(1);
    highestMarks.textContent=highest;
    passedStudents.textContent=passed;
}
function displayStudents(studentArray){
    studentList.innerHTML='';
    if(studentArray.length===0){
        emptyState.style.display="block";
        return;
    }
    emptyState.style.display="none";
    studentArray.forEach(function(student){
        let card=document.createElement("article");
        card.className="student-card";
        let status=student.marks>=40?"Passed":"Failed";
        let statusClass=student.marks>=40?"passed":"failed";
        card.innerHTML=`
            <div class="student-top">
                <div>
                    <h3>${student.name}</h3>
                    <p class="student-email">${student.email}</p>
                </div>
                <span class="course-badge">${student.course}</span>
            </div>
            <div class="marks">${student.marks}</div>
            <p class="status ${statusClass}">${status}</p>
            <div class="card-actions">
                <button class="edit-btn" onclick="editStudent(${student.id})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </div>
        `;
        studentList.appendChild(card);
    });
}
function getProcessedStudents(){
    let searchText=searchInput.value.trim().toLowerCase();
    let selectedCourse=courseFilter.value;
    let result=students.filter(function(student){
        let name=student.name.toLowerCase();
        let email=student.email.toLowerCase();
        let matchSearch=name.includes(searchText)||email.includes(searchText);
        let matchCourse=selectedCourse==="all"||student.course===selectedCourse;
        return (matchSearch && matchCourse);
    });
    if(sortSelect.value==="high"){
        result.sort(function(a,b){
            return b.marks-a.marks;
        });
    }
    if(sortSelect.value==="low"){
        result.sort(function(a,b){
            return a.marks-b.marks;
        });
    }
    return result;
}
function refreshStudents(){
    displayStudents(getProcessedStudents());
    updateStatistics();
}
studentForm.addEventListener("submit",function(event){
    event.preventDefault();
    let name=nameInput.value.trim();
    let email=emailInput.value.trim();
    let course=courseInput.value;
    let marks=Number(marksInput.value);
    if(name===""||email===""||course===""||marks<0||marks>100){
        alert("Please enter valid student values.");
        return;
    }
    let student={
        id:editId!==null?editId:Date.now(),
        name:name,
        email:email,
        course:course,
        marks:marks
    };
    if(editId!==null){
        let index=students.findIndex(function(item){
            return item.id===editId;
        });
        if(index!==-1){
            students[index]=student;
        }
    }
    else{
        students.push(student);
    }
    saveStudents();
    studentForm.reset();
    editId=null;
    submitBtn.textContent="Add Student";
    formTitle.textContent="Add Student";
    refreshStudents();
});
function editStudent(id){
    let student=students.find(function(item){
        return item.id===id;
    });
    if(!student){
        return;
    }
    nameInput.value=student.name;
    emailInput.value=student.email;
    courseInput.value=student.course;
    marksInput.value=student.marks;
    editId=id;
    submitBtn.textContent="Update Student";
    formTitle.textContent="Update Student";
    window.scrollTo({
        top:250,
        behavior:"smooth"
    });
}
function deleteStudent(id){
    students=students.filter(function(student){
        return student.id!==id;
    });
    saveStudents();
    refreshStudents();
}
cancelBtn.addEventListener("click",function(){
    studentForm.reset();
    editId=null;
    submitBtn.textContent="Add Student";
    formTitle.textContent="Add Student";
});
searchInput.addEventListener("input",function(){
    refreshStudents();
});
courseFilter.addEventListener("change",function(){
    refreshStudents();
});
sortSelect.addEventListener("change",function(){
    refreshStudents();
});
function loadDashboard(){
    loadingMessage.style.display="block";
    studentList.style.display="none";
    emptyState.style.display="none";
    setTimeout(function(){
        loadingMessage.style.display="none"
        studentList.style.display="grid"
        refreshStudents();
    },1000)
}
loadDashboard();