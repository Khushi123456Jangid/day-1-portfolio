// get html elements
let studentForm=document.getElementById('studentForm');
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let ageInput=document.getElementById('ageInput');
let courseInput=document.getElementById('courseInput');
let submitBtn=document.getElementById('submitBtn');
let cancelBtn=document.getElementById('cancelBtn');
let formTitle=document.getElementById('formTitle');
let searchInput=document.getElementById('searchInput');
let studentList=document.getElementById('studentList');
let studentCount=document.getElementById('studentCount');
let emptyState=document.getElementById('emptyState');
// load students from local storage
let students=JSON.parse(localStorage.getItem('students')) || [];
// editid
let editId=null;
// save students
function saveStudents(){
    localStorage.setItem("students",JSON.stringify(students));
}
// display students
function displayStudents(studentArray){
    studentList.innerHTML="";
    studentCount.textContent=studentArray.length+(studentArray.length===1?" Student":" Students");
    if(studentArray.length===0){
        emptyState.style.display="block";
        return;
    }
    emptyState.style.display="none";
    // display student
    studentArray.forEach(function(student){
        let card=document.createElement("div");
        card.className="student-card";
        let firstLetter=student.name.charAt(0).toUpperCase();
        card.innerHTML=`
            <div class="student-info">
                <div class="student-avatar">${firstLetter}</div>
                <div class="student-detail">
                    <h3>${student.name}</h3>
                    <p>${student.email}</p>
                    <p>Age:${student.age}</p>
                    <span class="course-badge">${student.course}</span>
                </div>
            </div>
            <div class="student-action">
                <button class="edit-btn" onclick="editStudent(${student.id})"><i class="fa-solid fa-pencil"></i> Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${student.id})"><i class="fa-solid fa-trash-can"></i> Delete</button>
            </div>
        `;
        studentList.appendChild(card);
    });
}
// update student
studentForm.addEventListener("submit",function(event){
    event.preventDefault();
    let student={
        id:editId!==null?editId:Date.now(),
        name:nameInput.value.trim(),
        email:emailInput.value.trim(),
        age:Number(ageInput.value),
        course:courseInput.value
    }
    if(editId!==null){
        let index=students.findIndex(function(item){
            return item.id===editId;
        });
        if(index!==-1){
            students[index]=student;
        }
        editId=null;
        submitBtn.textContent="Add student";
        formTitle.textContent="Add New Student"
    }
    else{
        students.push(student);
    }
    saveStudents();
    studentForm.reset();
    displayStudents(students);
});
function editStudent(id){
    let student=students.find(function(item){
        return item.id===id;
    })
    if(!student){
        return;
    }
    nameInput.value=student.name;
    emailInput.value=student.email;
    ageInput.value=student.age;
    courseInput.value=student.course;
    editId=id;
    submitBtn.textContent="Update Student"
    formTitle.textContent="Edit Student";
    window.scrollTo({
        top:250,
        behavior:"smooth"
    })
}
function deleteStudent(id){
    students=students.filter(function(student){
        return student.id!==id;
    })
    saveStudents();
    displayStudents(students)
}
searchInput.addEventListener("input",function(){
    let searchText=searchInput.value.trim().toLowerCase();
    let filteredStudents=students.filter(function(student){
        let name=student.name.toLowerCase();
        let course=student.course.toLowerCase();
        return name.includes(searchText)||course.includes(searchText);
    });
    displayStudents(filteredStudents);
});
cancelBtn.addEventListener("click",function(){
    studentForm.reset();
    editId=null;
    submitBtn.textContent="Add Student";
    formTitle.textContent="Add New Student"
})
displayStudents(students);