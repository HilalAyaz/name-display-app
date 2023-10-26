import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NameDisplay from './NameDisplay.js'
function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NameDisplay />} />
      </Routes>
    </Router>
  )
}

export default App
