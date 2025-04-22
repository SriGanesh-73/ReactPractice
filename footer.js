// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f1f1f1',
      padding: '20px',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <p>
        <a href="#">Careers</a> | 
        <a href="#"> FAQs</a> | 
        <a href="#"> Contact Us</a> | 
        <a href="#"> Privacy Policy</a>
      </p>
      <div style={{ marginTop: '10px' }}>
        <span style={{ margin: '0 5px' }}>🔗</span>
        <span style={{ margin: '0 5px' }}>📘</span>
        <span style={{ margin: '0 5px' }}>🐦</span>
        <span style={{ margin: '0 5px' }}>📸</span>
      </div>
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        © 2025 JobPortal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
