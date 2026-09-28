function StudentCard(){
    let student={name:"Khushi Jangid",course:"CSE",year:4,skills:["Java","JavaScript","React"]};
    let handleButton=()=>{
        alert("Welcome to Student Dashboard!")
    }
    return(
        <article className="student-card">
            <div className="avatar">K</div>
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <p>{student.year}</p>
            <h3>Skills</h3>
            <div className="skills">
                 {
                    student.skills.map(function(skill){
                        return(
                            <span key={skill}>{skill}</span>
                        );
                    })
                }
            </div>
            <button onClick={handleButton}>View Profile</button>
        </article>
    );
}
export default StudentCard;