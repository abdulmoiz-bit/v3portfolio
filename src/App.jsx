import { useState } from 'react'
import './App.scss'
import Home from './view/Home';
import ProjectsArchive from './view/ProjectsArchive';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="app">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/archives" element={<ProjectsArchive />} />
      </Routes>
      </div>
  )
}

export default App
