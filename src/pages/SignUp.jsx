// SignUp.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import youimage from '../assets/logImage.jpeg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Signed up with:', name, email, password);
    // Implement sign-up functionality here
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div
        className="w-full sm:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${youimage})` }}
      >
        {/* Image background */}
      </div>

      {/* Right side - Form */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-8 bg-white">
        <Typography variant="h4" gutterBottom className="text-center mb-6">
          Sign Up for AfriTask
        </Typography>

        <form onSubmit={handleSignUp}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ fontFamily: '"Montserrat", sans-serif' }}
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ fontFamily: '"Montserrat", sans-serif' }}
          />

          <Button
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
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Already have an account?{' '}
          <Link to="/" className="text-primary font-semibold">
            Login
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
