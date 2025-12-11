// src/App.js

import React from 'react';
import './App.css'; 
import { BrowserRouter } from 'react-router-dom'; // Hapus import Routes dan Route

// >>> Hapus import halaman, akan dihandle di AppRouter <<<
// import LoginPage from './pages/LoginPage.jsx'; 
// import RegisterPage from './pages/RegisterPage.jsx';    

// >>> Perubahan: Import AppRouter <<<
import AppRouter from './AppRouter.jsx'; 

function App() {
  return (
    <BrowserRouter>
      {/* Ganti div.App dengan AppRouter yang menangani routing & background */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;