import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import Jobs from './components/jobs';
import ApplicationForm from './components/application';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Hero />;
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      case 'jobs':
        return <Jobs />;
      case 'apply':
        return <ApplicationForm />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
