import starBg from "../assets/Star Background.png"
import { motion } from "motion/react"
import awan from "../assets/Cloud 2 Home.png"
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoAtOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

const userData = [
    {
      fullName: "Nathasa Bintang Kayesa",
      email: "nathasakayesa@example.com",
      phone: "+62 812 3456 7890",
      lineId: "@natahasa.kayesa",
      githubId: "nathkyzz",
      cv: "https://link-to-cv.com",
      idCard: "https://link-to-id-card.com",
    },
    // Data lain bisa ditambahkan di sini
  ];

export default function EditMember() {
    
    return(
        <div className="bg-[#17116B] h-[770px] w-full relative">
            <motion.img
                src={starBg}
                className="absolute w-full pointer-events-none" 
                alt="Moon"
            />
            <div className="pt-[43px]">
                <button className="transition-all duration-300 ease-in-out">
                    <div className="ml-[43px] border-2 w-[120px] h-[40px] z-20 rounded-[16px] justify-center items-center
                        hover:border-[#ffff] hover:scale-105 hover:shadow-md hover:shadow-[#ffff]/50 
                        active:border-[#ffff] active:scale-100 active:shadow-xl active:shadow-[#ffff]">
                        <div className="flex justify-normal p-[7px] gap-5 items-center">
                            <BsArrowLeftCircle size={24} />
                            <p className="text-white">back</p>
                        </div>
                    </div>
                </button>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col pl-[80px] pt-10">
                    <h1 className="text-5xl mb-8 text-glow w-[450px] text-[72px] h-[130px] font-semibold">Edit Team Members</h1>
                    <div className="pt-2">
                        <div className="bg-white bg-opacity-20 border 1 rounded-[16px] w-[418px] h-[54px]">
                            <div className="py-[8px] px-[24px]">
                                <p className="font-semibold text-[24px] underline pb-2">Nathasa Bintang Kayesa</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="bg-white bg-opacity-20 border 1 rounded-[16px] w-[418px] h-[54px]">
                            <div className="py-[8px] px-[24px]">
                                <p className="font-semibold text-[24px] underline pb-2">Member 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="bg-white bg-opacity-20 border 1 rounded-[16px] w-[418px] h-[54px]">
                            <div className="py-[8px] px-[24px]">
                                <p className="font-semibold text-[24px] underline pb-2">Member 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="w-[585px] h-[470px] border border-1 bg-white bg-opacity-20 mr-[80px] rounded-[16px] mt-10">
                <div className="py-[30px] px-[45px]">
                    <p className="text-[24px] font-semibold">Member 1 Information</p>
                    {userData.map((user, index) => (
                                <div key={index} className="pt-5">
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <FaRegUserCircle size={24} />
                                      <p className="font-poppins">Full Name</p>
                                    </div>
                                    <p className="font-poppins">{user.fullName}</p>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                        <MdOutlineEmail size={24}/>
                                      <p className="font-poppins">Email</p>
                                    </div>
                                    <p className="font-poppins">{user.email}</p>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <FiPhone size={24}/>
                                      <p className="font-poppins">Phone</p>
                                    </div>
                                    <p className="font-poppins">{user.phone}</p>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <IoAtOutline size={24}/>
                                      <p className="font-poppins">Line ID</p>
                                    </div>
                                    <p className="font-poppins">{user.lineId}</p>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <FaGithub size={24} />
                                      <p className="font-poppins">GitHub ID</p>
                                    </div>
                                    <p className="font-poppins">{user.githubId}</p>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <IoDocumentTextOutline size={24}/>
                                      <p className="font-poppins">CV</p>
                                    </div>
                                    <a href={user.cv} target="_blank" className="font-poppins text-white underline">
                                      View CV
                                    </a>
                                  </div>
                    
                                  <div className="flex justify-between pt-5">
                                    <div className="flex justify-normal items-center gap-2">
                                      <IoDocumentTextOutline size={24}/>
                                      <p className="font-poppins">ID/Binusian Card</p>
                                    </div>
                                    <a href={user.idCard} target="_blank" className="font-poppins text-white underline">
                                      View ID
                                    </a>
                                  </div>
                                </div>
                              ))}
                </div>
            </div>
            </div>

            {/* Gambar awan dengan absolute positioning */}
            <motion.img
                src={awan}
                className="absolute top-[360px] mt-[150px] z-[10] pointer-events-none w-full mr-6 h-[274px]" 
                alt="Cloud"
            />
        </div>
    );
}
