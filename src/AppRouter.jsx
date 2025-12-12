// src/AppRouter.jsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

import './styles/CommonBackground.css'; 
import './styles/PageTransition.css';

const AppRouter = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    // Tentukan kelas background berdasarkan path saat ini
    if (location.pathname === '/register') {
      setBackground('register-bg');
    } else {
      setBackground('login-bg');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onTransitionEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayLocation(location);
      setTransitionStage('fadeIn');
    }
  };

  return (
    <div className={`App-background-wrapper ${background}`}>
      <div className="App-content-wrapper">
        <div 
          className={`page-wrapper page-transition-${transitionStage}`}
          onAnimationEnd={onTransitionEnd}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRouter;