function StudentCard({name,course,year,skills}){
    function handleClick(){
        alert(`Hello ${name}! Welcome to your profile`);
    }
    return(
        <article className="student-card">
            <div className="avatar">{name.charAt(0)}</div>
            <h2>{name}</h2>
            <p className="course">{course}</p>
            <p className="year">{year}</p>
            <h3>Skills</h3>
            <div className="skills">
                {
                    skills.map(function(skill){
                        return(
                           <span key={skill}>{skill}</span>
                        );
                    })
                }
            </div>
            <button onClick={handleClick}>View Profile</button>
        </article>
    );
}
export default StudentCard;