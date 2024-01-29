import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ComplaintsTable from './components/ComplaintsTable';

function App() {
  return (
    <Router>
      <div className='container-screen'>
        <SideBar />
        <div className="container-fluid">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/maps/complains" element={<ComplaintsTable/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
