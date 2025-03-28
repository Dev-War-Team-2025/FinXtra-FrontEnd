import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';

const Header = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const buttonBaseClasses = "w-28 h-9 border-2 rounded-md mr-4 font-medium transition duration-300";

  return (
    <header className='bg-white'>
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <button 
            onClick={handleSignUp}
            className={`w-28 h-9  rounded-md mr-4 font-medium transition duration-300  bg-primary text-white hover:bg-primary-2 `}
          >
            Sign Up
          </button>
          <button 
            onClick={handleLogin}
            className={`w-28 h-8.5 border-2 rounded-md mr-4 font-medium transition duration-300 border-primary bg-transparent text-gray hover:bg-white hover:text-primary`}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
