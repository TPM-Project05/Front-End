import axios from '../config/instance';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FaRegUserCircle } from "react-icons/fa";
import starBg from "../assets/Star Background.png";
import awan from "../assets/Cloud Hero Section.png";
import { motion } from "framer-motion";
import { AxiosError } from 'axios';

export default function EditTeam() {
    const { id } = useParams<{ id: number }>();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("access_token");

            // Payload data to send
            const payload = { name };

            const response = await axios.put(
                `/admin/teams/${id}`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            
            console.log("Leader updated successfully:", response.data);
            navigate("/adminPanel");
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorData = error.response?.data?.errors;
                console.log(errorData, '<<');

                let errorMessage = "Update failed";

                if (typeof errorData === 'object' && errorData !== null) {
                    errorMessage = Object.entries(errorData)
                        .map(([field, message]) => `* ${message}`)
                        .join('\n');
                } else if (typeof errorData === 'string') {
                    errorMessage = `* ${errorData}`;
                }

                setErrorMessage(errorMessage);
            } else {
                console.error("Unexpected error:", error);
                setErrorMessage("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="bg-[#17116B] h-[790.5px]">
            <motion.img
                src={starBg}
                className="absolute w-full pointer-events-none"
                alt="Star Background"
            />
            <motion.img
                src={awan}
                className="absolute z-10 mt-[00px] pointer-events-none w-full h-[790px] 2xl:w-full"
                alt="Cloud Background"
            />
            <div className="absolute pt-[43px]">
                <button
                    onClick={() => navigate("/adminPanel")}
                    className="transition-all duration-300 ease-in-out"
                >
                    <div className="ml-[43px] border-2 w-[120px] h-[40px] z-20 rounded-[16px] justify-center items-center hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]">
                        <div className="flex justify-normal p-[7px] gap-5 items-center">
                            <BsArrowLeftCircle size={24} />
                            <p className="text-white">Back</p>
                        </div>
                    </div>
                </button>
            </div>

            <div className="flex flex-col justify-center items-center pt-[33px]">
                <p className="text-[40px] font-semibold">Editing - Team</p>
                <div className="w-[470px] h-[240px] border-1 border-t-2 rounded-[16px] bg-white bg-opacity-20 mt-5">
                    <div className="pt-[10px] px-[36px] flex flex-col overflow-y-auto h-[430px]">
                        {/* Full Name */}
                        <div className="flex flex-col pt-3">
                            <p>Full Name</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <div className="ml-[15px] flex justify-normal items-center">
                                    <FaRegUserCircle size={24} className="text-black" />
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl border-none focus:outline-none focus:border-none w-[330px]"
                                        placeholder="Enter Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                {errorMessage && (
                    <div className="text-red-500 text-sm mt-2 whitespace-pre-line">
                        {errorMessage}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex items-center justify-center pt-5">
                    <button
                        onClick={handleUpdate}
                        className="h-[50px] w-[230px] border b-1 bg-[#3D2C8D] rounded-[8px] shadow-xl hover:bg-[#050046] hover:shadow-2xl transition-all duration-300"
                    >
                        <p className="text-center">Update Team</p>
                    </button>
                </div>
                        </div>
                    </div>
                </div>

                {/* Error message */}
            </div>
        </div>
    );
}
