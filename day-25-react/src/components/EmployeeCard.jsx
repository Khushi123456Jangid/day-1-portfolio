function EmployeeCard({employee,onDelete}){
    return(
        <article className="employee-card">
            <div className="employee-avatar">{employee.name.charAt(0).toUpperCase()}</div>
            <h2>{employee.name}</h2>
            <p className="department">{employee.department}</p>
            <div className="employee-info">
                <p><strong>Email</strong><br />{employee.email}</p>
                <p><strong>Age</strong><br />{employee.age}</p>
                <p><strong>City</strong><br />{employee.city}</p>
            </div>
            <button onClick={onDelete} className="delete-btn">Delete Employee</button>
        </article>
    )
}
export default EmployeeCard