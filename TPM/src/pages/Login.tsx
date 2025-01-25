import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Here you can add further logic for authentication
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center">
      <button 
          onClick={() => navigate(-1)}
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
      
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-10 border rounded-xl shadow-lg bg-white bg-opacity-15">
        <h2 className="text-center text-2xl font-bold mb-4 text-white text-glow font-poppins">Welcome Back</h2> 
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-white font-poppins">Team Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border rounded p-2 w-full bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-white font-poppins">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded p-2 w-full bg-white text-black pr-10"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 w-full">Sign In</button>
        <p className="text-center text-white mt-4">
          Don't have an account? <Link to="/Register" className="text-white hover:underline text-glow">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
