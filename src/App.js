import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import News from './Components/News';
import Login from './Components/Login';
import Profile from './Components/Profile';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/login" element={<Login />} />
              <Route
                  path="/profile"
                  element={
                    localStorage.getItem('isAuthenticated') === 'true'
                        ? <Profile />
                        : <Navigate to="/login" />
                  }
              />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
