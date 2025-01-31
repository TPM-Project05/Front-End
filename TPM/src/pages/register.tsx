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
import axios from '../config/instance'; // Import AxiosError for error typing
import { AxiosError } from 'axios'

type CreateUserResponse = {
    name: string;
    email: string;
    role: string;
    status: string;
    password: string;
    password_confirmation: string;
  };
  
  const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '', // Untuk confirm password terpisah
        isBinusian: true,
        showPassword: false,
        showConfirmPassword2: false, // Untuk confirm password visibility
        error: '',
      });
      
    
      // Handle form submission
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        // Memastikan password dan confirmPassword cocok
        if (formData.password !== formData.confirmPassword) {
          setFormData((prevData) => ({
            ...prevData,
            error: 'Passwords do not match',
          }));
          return;
        }
      
        const userData: CreateUserResponse = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword, // Pastikan nama key sesuai dengan backend
          role: "participant",
          status: formData.isBinusian ? 'Binusian' : 'Non-Binusian',
        };
      
        try {
          const response = await axios.post('/register', userData);
          if (response.status === 201) {
            navigate('/Login'); // Redirect to login page after successful registration
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          setFormData((prevData) => ({
            ...prevData,
            error: axiosError.response?.data?.message || 'Something went wrong, please try again.',
          }));
        }
      };
      
    
      // Handle input changes
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      
        // Log the input field name and its new value
        console.log(`Field: ${name}, Value: ${value}`);
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
    
      // Handle checkbox changes (for the radio buttons or password visibility toggles)
      const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      };
        

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center relative h-full overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute top-0 w-full h-[500px] pointer-events-none z-10" 
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
                className="absolute left-[8%] top-[70%] opacity-100 w-[8%] pointer-events-none z-20" 
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
                className="absolute left-[37%] top-[40%] opacity-100 w-[6%] pointer-events-none z-0" 
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
                className="absolute right-[17%] top-[1%] opacity-100 w-[8%] pointer-events-none z-30" 
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
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-10 border-l-2 border-t-0 backdrop-blur-lg 
                    border-r-2 border-b-0 rounded-xl shadow-lg bg-white bg-opacity-15 z-20"
                        style={{
                        boxShadow: '10px 0 10px rgba(255, 255, 255, 0.4), -10px 0 10px rgba(255, 255, 255, 0.4)'
                        }}
                    >
                        <div className="mb-4 w-full relative">
                            <label htmlFor="name" className="block text-sm font-medium text-white font-poppins">Team Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-5 text-gray-500" />
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    placeholder='Team Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border rounded pl-10 p-4 w-full bg-white text-black"
                                    />
                                </div>
                        </div>
                        <div className="mb-4 w-full relative">
                            <label htmlFor="email" className="block text-sm font-medium text-white font-poppins">Email</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-5 text-gray-500" />
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={handleChange}
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
                            type={formData.showPassword ? 'text' : 'password'}  // Toggle visibility
                            id="password"
                            placeholder='Password'
                            name='password'  // Gunakan nama field 'password'
                            value={formData.password}  // Bind value ke formData.password
                            onChange={handleChange}
                            required
                            className="border rounded pl-10 p-4 w-full bg-white text-black pr-10"
                            />
                        </div>
                        <button 
                            type="button" 
                            onClick={() => setFormData((prevData) => ({
                            ...prevData,
                            showPassword: !prevData.showPassword,
                            }))}
                            className="absolute inset-y-0 right-0 pt-5 pr-3 flex items-center text-gray-500"
                        >
                            {formData.showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                        </div>

                        <div className="mb-4 w-full relative">
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-white font-poppins">Confirm Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-5 text-gray-500" />
                            <input
                            type={formData.showConfirmPassword2 ? 'text' : 'password'}  // Toggle visibility
                            id="password_confirmation"
                            placeholder='Confirm Password'
                            name='confirmPassword'  // Gunakan nama field 'confirmPassword'
                            value={formData.confirmPassword}  // Bind value ke formData.confirmPassword
                            onChange={handleChange}
                            required
                            className="border rounded pl-10 p-4 w-full bg-white text-black pr-10"
                            />
                        </div>
                        <button 
                            type="button" 
                            onClick={() => setFormData((prevData) => ({
                            ...prevData,
                            showConfirmPassword2: !prevData.showConfirmPassword2,
                            }))}
                            className="absolute inset-y-0 right-0 pt-5 pr-3 flex items-center text-gray-500"
                        >
                            {formData.showConfirmPassword2 ? <FaEye /> : <FaEyeSlash />}
                        </button>
                        </div>

                        <div className="mb-4 text-center">
                            <label className="block text-sm font-medium text-white font-poppins">Status</label>
                            <div className="flex justify-center">
                                <input
                                    type="radio"
                                    id="binusian"
                                    name="status"
                                    checked={formData.isBinusian}
                                    onChange={handleToggle}
                                    className="ml-4"
                                    value="binusian"
                                />
                                <label htmlFor="binusian" className="ml-2 text-white">Binusian</label>
                                <input
                                    type="radio"
                                    id="nonBinusian"
                                    name="status"
                                    checked={formData.isBinusian}
                                    onChange={handleToggle}
                                    className="ml-4"
                                    value="nonBinusian"
                                />
                                <label htmlFor="nonBinusian" className="ml-2 text-white">Non-Binusian</label>
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
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
