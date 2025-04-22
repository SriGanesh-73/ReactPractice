// src/components/Navbar.js
import React from 'react';

function Navbar({ setPage }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <div><strong>JobPortal</strong></div>
      <div>
        <button onClick={() => setPage('home')}>Home</button> | 
        <button onClick={() => setPage('jobs')}>Jobs</button> | 
        <button onClick={() => setPage('apply')}>Apply</button> | 
        <button onClick={() => setPage('login')}>Login</button> | 
        <button onClick={() => setPage('register')}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
