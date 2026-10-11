import { useState } from 'react'
import './App.css'
import StudentProfile from './components/StudentProfile'

function App() {
 return(
    <main className='app'>
        <h1>Student Profile Manager</h1>
        <p className='subtitle'>Manager your information</p>
        <StudentProfile/>
    </main>
 )
}

export default App
