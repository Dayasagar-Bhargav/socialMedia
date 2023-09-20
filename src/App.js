import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home  from './pages/home/Home';
import './App.css';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Ragister from './pages/ragister/Ragister';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/Ragister' element={<Ragister/>} />
      </Routes>
    </Router>
  );
}

export default App;
