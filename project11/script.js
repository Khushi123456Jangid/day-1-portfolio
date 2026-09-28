// taking values from 
let form=document.getElementById('studentForm');
let message=document.getElementById('message');
let result=document.getElementById('studentResult');
form.addEventListener("submit",function(event){
    event.preventDefault();
    // get values
    let name=document.getElementById('name').value.trim();
    let email=document.getElementById('email').value.trim();
    let age=Number(document.getElementById('age').value);
    let course=document.getElementById('course').value;
    let terms=document.getElementById('terms').checked;
    // get gender
    let selectGender=document.querySelector('input[name="gender"]:checked');
    // validation
    if(name===""){
        message.textContent="Please enter your name";
        return;
    }
    if(!email.includes('@')){
        message.textContent="Please enter valid email";
        return;
    }
    if(age<=18 || age>100){
        message.textContent="Age must be between 18 to 100"
        return;
    }
    if(course===""){
        message.textContent="Please select course...";
        return;
    }
    if(selectGender === null){
        message.textContent="Please select gender..."
        return;
    }
    if(!terms){
        message.textContent="Please accept the terms."
        return;
    }
    // create object 
    let student={
        name:name,
        email:email,
        age:age,
        course:course,
        gender:selectGender.value
    };
    // display success
    message.textContent="Registration successfully!";
    result.innerHTML=`
        <div class="student-card">
            <h2>Student Details</h2>
            <p><strong>Name : </strong>${student.name}</p>
            <p><strong>Email : </strong>${student.email}</p>
            <p><strong>Age : </strong>${student.age}</p>
            <p><strong>Course : </strong>${student.course}</p>
            <p><strong>Gender : </strong>${student.gender}</p>
        </div>
    `;
    form.reset();
})