import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeCard from './components/ThemeCard'
import './App.css'

function App() {
  return (
    <ThemeProvider>
        <ThemeCard/>
    </ThemeProvider>
  )
}

export default App
