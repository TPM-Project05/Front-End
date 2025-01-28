import image from "../assets/nathasa.jpg"
import { motion } from "framer-motion";


export default function Mentors() {
    return (
        <div className="bg-[#1C0C5B]">
            
            <div className="font-poppins leading-tight flex justify-center">
                <div className="text-[56px] text-glow text-white font-poppins">Meet Our Mentors</div>
            </div>
            <div className="flex justify-center py-10">
                <div className="h-[310px] w-[210px] rounded-[15px] shadow-lg p-4 bg-[#3D2C8D]">
                    <div className="flex justify-center">
                        <div className="rounded-[30px] bg-gradient-to-b from-[#000000] to-[#9747FF] shadow-gray-900 shadow-md">
                         <img src={image} className="h-[205px] w-[160px] rounded-[30px] m-2" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                     <p className="text-white mt-1 text-[16px]">
                        Owena
                     </p>
                     <p className="text-white mt-1 text-[16px]">
                        Cloud Specialist
                     </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
