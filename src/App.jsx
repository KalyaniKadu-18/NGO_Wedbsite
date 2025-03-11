import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';
import Team from './Pages/Team/Team';
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoginComp from './components/Login page component/LoginComp';

function AppContent() {
  const location = useLocation(); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginComp />} />
      </Routes>

      {location.pathname !== '/login' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
