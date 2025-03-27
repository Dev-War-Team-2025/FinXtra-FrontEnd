import React from 'react';
import Logo from '../components/Logo.jsx';
const Header = () => {
  return (
    <header className='bg-white' >
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <div>
          <button className="bg-primary text-white px-6 py-2 rounded-md mr-4 hover:bg-primary-2 transition">
            Sign Up
          </button>
          <button className="bg-transparent border-2 border-primary text-gray px-6 py-2 rounded-md hover:bg-white hover:text-primary transition">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
