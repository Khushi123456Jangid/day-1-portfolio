// ==== get html element ====
let studentForm=document.getElementById('studentForm');
let studentNameInput=document.getElementById('studentName');
let marksInput=document.getElementById('marks');
let studentList=document.getElementById('studentList');
let totalStudents=document.getElementById('totalStudents');
let passedStudents=document.getElementById('passedStudents');
let failedStudents=document.getElementById('failedStudents');
let filterButtons=document.querySelectorAll('.filter-button');
// student Array
let students=[];
// add student
studentForm.addEventListener("submit",function(event){
    event.preventDefault();
    let name=studentNameInput.value.trim();
    let marks=Number(marksInput.value);
    // create objects
    let student={
        name:name,
        marks:marks
    };
    // add object to array
    students.push(student);
    // update screen
    updateStatistics();
    displayStudents(students);
    // clear students
    studentForm.reset();
});
// ==== update statistics ====
function updateStatistics(){
    totalStudents.textContent=students.length;
    // passed students
    let passed=students.filter(function(student){
        return student.marks>=40;
    });
    passedStudents.textContent=passed.length;
    // failed students
    let failed=students.filter(function(student){
        return student.marks<40;
    });
    failedStudents.textContent=failed.length;
};
// display students
function displayStudents(studentArray){
    studentList.innerHTML="";
    // empty state
    if(studentArray.length===0){
        studentList.innerHTML=`
            <div class="empty-state">
                <div class="icon"><i class="fa-solid fa-graduation-cap"></i></div>
                <h3>No student found</h3>
                <p>Add student to see the result.</p>
            </div
        `;
        return;
    };
    // display each student
    studentArray.forEach(function(student){
        let card=document.createElement("div");
        card.className="student-card";
        let result=student.marks>=40?"Pass":"Fail";
        let resultClass=student.marks>=40?"pass":"fail";
        card.innerHTML=`
            <div class="student-info">
                <div class=student-avatar>
                    ${student.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h3>${student.name}</h3>
                    <p>Student Result</p>
                </div>
            </div>
            <div class="result-info">
                <span class="marks">${student.marks}</span>
                <span class="badge ${resultClass}">${result}</span.
            </div>
        `;
        studentList.appendChild(card);
    });
}
// filter buttons
filterButtons.forEach(function(button){
    button.addEventListener('click',function(){
        // remove active from all buttons
        filterButtons.forEach(function(btn){
            btn.classList.remove("active");
        });
        // add active to clicked button
        button.classList.add("active");
        let filter= button.dataset.filter;
        // All
        if(filter=="all"){
            displayStudents(students);
        }
        // passed
        else if(filter=="passed"){
            let passed=students.filter(function(student){
                return student.marks>=40;
            });
            displayStudents(passed);
        }
        // failed
        else if(filter=="failed"){
            let failed=students.filter(function(student){
                return student.marks<40;
            });
            displayStudents(failed);
        }
        else if(filter=="toppers"){
            let toppers=students.filter(function(student){
                return student.marks>80;
            });
            displayStudents(toppers);
        }
    });
});
displayStudents(students);