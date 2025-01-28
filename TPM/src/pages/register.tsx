import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import axios from 'axios';
const token = document.head.querySelector('meta[name="csrf-token"]').content;
// Set agar cookie disertakan dalam setiap permintaan
axios.defaults.withCredentials = true;

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [csrfToken, setCsrfToken] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validasi password dan confirmPassword
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Data yang akan dikirim ke API
        const registrationData = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
        };

        axios.defaults.withCredentials = true;

        // Ambil CSRF token terlebih dahulu
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then(() => {
                // Kirim data registrasi setelah CSRF token diterima
                return axios.post('http://localhost:8000/register', registrationData, {
                    headers: {
                        Accept: 'application/json',
                    }
                });
            })
            .then((response) => {
                console.log('Registration Response:', response.data);
                // Lakukan navigasi atau logika lain setelah berhasil registrasi
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Error during registration:', error.response.data);
                    alert('Registration failed: ' + error.response.data.message || 'Please check your input.');
                } else {
                    console.error('Error:', error.message);
                    alert('Registration failed, please try again.');
                }
            });
        
            
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
            <div className="flex w-full max-w-4xl mx-auto">
                <div className="flex-1">
                    <h2 className="text-left text-4xl font-bold mb-4 text-white text-glow font-poppins">Register Your Team!</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-10 border rounded-xl shadow-lg bg-white bg-opacity-15">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white font-poppins">Team Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white font-poppins">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white font-poppins">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-white font-poppins">Confirm Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4 text-center">
                        <label className="block text-sm font-medium text-white font-poppins">Status</label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 w-full">Sign Up</button>
                    <p className="mt-4 text-center text-white">
                        Already have an account? <Link to="/Login" className="text-white hover:underline text-glow">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
