import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false);
  function handleLogin(){
    setIsLoggedIn(true);
  }
  function handleLogout(){
    setIsLoggedIn(false);
  }
  return(
    <main className="app">
      <header className="hero">
        <p className="eyebrow">REACT DAY 26</p>
        <h1>User Authentication</h1>
        <p>Conditional rendering with React state.</p>
      </header>
      <section className="content">
        {isLoggedIn?(<Dashboard onLogout={handleLogout} username="Khushi"/>):(<Login onLogin={handleLogin}/>)}
      </section>
      {isLoggedIn && (<p className="success-message">You are currently logged in.</p>)}
    </main>
  )
}

export default App
