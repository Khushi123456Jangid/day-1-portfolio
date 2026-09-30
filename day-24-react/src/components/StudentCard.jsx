function StudentCard({student,onDelete}){
    return(
        <article className="student-card">
            <div className="avatar">{student.name.charAt(0).toUpperCase()}</div>
            <h2>{student.name}</h2>
            <p className="course">{student.course}</p>
            <div className="student-info">
                <p>
                    <strong>Email :</strong>
                    <br />
                    {student.email}
                </p>
                <p>
                    <strong>Age :</strong>
                    <br />
                    {student.age}
                </p>
                <p>
                    <strong>City :</strong>
                    <br />
                    {student.city}
                </p>
            </div>
            <button className="delete-btn" onClick={onDelete}>
                Delete
            </button>
        </article>
    );
}
export default StudentCard