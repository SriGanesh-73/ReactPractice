// src/components/ApplicationForm.js
import React, { useState } from 'react';

function ApplicationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ 
      ...form, 
      [name]: files ? files[0] : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filled = form.firstName && form.lastName && form.email && form.phone && form.resume;
    if (filled) {
      setMessage("Application submitted ✅");
    } else {
      setMessage("Please fill all fields ❌");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} /><br /><br />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} /><br /><br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br /><br />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} /><br /><br />
        <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} /><br /><br />
        <button type="submit">Submit Application</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ApplicationForm;
