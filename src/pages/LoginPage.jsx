import React, { useState } from 'react';
// Import Link dari react-router-dom
import { Link } from 'react-router-dom'; 
import '../styles/LoginPage.css'; 

const LoginPage = () => {
  // State untuk mengontrol input form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logika validasi dasar
    if (!email || !password) {
        alert('Mohon isi email dan password.');
        return;
    }
    
    // Logika login akan ditambahkan di sini (misalnya, API call)
    console.log('Form disubmit!');
    console.log('Email:', email);
    console.log('Password:', password);

    // Di sini biasanya ada navigasi atau feedback berhasil
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login Akun</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Input Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password Anda"
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {/* Tombol Submit */}
          <button type="submit" className="login-button">
            Login
          </button>
          
          {/* Tautan Daftar */}
          <p className="signup-link">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;