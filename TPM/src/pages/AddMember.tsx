import axios from '../config/instance';
import { AxiosError } from "axios";
import starBg from "../assets/Star Background.png";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FaRegUserCircle, FaLine, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from "@heroui/calendar";
import { useState, useEffect } from 'react';
import awan from "../assets/Cloud 2 Home.png";

export default function AddMember() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [memberData, setMemberData] = useState({
        full_name: '',
        phone: '',
        line_id: '',
        github_id: '',
        birth_place: '',
        cv: null,
        flazz_card: null,
        birth_date: ""
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [teamData, setTeamData] = useState(null);
    const [members, setMembers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const token = localStorage.getItem("access_token");
                const response = await axios.get("/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTeamData(response.data.team);
                setMembers(response.data.members);
            } catch (error) {
                console.error("Failed to fetch team data:", error);
            }
        };

        fetchTeamData();
    }, []);

    const currentDate = today(getLocalTimeZone());
    const formattedDate = selectedDate
        ? selectedDate.toString("dd MM yyyy")
        : currentDate.toString("dd MM yyyy");

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setMemberData({ ...memberData, birth_date: date.toString("yyyy-MM-dd") });
        setIsCalendarVisible(false);
    };

    const handleInputChange = (field, value) => {
        setMemberData({ ...memberData, [field]: value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setMemberData((prevData) => ({
            ...prevData,
            [name]: file,
        }));
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("access_token");
    
            const formData = new FormData();
            Object.keys(memberData).forEach(key => {
                formData.append(key, memberData[key]);
            });
    
            const response = await axios.post(
                "/members",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
    
            console.log("Member registered successfully:", response.data);
            alert("Member registered successfully!");
            navigate("/dashboard");
    
        } catch (error) {
            console.log(error, '<<<<<');
    
            if (error instanceof AxiosError) {
                const errorData = error.response?.data?.errors;
                let errorMessage = "Registration failed";
            
                if (typeof errorData === 'object' && errorData !== null) {
                    // Format pesan error dengan * dan newline
                    errorMessage = Object.entries(errorData)
                        .map(([field, message]) => `*${message}`) // Tambahkan * di awal setiap pesan
                        .join('\n'); // Gabungkan dengan newline
                } else if (typeof errorData === 'string') {
                    errorMessage = `*${errorData}`; // Jika error adalah string, tambahkan * di awal
                }
            
                setErrorMessage(errorMessage); // Set formatted error message as string
            } else {
                console.error("Unexpected error:", error);
                setErrorMessage("An unexpected error occurred.");
                alert("An unexpected error occurred.");
            }
            
        }
    };

    return (
        <div className='bg-[#17116B] h-[790.5px]'>
            <motion.img
                src={awan}
                className="absolute z-10 mt-[450px] pointer-events-none w-full h-[400px] 2xl:w-full"
                alt="Cloud"
            />
            <motion.img
                src={starBg}
                className="absolute w-full pointer-events-none"
                alt="Moon"
            />
            <button
                onClick={() => navigate('/')}
                className="absolute top-4 left-4 text-white transition-all duration-300 ease-in-out">
                <div className="ml-[43px] border-2 w-[120px] h-[40px] z-20 rounded-[16px] justify-center items-center
                    hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 
                    active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]">
                    <div className="flex justify-normal p-[7px] gap-5 items-center">
                        <BsArrowLeftCircle size={24} />
                        <p className="text-white">back</p>
                    </div>
                </div>
            </button>
            <div className='flex justify-between mx-[91px] pt-[60px] gap-[60px]'>
                <div className='flex flex-col w-[490px]'>
                    <h1 className="text-[72px] text-glow w-[500px] h-[80px] font-semibold">Members</h1>
                    <h1 className="text-[72px] mb-8 text-glow w-[500px] h-[80px] font-semibold">Information</h1>

                    <div className='w-[490px] h-[54px] bg-white bg-opacity-20 border border-1 rounded-[16px]'>
                        <div className='px-[24px] py-[12px]'>
                            <p className='text-xl font-semibold'>Member {members.length + 1}</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='flex flex-col'>
                    <p className='text-[24px] font-semibold'>Member {members.length + 1} Information</p>
                    <div className='w-[530px] h-[400px] border-1 border-t-2 rounded-[16px] bg-white bg-opacity-20'>
                        <div className='pt-[36px] px-[36px] flex flex-col overflow-y-auto h-[380px]'>
                            <div className='flex flex-col pt-3'>
                                <p>Full Name</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaRegUserCircle size={24} className='text-black' />
                                        <input
                                            type="text"
                                            className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none w-[370px]"
                                            placeholder="Enter Full Name"
                                            value={memberData.full_name}
                                            onChange={(e) => handleInputChange("full_name", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Phone Number</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FiPhone size={24} className='text-black' />
                                        <input
                                            type="text"
                                            className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none w-[370px]"
                                            placeholder="Phone Number"
                                            value={memberData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Line ID</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaLine size={24} className='text-black' />
                                        <input
                                            type="text"
                                            className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none w-[370px]"
                                            placeholder="Line ID"
                                            value={memberData.line_id}
                                            onChange={(e) => handleInputChange("line_id", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Github</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaGithub size={24} className='text-black' />
                                        <input
                                            type="text"
                                            className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none w-[370px]"
                                            placeholder="Github/Gitlab ID"
                                            value={memberData.github_id}
                                            onChange={(e) => handleInputChange("github_id", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Birth Place</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <CiLocationOn size={24} className='text-black' />
                                        <input
                                            type="text"
                                            className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none w-[370px]"
                                            placeholder="Birth Place"
                                            value={memberData.birth_place}
                                            onChange={(e) => handleInputChange("birth_place", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col pt-3">
                                <p>Birth Date</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className="ml-[15px] w-[400px] flex justify-between items-center">
                                        <input
                                            type="text"
                                            value={formattedDate}
                                            className="flex-grow px-3 py-2 rounded-l-md text-gray-600 text-xl 
                                                border-none focus:outline-none focus:border-none"
                                            placeholder="DD MM YYYY"
                                            readOnly
                                        />
                                        <SlCalender
                                            className="text-gray-600 cursor-pointer"
                                            size={30}
                                            onClick={() => setIsCalendarVisible((prev) => !prev)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cv" className="block text-sm font-medium text-white font-poppins">Upload CV</label>
                                <input
                                    type="file"
                                    id="cv"
                                    name="cv"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded p-2 w-full bg-white text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="flazz_card" className="block text-sm font-medium text-white font-poppins">Upload Flazz/ID Card</label>
                                <input
                                    type="file"
                                    id="flazz_card"
                                    name="flazz_card"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded p-2 w-full bg-white text-black"
                                />
                            </div>

                            {isCalendarVisible && (
                                <div className="absolute mt-[200px] bg-white border shadow-md rounded-md">
                                    <Calendar
                                        defaultValue={today(getLocalTimeZone())}
                                        maxValue={today(getLocalTimeZone())}
                                        selectedDate={selectedDate}
                                        onChange={handleDateSelect}
                                        className='z-20'
                                        showMonthAndYearPickers aria-label="Date (Show Month and Year Picker)"
                                    />
                                </div>
                            )}

                                {errorMessage && (
                                    <div className="text-red-500 text-sm mt-2 whitespace-pre-line">
                                        {errorMessage}
                                    </div>
                                )}

                            <div className='flex items-center justify-center pt-5'>
                                <button
                                    onClick={handleSubmit}
                                    className="h-[50px] w-[230px] border b-1 bg-[#3D2C8D] rounded-[8px] shadow-xl 
                                        hover:bg-[#050046] hover:shadow-2xl transition-all duration-300">
                                    <p className="text-center">Add Member</p>
                                </button>
                            </div>

                        </div>
                    </div>
                    <p>*Data cannot be changed once registered</p>
                </motion.div>
            </div>

        </div>
    );
}