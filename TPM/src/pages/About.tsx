import starBg from "../assets/Star Background.png"
import { motion } from "framer-motion";

export default function About() {
    return(
        <div className="bg-gradient-to-b from-[#4339B2] to-[#17116B] py-20">
            <motion.img
                src={starBg}
                className="absolute z-10 w-full pointer-events-none" 
                alt="Moon"
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

