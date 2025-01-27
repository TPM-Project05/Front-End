import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import awan from "../assets/awan price.png";
import { motion } from "motion/react";
import starBg from "../assets/Star Background.png";
import star from "../assets/Star.png";
import { FaUser, FaLock } from "react-icons/fa"; // Import additional icons

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = [];

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username) {
        errors.push("Email is required.");
    } else if (!emailRegex.test(username)) {
        errors.push("Please enter a valid email address.");
    }

    // Validate password
    if (!password) {
        errors.push("Password is required.");
    } else if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    } else if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Proceed with login logic
    console.log('Email:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center relative">
      <motion.img
        src={starBg}
        className="absolute top-0 w-full h-[500px] pointer-events-none z-10" 
        alt="Star"
      />
      <motion.img
        src={awan}
        className="absolute bottom-0 w-full h-[287px] pointer-events-none z-20" 
        alt="Awan"
      />
      <motion.img
        src={star}
        className="absolute left-[470px] top-[20px] bottom-1/4 opacity-90 w-[150px] pointer-events-none z-10" 
        alt="Star 3"
        animate={{ rotate: 360 }} 
        transition={{
        duration: 20, 
        repeat: Infinity, 
        ease: "linear", 
        }}    
      />
      <motion.img
        src={star}
        className="absolute left-[120px] top-[150px] bottom-1/4 opacity-100 w-[100px] pointer-events-none z-10" 
        alt="Star 3"
        animate={{ rotate: 360 }} 
        transition={{
        duration: 20, 
        repeat: Infinity, 
        ease: "linear", 
        }}    
      />
      <motion.img
        src={star}
        className="absolute right-[470px] bottom-[130px] opacity-100 w-[150px] pointer-events-none z-10" 
        alt="Star 3"
        animate={{ rotate: 360 }} 
        transition={{
        duration: 20, 
        repeat: Infinity, 
        ease: "linear", 
        }}    
      />
      <motion.img
        src={star}
        className="absolute right-[100px] top-[200px] opacity-90 w-[90px] pointer-events-none z-10" 
        alt="Star 3"
        animate={{ rotate: 360 }} 
        transition={{
        duration: 20, 
        repeat: Infinity, 
        ease: "linear", 
        }}    
      />
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white transition-all duration-300 ease-in-out"
      >
        <div className="ml-[43px] border-2 w-[120px] h-[40px] z-20 rounded-[16px] justify-center items-center
              hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 
              active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]">
          <div className="flex justify-normal p-[7px] gap-5 items-center">
            <BsArrowLeftCircle size={24} />
            <p className="text-white">back</p>
          </div>
        </div>
      </button>

      <div className="flex-col items-center justify-center h-[450px] w-full max-w-md mt-[-100px]">
        <form onSubmit={handleSubmit} className="w-full p-10 border-l-0 border-t-0 border-r-2 border-b-2 rounded-xl shadow-lg bg-white bg-opacity-15 backdrop-blur-lg flex flex-col items-center"
          style={{
          boxShadow: '10px 10px 20px rgba(255, 255, 255, 0.4)'
          }}
        >
          <h2 className="text-center text-4xl  mb-4 text-white text-glow font-poppins p-2">Welcome Back</h2> 
          <div className="mb-4 w-full relative">
            <label htmlFor="username" className="block text-sm font-medium text-white font-poppins">Team Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-5 text-gray-500" />
              <input
                type="text"
                id="username"
                placeholder='Team Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border rounded pl-10 p-4 w-full bg-white text-black"
              />
            </div>
          </div>
          <div className="mb-4 w-full relative">
            <label htmlFor="password" className="block text-sm font-medium text-white font-poppins">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border rounded pl-10 p-4 w-full bg-white text-black pr-10"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <FaEye />: <FaEyeSlash />}
              </button>
            </div>
          </div>
          <button type="submit" className="bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 text-white rounded p-2 mt-4 w-full">Sign In</button>
          <p className="text-center text-white mt-4">
            Don't have an account? <Link to="/Register" className="text-white hover:underline text-glow">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
