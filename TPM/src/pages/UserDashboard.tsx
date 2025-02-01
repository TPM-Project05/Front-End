import { FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoAtOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import awan from "../assets/Cloud 2 Home.png";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import starBg from "../assets/Star Background.png";
import { useNavigate } from "react-router-dom";
import axios from '../config/instance';
import Logout from "@/components/Logout";
import { ApiError, TeamDetails } from "@/interfaces/Types";
import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Navigasi ke halaman login
      setTimeout(() => {
        window.location.reload(); // Refresh halaman setelah 1 detik
      }, 1000);
    }
    console.log(token, "<<<<");
  }, [token, navigate]);
  
  const fetchTeam = async (): Promise<TeamDetails> => {
    try {
      const response: AxiosResponse<TeamDetails> = await axios.get('/dashboard', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(localStorage.getItem("access_token"))}`,
        },
      });
      console.log(response, 'response');
      
      return response.data;
    } catch (error) {
      if (error) {
        const axiosError = error as AxiosError<ApiError>;
        throw new Error(axiosError.response?.data.message || 'Unknown error');
      }
      throw new Error('Error fetching users');
    }
  };
  
  const handleAddMember = () => {
    if ((teamDetails?.members?.length ?? 0) >= 3) {
      setIsPopupOpen(true); // Tampilkan modal jika anggota >= 3
      return;
    }
    setTimeout(() => setIsPopupOpen(true), 10);
    navigate("/add/member"); // Navigasi ke halaman tambah anggota jika anggota < 3
  };
  
  // Get team data
  const [teamDetails, setTeamDetails] = React.useState<TeamDetails | null>(null);
  console.log(teamDetails, '<<<<<');

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setIsPopupOpen(false), 300);
  };
  
  
  React.useEffect(() => {
    fetchTeam().then((data) => setTeamDetails(data)).catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-[#17116B] h-[785.5px]">
      <motion.img
        src={starBg}
        className="absolute w-full pointer-events-none"
        alt="Moon"
      />
      <div className="flex justify-between pl-[80px] pr-[30px] pt-[55px]">
        <h1 className="text-5xl text-center mb-8 text-glow">Welcome {teamDetails?.team?.name}</h1>
        <Logout />
      </div>

      <div className="flex justify-between">
        <div className="h-[450px] w-[590px] border border-1 bg-white bg-opacity-20 ml-[82px] rounded-[16px]">
          <div className="pt-[30px] pl-[32px] pr-[30px]">
            <p className="text-white pl-1 text-2xl font-semibold font-poppins">Team Leader Information</p>
            <div className="pt-5">
              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <FaRegUserCircle size={24} />
                  <p className="font-poppins">Full Name</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader?.full_name}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <FiPhone size={24} />
                  <p className="font-poppins">Phone</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader?.phone}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <IoAtOutline size={24} />
                  <p className="font-poppins">Line ID</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader.line_id}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <FaGithub size={24} />
                  <p className="font-poppins">GitHub ID</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader.github_id}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <CiLocationOn size={24} />
                  <p className="font-poppins">Birth Place</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader.birth_place}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <HiCalendarDateRange size={24} />
                  <p className="font-poppins">Birth Date</p>
                </div>
                <p className="font-poppins">{teamDetails?.leader.birth_date}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <IoDocumentTextOutline size={24} />
                  <p className="font-poppins">Birth Date</p>
                </div>
                <a 
                  href={`http://127.0.0.1:8000/files/${teamDetails?.leader?.cv}`}
                  className="font-poppins text-white underline cursor-pointer"
                  disabled={isDownloading} // Menonaktifkan link saat sedang mendownload
                >
                  {isDownloading ? "Downloading..." : "CV"}
                </a>
              </div>


              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <IoDocumentTextOutline size={24} />
                  <p className="font-poppins ">ID/Binusian Card</p>
                </div>
                <a href={`http://127.0.0.1:8000/files/${teamDetails?.leader?.flazz_card}`} className="text-white underline cursor-pointer">
                  Id Card
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
        <div className="w-[505px] h-[310px] border-1 bg-white bg-opacity-20 mr-[30px] rounded-[16px]">
          <div className="pt-[30px] pl-[32px]">
            <p className="text-white font-medium text-2xl font-poppins">Timeline</p>
                <div className="w-80 pt-5">
                    <ul>
                        <li className="relative flex gap-6 pb-4 items-baseline">
                            <div className="before:absolute before:left-[7.5px] before:h-full before:w-[1px] before:bg-white">
                            <FaCircle />
                            </div>
                            <div className="text-sm text-white">
                                <p className="text-[16px]">Open Registration</p>
                                <p className="text-[12px]">14 May 2025</p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative flex gap-6 pb-4">
                            <div className="before:absolute before:left-[7.5px] before:h-full before:w-[1px] before:bg-white">
                            <FaCircle />
                            </div>
                            <div className="text-smtext-gray-600">
                                <p className="text-[16px]">Close Registration</p>
                                <p className="text-[12px]">11 June 2025</p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative flex gap-6 pb-4">
                            <div className="before:absolute before:left-[7.5px] before:h-full before:w-[1px] before:bg-white">
                            <FaCircle />
                            </div>
                            <div className="text-sm  text-white">
                                <p className="text-[16px]">Technical Meeting</p>
                                <p className="text-[12px]">12 June 2025</p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative flex gap-6 pb-4">
                            <FaCircle />
                            <div className="text-sm  text-white">
                                <p className="text-[16px]">Competetion Day</p>
                                <p className="text-[12px]">13 - 15 June 2025</p>
                            </div>
                        </li>
                    </ul>
                </div>
          </div>
        </div>

          <div className="w-[505px] h-[150px] border border-1 bg-white bg-opacity-20 rounded-[16px]">
            <div className="px-[20px] py-[15px]">
            <div className="flex flex-col">
      <div className="flex justify-between pb-2">
        <p className="text-white font-medium text-2xl font-poppins">Team Members</p>
        <button
          onClick={handleAddMember}
          className="border-1 w-[150px] rounded-[16px] bg-white bg-opacity-20"
        >
          <div className="flex justify-between px-[8px]">
            <GoPlus size={24} />
            <p className="text-[16px]">Add Member</p>
          </div>
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
        >
          <div className="bg-[#3D2C8D] rounded-xl shadow-xl p-6 w-[300px] text-center transition-transform duration-300 ease-in-out transform scale-100">
            <p className="text-lg font-medium mb-4">Maximum 3 members allowed!</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-[red-500] text-white rounded-[10px] hover:bg-red-600 border-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
              {/* Menampilkan data member */}
              {[...((teamDetails?.members) ?? []), ...Array(3 - ((teamDetails?.members?.length ?? 0))).fill(null)].map((member, index) => (
                <div key={index} className="flex justify-between">
                  <p>{`Member ${index + 1}`}</p>
                  <p>{member ? member.full_name : "-"}</p> {/* Menampilkan nama atau "-" jika null */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.img
          src={awan}
          className="absolute mt-[380px] z-[10] pointer-events-none w-full mr-6 h-[270px] 2xl:w-full"
          alt="Cloud"
        />
      </div>

      

      <div className="flex flex-col absolute z-20 ml-[80px] pointer-events-auto">
        <div className=" flex justify-normal gap-3 mt-[40px]">
          <FaWhatsapp size={24} />
          <p className="text-[20px] font-medium"> Contact Us</p>
        </div>
        <div className="flex justify-between ml-[37px] gap-5 mt-2">
          <p>Eldwin</p>
          <p>+6287609897898</p>
        </div>
        <div className="flex justify-between ml-[37px] gap-5">
          <p>Sianto</p>
          <p>+6287609897898</p>
        </div>
      </div>
    </div>
  );
}