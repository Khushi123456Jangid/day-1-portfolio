import StudentCard from './components/StudentCard';
import './App.css'
function App() {
  return (
   <main className='app'>
    <header className='hero'>
      <p className='eyebrow'>REACT DAY 21</p>
      <h1>Student Dashboard</h1>
      <p>My first react application</p>
    </header>
    <section className='content'>
      <StudentCard/>
    </section>
   </main>
  );
}

export default App
