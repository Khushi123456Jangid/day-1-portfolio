// get html elements
let studentForm=document.getElementById('studentForm');
let nameInput=document.getElementById('name');
let emailInput=document.getElementById('email');
let ageInput=document.getElementById('age');
let courseInput=document.getElementById('course');
let studentList=document.getElementById('studentList');
let studentCount=document.getElementById('studentCount');
let searchInput=document.getElementById('searchInput');
let emptyState=document.getElementById('emptyState');
let submitBtn=document.getElementById('submitBtn');
let cancelBtn=document.getElementById('cancelBtn');
let formTitle=document.getElementById('formTitle');
// student data
let students=[
    {
        name:"Aarav Sharma",
        email:"aarav@gmail.com",
        age:21,
        course:"Java"
    },
    {
        name:"Priya Verma",
        email:"priya@gmail.com",
        age:20,
        course:"Python"
    },
    {
        name:"Rohan Mehta",
        email:"rohan@gmail.com",
        age:22,
        course:"React"
    }
];
// editIndex
let editIndex=-1;
// display students
function displayStudents(studentArray){
    studentList.innerHTML="";
    studentCount.textContent=studentArray.length+(studentArray.length===1?" Student":" students");
    if(studentArray.length===0){
        emptyState.style.display="block";
        return;
    }
    emptyState.style.display="none";
    studentArray.forEach(function(student,index){
        let card=document.createElement("div");
        card.className="student-card";
        card.innerHTML=`
            <div class="student-top">
                <div class="student-avatar">
                    <i class="fa-solid fa-user-graduate"></i>
                </div>
                <div>
                    <h3>${student.name}</h3>
                    <p class="student-email">${student.email}</p>
                </div>
            </div>
            <div class="student-info">
                <span><i class="fa-solid fa-cake-candles"></i> ${student.age}</span>
                <span class="course-badge"><i class="fa-solid fa-book"></i> ${student.course}</span>
            </div>
            <div class="card-buttons">
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </div>
        `;
        studentList.appendChild(card);
    });
}
// update student
studentForm.addEventListener("submit",function(event){
    event.preventDefault();
    let student={
        name:nameInput.value.trim(),
        email:emailInput.value.trim(),
        age:Number(ageInput.value),
        course:courseInput.value
    };
    // update the existing students
    if(editIndex!==-1){
        students[editIndex]=student;
        editIndex=-1;
        submitBtn.textContent="Add Student";
        formTitle.textContent="Add New Student";
    }
    else{
        students.push(student);
    }
    studentForm.reset();
    displayStudents(students)
});
function editStudent(index){
    let student=students[index];
    nameInput.value=student.name;
    emailInput.value=student.email;
    ageInput.value=student.age;
    courseInput.value=student.course;
    editIndex=index;
    submitBtn.textContent="Update Students";
    formTitle.textContent="Edit student";
    window.scrollTo({
        top:300,
        behavior:"smooth"
    });
}
function deleteStudent(index){
    students.splice(index,1);
    displayStudents(students);
}
// search the student
searchInput.addEventListener("input",function(){
    let searchText=searchInput.value.trim().toLowerCase();
    let filteredStudent=students.filter(function(student){
        let name=student.name.toLowerCase();
        let course=student.course.toLowerCase();
        return(name.includes(searchText)||course.includes(searchText));
    });
    displayStudents(filteredStudent);
});
cancelBtn.addEventListener("click",function(){
    studentForm.reset();
    editIndex=-1;
    submitBtn.textContent="Add Student";
    formTitle.textContent="Add New Student";
});
displayStudents(students);