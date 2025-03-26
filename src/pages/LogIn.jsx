// Login.js or SignUp.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import youimage from '../assets/logImage.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with:', email, password);
    // Implement login functionality here
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Form */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-8 bg-white">
        <Typography variant="h4" gutterBottom className="text-center mb-6">
          Login to AfriTask
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ fontFamily: '"Montserrat", sans-serif' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ fontFamily: '"Montserrat", sans-serif' }}
          />

          <Button
           className='bg-green'
            type="submit"
            variant="contained"
            color="primary"
            
            fullWidth
            sx={{
              marginTop: 2,
              fontFamily: '"Montserrat", sans-serif',
              textTransform: 'none',
            }}
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-primary font-semibold">
            Sign Up
          </Link>
        </Typography>
      </div>

      {/* Right side - Image from Public Folder */}
      <div
        className="hidden sm:block sm:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${youimage})` }} // Referencing image in public/assets
      >
        {/* Image will fill the right side */}
      </div>
    </div>
  );
};

export default Login;
