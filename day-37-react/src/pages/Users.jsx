import { useState } from "react";
let students=[
    {id:1,name:"Aarav Sharma",course:"Computer Science",year:3},
    {id:2,name:"Priya Vaerma",course:"Information technology",year:2},
    {id:3,name:"Rohan Singh",course:"Computer Science",year:4},
    {id:4,name:"Ananya Jain",course:"Electronics",year:3},
    {id:5,name:"Kabir Metha",course:"Computer Science",year:2},
    {id:6,name:"Meera Joshi",course:"Information Technology",year:4}
]
function Users(){
    let [search,setSearch]=useState("");
    let filteredStudent=students.filter(function(student){
        return student.name.toLowerCase().includes(search.toLowerCase());
    })
    return(
       <main className="page">
        <h1>Student Directory</h1>
        <p>Explore students and their courses.</p>
        <input type="text" value={search} onChange={function(event){setSearch(event.target.value)}} placeholder="Enter the student name..." className="search-input"/>
        <section className="student-grid">
            {filteredStudent.map(function(student){
                return(
                    <article className="student-card" key={student.id}>
                        <div className="avatar">{student.name.charAt(0).toUpperCase()}</div>
                        <h2>{student.name}</h2>
                        <p>{student.course}</p>
                        <span>Year {student.year}</span>
                    </article>
                )
            })}
        </section>
        {filteredStudent.length===0 && (
            <p>No Student Found</p>
        )}
       </main>
    )
}
export default Users;