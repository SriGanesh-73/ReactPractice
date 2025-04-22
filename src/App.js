import './App.css';
import React, { useState, useEffect } from 'react';
import GroceryShop from './pages/groceryShop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import TableBookingForm from './pages/TableBooking';  
import SignupForm from './pages/Login';
import AboutUs from './pages/AboutUs';  

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      <Navbar />
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <SignupForm />
      )}
      <Hero />
      <Menu />
      <AboutUs />
      {user && <TableBookingForm />}
      <Footer />
    </div>
  );
}


export default App;
