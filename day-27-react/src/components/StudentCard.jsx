function StudentCard({student,onDelete}){
    return(
        <article className="student-card">
            <div className="student-avatar">{student.name.charAt(0).toUpperCase()}</div>
            <h2>{student.name}</h2>
            <p className="student-course">{student.course}</p>
            <p className="student-email">{student.email}</p>
            <button onClick={onDelete} className="delete-btn">Delete</button>
        </article>
    )
}
export default StudentCard;