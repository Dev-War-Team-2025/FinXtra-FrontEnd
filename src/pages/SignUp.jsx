import React, { useState } from "react";
import { Mail, Lock, User, Phone, Image } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from "../assets/woman.jpg";
import Logo from "../components/Logo";

const SignUp = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userType, setUserType] = useState("freelancer"); // Default to Freelancer

  // Handle Profile Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 text-sm">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2  relative overflow-hidden">
        <img
          src={img}
          alt="SignUp"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary h-screen lg:h-max">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>

          <p className="text-gray-500 text-center mt-2">Create a new account</p>

          {/* User Type Selection */}
          <div className="flex justify-between mt-6 bg-gray-100 p-1 rounded-lg">
            <button
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                userType === "freelancer"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setUserType("freelancer")}
            >
              Freelancer
            </button>
            <button
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                userType === "job-owner"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setUserType("job-owner")}
            >
              Job Owner
            </button>
          </div>

          {/* Profile Photo Upload */}
          <div className="mt-6 flex flex-col items-center">
            <label className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">Upload Profile Picture</p>
          </div>

          {/* Full Name */}
          <div className="mt-6">
            <label className="text-gray-700 flex items-center gap-2">
              <User size={20} className="text-primary" /> Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="text-gray-700 flex items-center gap-2">
              <Mail size={20} className="text-primary" /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label className="text-gray-700 flex items-center gap-2">
              <Phone size={20} className="text-primary" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Password */}
            <div className="mt-4 col-span-1">
              <label className="text-gray-700 flex items-center gap-2">
                <Lock size={20} className="text-primary" /> Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-4 col-span-1">
              <label className="text-gray-700 flex items-center gap-2">
                <Lock size={20} className="text-primary" /> Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Signup Button */}
          <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition">
            Sign Up
          </button>

          {/* Alternative Signup */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="px-3 text-gray-500 text-sm">Or sign up with</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <BsGoogle size={20} className="text-red-500" /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <FaFacebook size={20} className="text-blue-600" /> Facebook
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
