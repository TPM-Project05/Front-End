import axios from '../config/instance';
import { AxiosError, AxiosResponse } from "axios";
import starBg from "../assets/Star Background.png";
import awan from "../assets/Cloud 2 Home.png";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { GoPlus } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLine } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { GrDocumentText } from "react-icons/gr";
import {today, getLocalTimeZone} from "@internationalized/date";
import {Calendar} from "@heroui/calendar";
import { useState } from 'react';

export default function AddMember() {
    const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  // Mendapatkan tanggal saat ini dan zona waktu lokal
  const currentDate = today(getLocalTimeZone());

  // Format tanggal dalam bentuk "DD MM YYYY"
  const formattedDate = selectedDate
    ? selectedDate.toString("dd MM yyyy") 
    : currentDate.toString("dd MM yyyy"); 

  // Fungsi untuk menangani pemilihan tanggal dari kalender
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsCalendarVisible(false); // Sembunyikan kalender setelah memilih tanggal
  };
    const navigate = useNavigate()
    return(
        <div className='bg-[#17116B] h-[785.5px]'>
            <motion.img
                src={starBg}
                className="absolute w-full pointer-events-none"
                alt="Moon"
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
            <div className='flex justify-between mx-[91px] pt-[100px] gap-[60px]'>
                <div className='flex flex-col w-[490px]'>
                    <h1 className="text-[72px] text-glow w-[500px] h-[80px] font-semibold">Members</h1>
                    <h1 className="text-[72px] mb-8 text-glow w-[500px] h-[80px] font-semibold">Information</h1>

                    <div className='w-[490px] h-[54px] bg-white bg-opacity-20 border border-1 rounded-[16px]'>
                        <div className='px-[24px] py-[12px]'>
                            <p className='text-xl font-semibold'>Member 1</p>
                        </div>
                    </div>
                    <div className='flex justify-end pt-3'>
                        <button 
                        className='w-[165px] h-[42px] bg-white bg-opacity-20 right-2 border border-1 rounded-[16px]'>
                            <div className='flex justify-normal px-[14px] py-[8px]'>
                                <GoPlus size={24} />
                                <p>Add Member</p>
                            </div>
                        </button>
                    </div>
                </div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='flex flex-col'>
                    <p className='text-[24px] font-semibold'>Member 1 Information</p>
                    <div className='w-[530px] h-[400px] border-1 border-t-2 rounded-[16px] bg-white bg-opacity-20'>
                        <div className='pt-[36px] px-[36px] flex flex-col overflow-y-auto h-[380px]'>
                            <div className='flex flex-col '>
                                <p>Full Name</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaRegUserCircle  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Enter text"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Email Address</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <MdOutlineEmail  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Phone Number</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FiPhone  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Line Id</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaLine  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Line Id"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Github</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <FaGithub  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Github/Gitlab ID"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Birth Place</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className='ml-[15px] flex justify-normal items-center'>
                                        <CiLocationOn  className='text-gray-600' size={30}/>
                                        <input
                                        type="text"
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                            border-none focus:outline-none focus:border-none w-[370px]"
                                        placeholder="Birth Place"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col pt-3">
                                <p>Birth Date</p>
                                <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                    <div className="ml-[15px] flex justify-normal items-center">
                                    {/* Input untuk DD MM YYYY */}
                                    <input
                                        type="text"
                                        value={formattedDate} // Menampilkan tanggal yang diformat
                                        className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-600 text-xl 
                                        border-none focus:outline-none focus:border-none"
                                        placeholder="DD MM YYYY"
                                        readOnly
                                    />
                                    {/* Ikon kalender yang membuka kalender HeroUI */}
                                    <SlCalender
                                        className="text-gray-600 cursor-pointer"
                                        size={30}
                                        onClick={() => setIsCalendarVisible((prev) => !prev)} // Toggle kalender
                                    />
                                    </div>
                                </div>

                                {/* Menampilkan kalender HeroUI */}
                                {isCalendarVisible && (
                                    <div className="absolute mt-2 bg-white border shadow-md rounded-md">
                                    <Calendar
                                        selectedDate={selectedDate}
                                        onChange={handleDateSelect}
                                    />
                                    </div>
                                )}
                                </div>

                            <div className='flex flex-col pt-3'>
                                <p>Upload CV</p>
                                <button>
                                    <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                        <div className='ml-[15px] flex justify-normal items-center'>
                                            <GrDocumentText  className='text-gray-600' size={30}/>
                                            <p className='text-gray-600 pl-3'>Upload CV</p>
                                        </div>
                                    </div>
                                </button>
                                <p>*Format file pdf, jpg, jpeg dan png</p>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <p>Upload Id Card</p>
                                <button>
                                    <div className="flex items-center bg-white border rounded-[8px] w-[440px] h-[60px]">
                                        <div className='ml-[15px] flex justify-normal items-center'>
                                            <GrDocumentText  className='text-gray-600' size={30}/>
                                            <p className='text-gray-600 pl-3'>Upload Id Card</p>
                                        </div>
                                    </div>
                                </button>
                                <p>*Format file pdf, jpg, jpeg dan png</p>
                            </div>

                            <div className='flex items-center justify-center pt-5' >
                            <button 
                                className="h-[50px] w-[230px] border b-1 bg-[#3D2C8D] rounded-[8px] shadow-xl 
                            hover:bg-[#050046] hover:shadow-2xl transition-all duration-300">
                                <p className="text-center">
                                    Register Here
                                </p>
                            </button>
                            </div>
                        </div>
                    </div>
                        <p>*Data cannot be changed once registered</p>
                </motion.div>
            </div>
        </div>
    )
}