import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserContext from './context/UserContext'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
function App() {
    let user={
        name:"Xinyi",
        role:"Software Engineer",
        status:"Online"
    }
  return(
    <main>
        <UserContext.Provider value={user}>
            <Navbar/>
            <h1>LUMA USER DASHBOARD</h1>
            <p>Welcome to your dashboard 👋</p>
            <Dashboard/>
            <Profile/>
        </UserContext.Provider>
    </main>
  )
}

export default App
