import starBg from "../assets/Star Background.png"
import { motion } from "framer-motion";
import star from "../assets/Star.png";

export default function About() {
    return(
        <div className="bg-gradient-to-b from-[#4339B2] to-[#17116B] py-20 overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute z-10 w-full pointer-events-none" 
                alt="Moon"
            />
            <motion.img
                src={star}
                className="absolute left-[1%] top-[97%] opacity-100 w-[%] pointer-events-none z-20" 
                alt="Star 2"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={star}
                className="absolute right-[8%] top-[130%] opacity-100 w-[9%] pointer-events-none z-0" 
                alt="Star 3"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            
            <div className="font-poppins leading-tight flex flex-col items-center mx-16 text-white ">
                <div className="text-[56px] text-glow text-white font-poppins mb-4">About Hackathon 8.0</div>
                <div className="text-center px-4 text-xl">Hackathon is the peak event of TechnoScape that forms a 36-hour coding competition. It challenges
                    participants to create innovative applications or websites to solve real-world problems. Participants 
                    will have the opportunity to get insights from mentors in the business, technology, and design mentoring sessions.
                </div>
            </div>
            <div className="flex justify-center py-10">
                <button className="bg-[#6860CB] w-[275px] h-[58px] rounded-[8px]">
                    <p className="text-white font-medium text-2xl">
                        Link to Guidebook
                    </p>
                </button>
            </div>
        </div>
    )
}

