// src/components/RegisterForm.js
import React, { useState } from 'react';

function RegisterForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (Object.values(form).every(field => field !== '')) {
      setMessage('Registration Successful 🎉');
    } else {
      setMessage('Please fill in all fields ⚠️');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} /><br /><br />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default RegisterForm;
