// src/pages/RegisterPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterPage.css'; // <<< KEMBALIKAN IMPORT CSS INI

const RegisterPage = () => {
    // State untuk mengontrol input form Register
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Logika Validasi Password Cocok
        if (password !== confirmPassword) {
            alert('Password dan Konfirmasi Password harus sama.');
            return;
        }

        // Logika Validasi Dasar (Pastikan semua terisi)
        if (!name || !email || !password || !confirmPassword) {
            alert('Mohon isi semua kolom pendaftaran.');
            return;
        }
        
        // Logika Pendaftaran (misalnya, API call)
        console.log('Form Pendaftaran disubmit!');
        console.log('Data Register:', { name, email, password });
        // Di sini biasanya ada API call ke endpoint register
    };

    return (
        // PERUBAHAN: Sekarang hanya menggunakan .login-container karena latar belakang diurus AppRouter
        <div className="login-container">
            <h2>Daftar Akun Baru</h2>
            
            <form onSubmit={handleSubmit}>
                
                {/* Input Nama */}
                <div className="input-group">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Masukkan nama Anda"
                        required
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

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
                        placeholder="Buat password"
                        required
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Input Konfirmasi Password */}
                <div className="input-group">
                    <label htmlFor="confirmPassword">Konfirmasi Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Ulangi password"
                        required
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                
                {/* Tombol Submit */}
                <button type="submit" className="login-button">
                    Daftar
                </button>
                
                {/* Tautan Login */}
                <p className="signup-link">
                    Sudah punya akun? 
                    <Link to="/login">Login di sini</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;