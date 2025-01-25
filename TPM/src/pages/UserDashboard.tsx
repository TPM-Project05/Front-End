import logoutIcon from "../assets/logout.png";
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
import awan from "../assets/Cloud 2 Home.png"
import { motion } from "motion/react"
import { FaWhatsapp } from "react-icons/fa";
import starBg from "../assets/Star Background.png"

const userData = [
  {
    fullName: "Anabelle Gabriella Imandjaja",
    email: "anabelle@example.com",
    phone: "+62 812 3456 7890",
    lineId: "@anabelle123",
    githubId: "AnabelleGitHub",
    birthPlace: "Jakarta",
    birthDate: "1997-05-15",
    cv: "https://link-to-cv.com",
    idCard: "https://link-to-id-card.com",
  },
  // Data lain bisa ditambahkan di sini
];

export default function UserDashboard() {
    const teamMembers = [
        { name: "Nathasa Bintang Kayesa" },
        { name: "Ayatullah Bintang Qurne" }, 
        null, // Data member ke-3 tidak ada
      ];

  return (
    <div className="bg-[#17116B] h-[785.5px] pointer-events-none">
        <motion.img
                src={starBg}
                className="absolute w-full" 
                alt="Moon"
            />
      <div className="flex justify-between pl-[80px] pr-[30px] pt-[55px]">
        <h1 className="text-5xl text-center mb-8 text-glow">Welcome, Tech Titans</h1>
        <div className="w-[140px] h-[45px] border border-1 rounded-[16px] flex justify-center items-center">
          <img src={logoutIcon} alt="logout" />
          <p className="text-[19px] font-medium">Logout</p>
        </div>
      </div>

      <div className="flex justify-between">
      <div className="h-[450px] w-[590px] border border-1 bg-white bg-opacity-20 ml-[82px] rounded-[16px]">
        <div className="pt-[30px] pl-[32px] pr-[30px]">
          <p className="text-white font-medium text-2xl font-poppins">
            Team Leader Information
          </p>
          {/* Menampilkan data menggunakan map */}
          {userData.map((user, index) => (
            <div key={index} className="pt-5">
              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <FaRegUserCircle size={24} />
                  <p className="font-poppins">Full Name</p>
                </div>
                <p className="font-poppins">{user.fullName}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                    <MdOutlineEmail size={24}/>
                  <p className="font-poppins">Email</p>
                </div>
                <p className="font-poppins">{user.email}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <FiPhone size={24}/>
                  <p className="font-poppins">Phone</p>
                </div>
                <p className="font-poppins">{user.phone}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <IoAtOutline size={24}/>
                  <p className="font-poppins">Line ID</p>
                </div>
                <p className="font-poppins">{user.lineId}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <FaGithub size={24} />
                  <p className="font-poppins">GitHub ID</p>
                </div>
                <p className="font-poppins">{user.githubId}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <CiLocationOn size={24}/>
                  <p className="font-poppins">Birth Place</p>
                </div>
                <p className="font-poppins">{user.birthPlace}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                <HiCalendarDateRange size={24}/>
                  <p className="font-poppins">Birth Date</p>
                </div>
                <p className="font-poppins">{user.birthDate}</p>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <IoDocumentTextOutline size={24}/>
                  <p className="font-poppins">CV</p>
                </div>
                <a href={user.cv} target="_blank" className="font-poppins text-blue-500">
                  View CV
                </a>
              </div>

              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <IoDocumentTextOutline size={24}/>
                  <p className="font-poppins">ID/Binusian Card</p>
                </div>
                <a href={user.idCard} target="_blank" className="font-poppins text-blue-500">
                  View ID
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* Timeline */}
      <div className="w-[505px] h-[310px] border border-1 bg-white bg-opacity-20 mr-[30px] rounded-[16px]">
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
                                <p className="text-[16px]">Close Registration</p>
                                <p className="text-[12px]">11 June 2025</p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className="relative flex gap-6 pb-4">
                            <FaCircle />
                            <div className="text-sm  text-white">
                                <p className="text-[16px]">Close Registration</p>
                                <p className="text-[12px]">11 June 2025</p>
                            </div>
                        </li>
                    </ul>
                </div>
          </div>
        </div>

      {/* Team Members (dipindahkan ke bawah Timeline) */}
      <div className="w-[505px] h-[140px] border border-1 bg-white bg-opacity-20 rounded-[16px]">
      <div className="p-[20px]">
        <div className="flex justify-between">
          <p className="text-white font-medium text-2xl font-poppins">Team Members</p>
          <button className="pointer-events-auto">
            <FaRegEdit size={24} />
          </button>
        </div>

        {/* Menampilkan data member */}
        {teamMembers.map((member, index) => (
          <div key={index} className="flex justify-between">
            <p>{`Member ${index + 1}`}</p>
            <p>{member ? member.name : "-"}</p> {/* Menampilkan nama atau "-" jika null */}
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
        <div className=" flex justify-normal gap-3  mt-[40px]">
            <FaWhatsapp size={24} className=""/>
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
