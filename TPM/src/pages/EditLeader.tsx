import axios from '../config/instance';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from "@heroui/calendar";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FaRegUserCircle, FaLine, FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import starBg from "../assets/Star Background.png";
import awan from "../assets/Cloud Hero Section.png";
import { motion } from "motion/react";
import { AxiosError } from 'axios';

export default function EditLeader() {
    const { id } = useParams<{ id: number }>();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fullName, setFullName] = useState('');
    const [github, setgithub] = useState('');
    const [line, setline] = useState('');
    const [phone, setphone] = useState('');
    const [birthPlace, setbirthPlace] = useState('');
    const [birthDate, setBirthDate] = useState(''); // Menggunakan string untuk tanggal
    const [flazzCard, setFlazzCard] = useState(null); // Untuk menyimpan file Flazz Card
    const [cv, setCv] = useState(null)

    const currentDate = today(getLocalTimeZone());
    const formattedDate = selectedDate
        ? selectedDate.toString("dd MM yyyy") // Menggunakan format tanggal lokal Indonesia
        : currentDate.toString("dd MM yyyy");

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setBirthDate(date.toString("dd MM yyyy")); // Menyimpan tanggal yang dipilih dalam format lokal
        setIsCalendarVisible(false); // Menyembunyikan kalender setelah memilih tanggal
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("access_token");

            // Data JSON yang akan dikirim
            const payload = {
                full_name: fullName,
                phone: phone,
                line_id: line,
                github_id: github,
                birth_place: birthPlace,
                birth_date: birthDate
            };

            const response = await axios.put(
                `/admin/leaders/${id}`,
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
                            <p className="text-white">back</p>
                        </div>
                    </div>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center pt-[33px]">
                <p className="text-[40px] font-semibold">Editing - Team Leader</p>
                <div className="w-[470px] h-[460px] border-1 border-t-2 rounded-[16px] bg-white bg-opacity-20 mt-5">
                    <div className="pt-[36px] px-[36px] flex flex-col overflow-y-auto h-[430px]">
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
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col pt-3">
                            <p>Phone Number</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <div className="ml-[15px] flex justify-normal items-center">
                                    <FiPhone size={24} className="text-black" />
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl border-none focus:outline-none focus:border-none w-[330px]"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setphone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Line ID */}
                        <div className="flex flex-col pt-3">
                            <p>Line ID</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <div className="ml-[15px] flex justify-normal items-center">
                                    <FaLine size={24} className="text-black" />
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl border-none focus:outline-none focus:border-none w-[330px]"
                                        placeholder="Line ID"
                                        value={line}
                                        onChange={(e) => setline(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Github ID */}
                        <div className="flex flex-col pt-3">
                            <p>Github</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <div className="ml-[15px] flex justify-normal items-center">
                                    <FaGithub size={24} className="text-black" />
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl border-none focus:outline-none focus:border-none w-[330px]"
                                        placeholder="Github/Gitlab ID"
                                        value={github}
                                        onChange={(e) => setgithub(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col pt-3">
                            <p>Github</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <div className="ml-[15px] flex justify-normal items-center">
                                    <CiLocationOn size={24} className="text-black" />
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl border-none focus:outline-none focus:border-none w-[330px]"
                                        placeholder="Github/Gitlab ID"
                                        value={birthPlace}
                                        onChange={(e) => setbirthPlace(e.target.value)}
                                        />
                                </div>
                            </div>
                        </div>

            {isCalendarVisible && (
                <div className="absolute mt-[250px] bg-white border shadow-md rounded-md">
                    <Calendar
                        value={selectedDate || currentDate} // Menggunakan value yang sesuai
                        onChange={handleDateSelect}
                        className='z-20'
                        showMonthAndYearPickers aria-label="Date (Show Month and Year Picker)"
                    />
                </div>
            )}
                        <div className="flex flex-col pt-3">
            <p>Birth Date</p>
            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                <div className="ml-[15px] w-[370px] flex justify-normal items-center">
                    <input
                        type="text"
                        value={formattedDate}
                        className="flex-grow py-2 rounded-l-md text-gray-600 text-xl 
                            border-none focus:outline-none focus:border-none"
                        placeholder="DD MM YYYY"
                        readOnly
                        />
                    <SlCalender
                        className="text-gray-600 cursor-pointer pr-1"
                        size={30}
                        onClick={() => setIsCalendarVisible(prev => !prev)}
                        />
                </div>
            </div>
        </div>

        {/* Flazz Card Upload */}
        {/* <div className="flex flex-col pt-3">
                            <p>Flazz Card</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, "flazzCard")}
                                    className="px-3 py-2 rounded-l-md text-gray-600 text-xl"
                                />
                            </div>
                        </div> */}

                        {/* CV Upload */}
                        {/* <div className="flex flex-col pt-3">
                            <p>CV</p>
                            <div className="flex items-center bg-white border rounded-[8px] w-[380px] h-[60px]">
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, "cv")}
                                    className="px-3 py-2 rounded-l-md text-gray-600 text-xl"
                                />
                            </div>
                        </div> */}

                        {/* Error Message */}
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
                                <p className="text-center">Update Leader</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
