import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

export default function TeamList() {
    return(
        <div className="h-[850px] bg-[#050046]">
            <div className="leading-tight flex normal pl-[33px] pt-[46px]">
                <div className="text-[48px] pb-5 text-glow text-white font-semibold">Team List</div>
            </div>
            <div className="border-t-[1px] border-b-[1px] h-[80px] mx-10">
                <div className="flex justify-between py-[14px]">
                    <div className="border border-1 w-[300px] h-[50px] rounded-[16px]">
                        <div className="pl-[16px] py-[10px] flex justify-normal gap-[24px]">
                            <CiSearch size={24}/>
                            <input type="text" placeholder="Search here...." className="bg-transparent outline-none"/>
                        </div>
                    </div>
            <div className="flex items-stretch">
            <div className="dropdown dropdown-end flex items-center">
                <div tabIndex={0} className="flex justify-normal gap-3 bg-[#3D2C8D] h-[40px] rounded-[16px]">
                    <div className="flex items-center p-[10px] gap-4">
                        <div  role="button" className="flex items-center text-center">sorted by : Team’s Name (A - Z)</div>
                        <IoIosArrowDown size={24}/>
                    </div>
                </div>
                <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-[200px] w-[315px] p-2 shadow">
                <li><a>Sorted By : Team's Name (A - Z)</a></li>
                <li><a>Sorted By : Team's Name (Z - A)</a></li>
                <li><a>Sorted By : Registration Time (Latest)</a></li>
                <li><a>Sorted By : Team's Name (Earliest)</a></li>
                </ul>
            </div>
            </div>
                </div>
            </div>
        </div>
    )
}