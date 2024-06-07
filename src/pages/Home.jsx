import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-lg sm:text-lg lg:text-xl font-bold text-gray-600 mb-4 sm:mb-6 lg:mb-8">
          Welcome to My Dashboard App
        </h1>
        <button
          onClick={handleGetStarted}
          className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
