import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Slots } from './pages/slots'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Slots />} />
            </Routes>
        </Router>
    )
}

export default App
