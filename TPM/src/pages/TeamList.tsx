import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { ApiError, TeamsApiResponse } from "@/interfaces/Types";
import { AxiosError, AxiosResponse } from "axios";
import axios from "../config/instance";

export default function TeamList() {
  const [sortText, setSortText] = useState("Team’s Name (A - Z)");
  const [isOpen, setIsOpen] = useState(false);
  const [teams, setTeams] = useState<TeamsApiResponse["data"]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const fetchTeams = async () => {
    try {
      const response: AxiosResponse<TeamsApiResponse> = await axios.get("/teams", {
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
  }, []);

  const handleSortChange = (newSortText: string) => {
    setSortText(newSortText);
    setIsOpen(false);
  };

  const handleTeamSelect = (teamId: number) => {
    setSelectedTeamId(teamId);
  };

  const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  return (
    <div className="h-[850px] bg-[#050046]">
      <div className="leading-tight flex normal pl-[33px] pt-[46px]">
        <div className="text-[48px] pb-5 text-glow text-white font-semibold">
          Team List
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
                    onClick={() => handleSortChange("Team’s Name (A - Z)")}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Team's Name (A - Z)</a>
                  </li>
                  <li
                    onClick={() => handleSortChange("Team’s Name (Z - A)")}
                    className="hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <a>Sorted By : Team's Name (Z - A)</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    
    <div className="flex justify-between mx-10 mt-5">
      <div className="">
        {teams.map((team) => (
            <div
            
            key={team.id}
            className="w-[490px] h-[115px] bg-[#6860CB] clip-team mt-5 cursor-pointer border-b-2"
            onClick={() => handleTeamSelect(team.id)}
          >
            <div className="flex justify-between">
              <div className="flex flex-col py-5 px-10">
                <p className="text-[32px] font-semibold">{team.name}</p>
                <p>{new Date(team.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex justify-normal items-center p-10 gap-4">
                <GrEdit size={24} />
                <FaRegTrashCan size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div className="h-[450px] w-[590px] border-[#3D2C8D] border-2 bg-white bg-opacity-20 ml-[82px] clip-team-data mt-10">
          <div className="pt-[30px] pl-[32px] pr-[30px]">
            <p className="text-white pl-1 text-2xl font-semibold font-poppins">
              Team Leader Information
            </p>
            <div className="pt-5">
              <div className="flex justify-between pt-2">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Full Name</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.full_name}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Phone</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.phone}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Line ID</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.line_id}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">GitHub ID</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.github_id}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Birth Place</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.birth_place}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Birth Date</p>
                </div>
                <p className="font-poppins">{selectedTeam.leader?.birth_date}</p>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">Id Card</p>
                </div>
                <p className="font-poppins">Id Card</p>
              </div>
              
              <div className="flex justify-between pt-4">
                <div className="flex justify-normal items-center gap-2">
                  <p className="font-poppins">CV</p>
                </div>
                <p className="font-poppins">CV</p>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
