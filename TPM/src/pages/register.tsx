import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const Register = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isBinusian, setIsBinusian] = useState(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registration Data:', { teamName, password, isBinusian });
        navigate('/inputteam'); // Redirect to InputTeam page
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
                        <label htmlFor="teamName" className="block text-sm font-medium text-white font-poppins">Team Name</label>
                        <input
                            type="text"
                            id="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white font-poppins">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white font-poppins">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
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
