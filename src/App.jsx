import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="bg-primary">
    <Router>
    
    

    <Navbar />
    <Sidebar />  

    <div className={`${styles.flexStart} ${styles.paddingY} ml-7`}>
        <div className={`${styles.paddingY1} ${styles.boxWidth}`}>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </div>

    

    </Router>

    </div>
  )
}

export default App
