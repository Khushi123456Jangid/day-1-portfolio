import StudentCard from "./components/StudentCard";
import './App.css'
function App() {
  return(
    <main className="app">
      <header className="hero">
        <p className="eyebrow">REACT DAY 22</p>
        <h1>Student Directory</h1>
        <p>One component. Multiple students.</p>
      </header>
      <section className="student-grid">
        <StudentCard name="Khushi Jangid" course="B.Tech CSE" skills={["Java","JavaScript","React"]} year={4}/>
        <StudentCard name="Aman Verma" course="B.Tech IT" skills={["Python","HTML","CSS"]} year={3}/>
        <StudentCard name="Riya Awatramani" course="B.Tech AI" skills={["Python","Machine Learning","SQL"]} year={2}/>
      </section>
    </main>
  )
}

export default App
