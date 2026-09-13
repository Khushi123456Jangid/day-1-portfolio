    function calculateGrade(){
        // get name
        let name = document.getElementById('studentName').value;
        // get marks
        let marks = Number(document.getElementById("marks").value);
        // initialize grade
        let grade;
        if(name==="" || marks===""){
            document.getElementById('result').innerText="Please enter your name and marks"
            return;
        }
        // calculate grade
        if(marks>=90 && marks<=100){
            grade="A+";
        }
        else if(marks>=80 && marks<90){
            grade="A";
        }
        else if(marks>=70 && marks<80){
            grade="B";
        }
        else if(marks>=60 && marks<70){
            grade="C";
        }
        else if(marks>=40 && marks<60){
            grade="D";
        }
        else if(marks>=0 && marks<40){
            grade="fail"
        }
        else if(marks<0 && marks>100){
            document.getElementById('result').innerText="Please enter valid marks between 0 and 100."
            return
        }

        // result print
        document.getElementById('result').innerText=`${name}, your grade is ${grade}`;
    };
