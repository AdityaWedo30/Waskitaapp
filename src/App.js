// src/App.js

import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// >>> PERBAIKAN: TAMBAHKAN EKSTENSI .jsx <<<
import LoginPage from './pages/LoginPage.jsx'; 
import RegisterPage from './pages/RegisterPage.jsx';    
// >>> PERBAIKAN SELESAI <<<

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;