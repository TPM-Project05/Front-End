import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import awan from "../assets/awan price.png";
import { motion } from "motion/react";
import starBg from "../assets/Star Background.png";
import moon from "../assets/Moon.png";
import star from "../assets/Star.png";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isBinusian, setIsBinusian] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = [];
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!teamName) {
            errors.push("Email is required.");
        } else if (!emailRegex.test(teamName)) {
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
    
        // Validate confirm password
        if (!confirmPassword) {
            errors.push("Please confirm your password.");
        } else if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }
    
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }
    
        // Proceed with registration logic
        console.log('Email:', teamName);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center relative h-full overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute top-0 w-full h-[500px] pointer-events-none z-5" 
                alt="Star"
            />
            <motion.img
                src={awan}
                className="absolute bottom-0 w-full h-[257px] pointer-events-none z-10" 
                alt="Awan"
            />
            <motion.img
                src={moon}
                className="absolute left-[-50px] bottom-[-90px] opacity-90 w-[700px] pointer-events-none z-0" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={star}
                className="absolute left-[100px] top-[500px] opacity-100 w-[110px] pointer-events-none z-20" 
                alt="Star 2"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={star}
                className="absolute left-[530px] top-[220px] opacity-100 w-[120px] pointer-events-none z-0" 
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
                className="absolute right-[260px] top-[5px] opacity-100 w-[120px] pointer-events-none z-0 " 
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
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center">
                <div className="flex w-full max-w-4xl mx-auto">
                    <div className="flex-1">
                        <h2 className="absolute left-[150px] top-[100px] text-left text-7xl font-bold mb-4 text-white text-glow font-poppins">Register <br />Your Team!</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-[-100px] p-10 border-l-2 border-t-0 border-r-2 border-b-0 rounded-xl shadow-lg bg-white bg-opacity-15"
                        style={{
                        boxShadow: '10px 0 10px rgba(255, 255, 255, 0.4), -10px 0 10px rgba(255, 255, 255, 0.4)'
                        }}
                    >
                        <div className="mb-4 w-full relative">
                            <label htmlFor="username" className="block text-sm font-medium text-white font-poppins">Team Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-5 text-gray-500" />
                                <input
                                    type="text"
                                    id="teamName"
                                    placeholder='Team Name'
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
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
                            </div>
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)} 
                                className="absolute inset-y-0 right-0 pt-5 pr-3 flex items-center text-gray-500"
                                >
                                {showPassword ? <FaEye />: <FaEyeSlash />}
                            </button>
                        </div>
                        <div className="mb-4 w-full relative">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white font-poppins">Confirm Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-5 text-gray-500" />
                                <input
                                    type={showconfirmPassword ? 'text' : 'Password'}
                                    id="confirmPassword"
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="border rounded pl-10 p-4 w-full bg-white text-black pr-10"
                                />
                            </div>
                            <button 
                                type="button" 
                                onClick={() => setShowconfirmPassword(!showconfirmPassword)} 
                                className="absolute inset-y-0 right-0 pt-5 pr-3 flex items-center text-gray-500"
                                >
                                {showconfirmPassword ? <FaEye />: <FaEyeSlash />}
                            </button>
                        </div>
                        <div className="mb-4 text-center">
                            <label className="block text-sm font-medium text-white font-poppins">Status</label>
                            <div className="flex justify-center">
                                <input
                                    type="radio"
                                    id="binusian"
                                    name="status"
                                    checked={isBinusian}
                                    onChange={() => setIsBinusian(true)}
                                />
                                <label htmlFor="binusian" className="ml-2 text-white">Binusian</label>
                                <input
                                    type="radio"
                                    id="nonBinusian"
                                    name="status"
                                    checked={!isBinusian}
                                    onChange={() => setIsBinusian(false)}
                                    className="ml-4"
                                />
                                <label htmlFor="nonBinusian" className="ml-2 text-white">Non-Binusian</label>
                            </div>
                        </div>
                        <button type="submit" className="bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 text-white rounded p-2 mt-4 w-full">Sign Up</button>
                        <p className="mt-4 text-center text-white">
                            Already have an account? <Link to="/Login" className="text-white hover:underline text-glow">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
