// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1515169067865-5387ec356754")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textShadow: '1px 1px 2px black'
    }}>
      <h1>Find your dream job today</h1>
      <button style={{
        marginTop: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        borderRadius: '5px'
      }}>Browse Jobs</button>
    </section>
  );
}

export default Hero;
