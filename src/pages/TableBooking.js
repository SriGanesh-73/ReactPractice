import React, { useState, useEffect } from 'react';
function TableBookingForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      numOfGuests: '',
      date: '',
      time: '',
      specialRequests: '',
    });
  
    useEffect(() => {
      // Check login status and pre-fill the booking form
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setFormData({
          ...formData,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
        });
      }
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
    };
  
    return (
      <section id="book-table">
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" value={formData.firstName} readOnly />
          <label>Last Name</label>
          <input type="text" value={formData.lastName} readOnly />
          <label>Phone</label>
          <input type="text" value={formData.phone} readOnly />
          <label>Number of Guests</label>
          <input type="number" value={formData.numOfGuests} onChange={(e) => setFormData({ ...formData, numOfGuests: e.target.value })} required />
          <label>Date</label>
          <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
          <label>Time</label>
          <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required />
          <label>Special Requests</label>
          <textarea value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}></textarea>
          <button type="submit">Book Table</button>
        </form>
      </section>
    );
  }
export default TableBookingForm;  