import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputTeam = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [lineId, setLineId] = useState('');
    const [githubId, setGithubId] = useState('');
    const [showScrollHint, setShowScrollHint] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        setShowScrollHint(scrollTop + clientHeight < scrollHeight);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Team Leader Data:', { fullName, email, phoneNumber, lineId, githubId, birthPlace, birthDate, cv, idCard });
        // Navigate to the next step or perform an action
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center">
            <button 
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 border border-gray-300 rounded-full px-4 py-2 text-white"
            >
                Back
            </button>
            <div className="flex w-full max-w-4xl mx-auto">
                <div className="flex-1">
                    <h2 className="text-left text-4xl font-bold mb-4 text-white text-glow font-poppins">Team Leader Information</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-10 border rounded-xl shadow-lg bg-white bg-opacity-15">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-white font-poppins">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white font-poppins">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-white font-poppins">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lineId" className="block text-sm font-medium text-white font-poppins">Line ID</label>
                        <input
                            type="text"
                            id="lineId"
                            value={lineId}
                            onChange={(e) => setLineId(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="githubId" className="block text-sm font-medium text-white font-poppins">GitHub/GitLab ID</label>
                        <input
                            type="text"
                            id="githubId"
                            value={githubId}
                            onChange={(e) => setGithubId(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthPlace" className="block text-sm font-medium text-white font-poppins">Birth Place</label>
                        <input
                            type="text"
                            id="birthPlace"
                            value={birthPlace}
                            onChange={(e) => setBirthPlace(e.target.value)}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white font-poppins">Birth Date</label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="DD"
                                value={birthDate.day}
                                onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
                                required
                                className="border rounded p-2 w-full bg-white text-black"
                            />
                            <input
                                type="text"
                                placeholder="MM"
                                value={birthDate.month}
                                onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
                                required
                                className="border rounded p-2 w-full bg-white text-black"
                            />
                            <input
                                type="text"
                                placeholder="YYYY"
                                value={birthDate.year}
                                onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
                                required
                                className="border rounded p-2 w-full bg-white text-black"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cv" className="block text-sm font-medium text-white font-poppins">Upload CV</label>
                        <input
                            type="file"
                            id="cv"
                            onChange={(e) => {
                                if (e.target.files) {
                                    setCv(e.target.files[0]);
                                }
                            }}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idCard" className="block text-sm font-medium text-white font-poppins">Upload Flazz/ID Card</label>
                        <input
                            type="file"
                            id="idCard"
                            onChange={(e) => {
                                if (e.target.files) {
                                    setIdCard(e.target.files[0]);
                                }
                            }}
                            required
                            className="border rounded p-2 w-full bg-white text-black"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 w-full">Submit</button>
                    {showScrollHint && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                            Scroll Down <span className="arrow-down">↓</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default InputTeam;
