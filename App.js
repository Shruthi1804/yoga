import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ApplyForm from './components/ApplyForm';
import DisplayInstructor from './components/DisplayInstructor';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/instructors" element={<DisplayInstructor />} />
      </Routes>
    </Router>
  );
}

export default App;
