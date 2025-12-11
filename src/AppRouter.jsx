// src/AppRouter.jsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import library yang tadi error

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

import './styles/CommonBackground.css'; 
import './styles/PageTransition.css'; // Import CSS transisi

const AppRouter = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');
  const transitionDuration = 500; 

  useEffect(() => {
    // Tentukan kelas background berdasarkan path saat ini
    if (location.pathname === '/register') {
      setBackground('register-bg');
    } else {
      setBackground('login-bg');
    }
  }, [location.pathname]);

  return (
    <div className={`App-background-wrapper ${background}`}>
      <div className="App-content-wrapper">
        {/*
          TransitionGroup dan CSSTransition untuk animasi konten halaman.
        */}
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key} 
            timeout={transitionDuration}
            classNames="page-transition" 
          >
            <div className="page-wrapper"> 
              {/* Penting: Routes harus menggunakan prop 'location' dari useLocation */}
              <Routes location={location}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default AppRouter;