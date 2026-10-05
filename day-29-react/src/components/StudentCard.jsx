import './StudentCard.css'
function StudentCard({student ,onDelete}){
     return( 
        <article className="student-card">
            <div className="student-avatar">{student.name.charAt(0).toUpperCase()}</div>
            <div className="student-content">
                <h2>{student.name}</h2>
                <p className="student-course">{student.course}</p>
                <p className="student-email">{student.email}</p>
            </div>
            <button className="delete-btn" onClick={onDelete}>Delete</button>
        </article>
     );
}
export default StudentCard;