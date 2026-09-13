let students=[];
function addStudent(){
    let name=document.getElementById('studentName').value.trim();
    let marks=Number(document.getElementById('studentMarks').value);
    // condition for invalid value
    if(name==="" || marks<0 || marks>100){
        alert("Please Enter a Valid Value");
        return;
    }
    // define student object
    let student={
        name:name,
        marks:marks
    };
    students.push(student);
    displayStudent();
    document.getElementById('studentName').value="";
    document.getElementById('studentMarks').value="";
}
function displayStudent(){
    let list=document.getElementById('studentList');
    list.innerHTML="";
    let totalMarks=0;
    let highestMarks=0;
    let topStudent="-";
    for(let student of students){
        totalMarks += student.marks;
        if(student.marks>highestMarks){
            highestMarks=student.marks;
            topStudent=student.name;
        }
        list.innerHTML +=`
            <div class="student">
                <span>${student.name}</span>
                <span>${student.marks}/100</span>
            </div>
        `
    }
    let average= students.length>0 ? totalMarks/students.length : 0;
    document.getElementById('totalStudents').textContent=students.length;
    document.getElementById('averageMarks').textContent=average.toFixed(2);
    document.getElementById('highestMarks').textContent=highestMarks;
    document.getElementById('topStudent').textContent=topStudent;
}