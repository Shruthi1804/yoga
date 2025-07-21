import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h2>Welcome to the Yoga Instructor Application</h2>
      <p>Join our community of skilled yoga instructors and help others find their balance and wellness!</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/apply')}>
        Become a Yoga Instructor
      </button>
    </div>
  );
};

export default Home;
