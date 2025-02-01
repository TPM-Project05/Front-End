import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { ApiError, TeamsApiResponse } from "@/interfaces/Types";
import { AxiosError, AxiosResponse } from "axios";
import axios from "../config/instance";
import Logout from "@/components/Logout";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import { motion } from "motion/react";
import starBg from "../assets/Star Background.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function TeamList() {
  const [sortText, setSortText] = useState("Team’s Name (A - Z)");
  const [isOpen, setIsOpen] = useState(false);
  const [teams, setTeams] = useState<TeamsApiResponse["data"]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks untuk navigasi
  const [isTeamView, setIsTeamView] = useState(false); // State untuk Team Information
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmDelete = () => {
    handleDelete(); // Panggil fungsi delete
    closeModal();   // Tutup modal
  };

  const navigate = useNavigate(); // Hook untuk navigasi

  const fetchTeams = async () => {
    try {
      const response: AxiosResponse<TeamsApiResponse> = await axios.get("/teams", {
        params: {
          search: searchQuery,
          sortField: sortField,
          sortDirection: sortDirection,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setTeams(response.data.data);
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      console.error(
        axiosError.response?.data.message || "Unknown error occurred"
      );
    }
  };

  useEffect(() => {
    fetchTeams();
  }, [searchQuery, sortField, sortDirection]);

  const handleSortChange = (newSortText: string) => {
    setSortText(newSortText);
    setIsOpen(false);
  };

  const handleTeamSelect = (teamId: number) => {
    setSelectedTeamId(teamId);
    setCurrentIndex(0); // Reset indeks saat memilih tim baru
    setIsTeamView(false); // Reset ke tampilan member/leader
  };

  const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  // Gabungkan leader dan member ke dalam satu array
  const teamMembers = selectedTeam
    ? [selectedTeam.leader, ...selectedTeam.members]
    : [];

  const handleNext = () => {
    if (currentIndex < teamMembers.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsTeamView(true); // Tampilkan Team Information
    }
  };

  const handlePrevious = () => {
    if (isTeamView) {
      setIsTeamView(false); // Kembali ke tampilan member/leader
      setCurrentIndex(teamMembers.length - 1); // Set ke member terakhir
    } else {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const handleEdit = () => {
    const currentMember = teamMembers[currentIndex];
    if (currentIndex === 0) {
      // Leader
      navigate(`/edit/leader/${currentMember.id}`);
    } else {
      // Member
      navigate(`/edit/member/${currentMember.id}`);
    }
  };

  const handleDelete = async () => {
    const currentMember = teamMembers[currentIndex];
    const isLeader = currentIndex === 0;
    const endpoint = isLeader
      ? `/admin/leaders/${currentMember.id}`
      : `/admin/members/${currentMember.id}`;

    try {
      await axios.delete(endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      alert(`${isLeader ? "Leader" : "Member"} deleted successfully!`);
      fetchTeams(); // Refresh data setelah delete
      setSelectedTeamId(null); // Reset selected team
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      console.error(
        axiosError.response?.data.message || "Failed to delete"
      );
    }
  };

  const handleDeleteTeam = async () => {
    if (!selectedTeamId) return;
    try {
      await axios.delete(`/admin/team/${selectedTeamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      alert("Team deleted successfully!");
      fetchTeams(); // Refresh data setelah delete
      setSelectedTeamId(null); // Reset selected team
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      console.error(
        axiosError.response?.data.message || "Failed to delete team"
      );
    }
  };

  const currentMember = teamMembers[currentIndex];


  return (
    <div className="h-[850px] bg-[#050046]">
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-0 flex items-center justify-center z-[9999] ">
          <div className="bg-[#3D2C8D] p-4 shadow-lg max-w-sm w-full rounded-[12px]">
            <h2 className="text-xl font-bold mb-4 text-white">Confirm Deletion</h2>
            <p className="mb-4 text-white">Are you sure you want to delete this item?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="bg-opacity-0 p-2 rounded-[12px] border-1"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-[12px]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <motion.img
                src={starBg}
                className="absolute w-full h-[850px] pointer-events-none opacity-40"
                alt="Moon"
            />
     <div className="flex justify-between items-center px-[33px] pt-[46px]">
        <div className="text-[48px] text-glow text-white font-semibold leading-tight">
          Team List
        </div>
        <div>
          <Logout />
        </div>
      </div>
      <div className="border-t-[1px] border-b-[1px] h-[80px] mx-10">
        <div className="flex justify-between py-[14px]">
          <div className="border-1 w-[300px] h-[50px] rounded-[16px]">
            <div className="pl-[16px] py-[10px] flex justify-normal gap-[24px]">
              <CiSearch size={24} />
              <input
                type="text"
                placeholder="Search here...."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="dropdown dropdown-end flex items-center">
              <div
                tabIndex={0}
                className="flex justify-normal gap-3 bg-[#3D2C8D] h-[40px] rounded-[16px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center p-[10px] gap-4">
                  <div role="button" className="flex items-center text-center">
                    Sorted by: {sortText}
                  </div>
                  <IoIosArrowDown size={24} />
                </div>
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-[200px] w-[315px] p-2 shadow"
                >
                  <li
                    onClick={() => {
                      setSortField("name");
                      setSortDirection("asc");
                      handleSortChange("Team's Name (A - Z)");
                    }}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Team's Name (A - Z)</a>
                  </li>
                  <li
                    onClick={() => {
                      setSortField("name");
                      setSortDirection("desc");
                      handleSortChange("Team's Name (Z - A)");
                    }}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Team's Name (Z - A)</a>
                  </li>
                  <li
                    onClick={() => {
                      setSortField("created_at");
                      setSortDirection("asc");
                      handleSortChange("Date Created (Oldest First)");
                    }}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Date Created (Oldest First)</a>
                  </li>
                  <li
                    onClick={() => {
                      setSortField("created_at");
                      setSortDirection("desc");
                      handleSortChange("Date Created (Newest First)");
                    }}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Date Created (Newest First)</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-10 gap-3 ">
        <div className="z-[8888] overflow-y-scroll scrollbar-hide h-[450px]">
          {teams.map((team) => (
            <div
              key={team.id}
              className={`w-[490px] h-[115px] ${
                selectedTeamId === team.id
                  ? "bg-gradient-to-r from-[#3D2C8D] to-[#110C27]"
                  : "bg-[#6860CB]"
              } rounded-[12px] mt-5 cursor-pointer border-b-2`}
              onClick={() => handleTeamSelect(team.id)}
            >
              <div className="flex justify-between">
                <div className="flex flex-col py-5 px-10">
                  <p className="text-[32px] font-semibold">{team.name}</p>
                  <p>{new Date(team.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-normal items-center p-10 gap-4">
                  <button className="" onClick={() => navigate(`/edit/team/${team.id}`)}>
                    <GrEdit size={24} />
                  </button>
                  <button className="" onClick={handleDeleteTeam}>
                    <FaRegTrashCan size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedTeam && (
          <div className="flex justify-center items-center">
          <button
            onClick={handlePrevious}
          >
            <FaArrowAltCircleLeft size={30}/>
          </button>
          
        </div>
        )}
        {selectedTeam && (
          <div className="h-[480px] w-[450px] border-[#3D2C8D] border-2 bg-white bg-opacity-20 clip-team-data mt-5 ">
            {isTeamView ? (
              // Tampilan Team Information
              <div className="pt-[30px] pl-[32px] pr-[30px] ">
                <p className="text-white pl-1 text-2xl font-semibold font-poppins">
                  Team Information
                </p>
                <div className="pt-5">
                  <div className="flex justify-between pt-2">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Team Name</p>
                    </div>
                    <p className="font-poppins">{selectedTeam.name}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Email</p>
                    </div>
                    <p className="font-poppins">{selectedTeam.email}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Role</p>
                    </div>
                    <p className="font-poppins">{selectedTeam.role}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Status</p>
                    </div>
                    <p className="font-poppins">{selectedTeam.status}</p>
                  </div>
                </div>
              </div>
            ) : (
              // Tampilan Member/Leader Information
              <div className="pt-[30px] pl-[32px] pr-[30px]">
                <p className="text-white pl-1 text-2xl font-semibold font-poppins">
                  {currentIndex === 0
                    ? "Team Leader Information"
                    : `Member ${currentIndex} Information`} {/* Perbaikan penomoran member */}
                </p>
                <div className="pt-5">
                  <div className="flex justify-between pt-2">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Full Name</p>
                    </div>
                    <p className="font-poppins">{currentMember?.full_name}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Phone</p>
                    </div>
                    <p className="font-poppins">{currentMember?.phone}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Line ID</p>
                    </div>
                    <p className="font-poppins">{currentMember?.line_id}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">GitHub ID</p>
                    </div>
                    <p className="font-poppins">{currentMember?.github_id}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Birth Place</p>
                    </div>
                    <p className="font-poppins">{currentMember?.birth_place}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">Birth Date</p>
                    </div>
                    <p className="font-poppins">{currentMember?.birth_date}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">CV</p>
                    </div>
                    <a
                      href={`http://127.0.0.1:8000/files/${currentMember?.cv}`}
                      className="font-poppins text-white underline"
                    >
                      CV
                    </a>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex justify-normal items-center gap-2">
                      <p className="font-poppins">ID Card</p>
                    </div>
                    <a
                      href={`http://127.0.0.1:8000/files/${currentMember?.flazz_card}`}
                      className="font-poppins text-white underline"
                    >
                      ID Card
                    </a>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={handleEdit}
                      className="bg-[#3D2C8D] p-2 text-white rounded-[8px]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={openModal}
                      className="bg-red-500 p-2 text-white rounded-[8px]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                    
              </div>
            )}

            
          </div>
        )}
      {selectedTeam && (
        <div className="flex justify-center items-center pointer-events-auto">
          <button onClick={handleNext} >
        <FaArrowAltCircleRight size={30}/>
          </button>
        </div>
        )}
      </div>
    </div>
  );
}