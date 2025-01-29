import { motion } from "framer-motion";
import moon from "../assets/Moon.png";
import star from "../assets/Star.png";
import starBg from "../assets/Star Background.png";
import cloud from "../assets/Cloud Hero Section.png";
import awal1 from "../assets/images/awal1.png";
import awal2 from "../assets/images/awal2.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HalamanAwal = () => {
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);
    const images = [awal1, awal2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#050046] h-[740px] overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute opacity-90 z-10 w-full" 
                alt="Moon"
            />
            {/* Gambar bulan yang berputar tanpa tetap di posisi fixed */}
            <motion.img
                src={moon}
                className="absolute ml-20 opacity-90 z-10" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={star}
                className="absolute right-[250px] z-10 mt-[100px]" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />

            <motion.img
                src={star}
                className="absolute right-[100px] z-10 mt-[200px]" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />

            <motion.img
                src={cloud}
                className="absolute z-10 top-[50px] h-[710px] w-full" 
                alt="Cloud"
            />
            <div className="absolute left-[8.7%] top-[12%] transform -translate-x-1/2 h-[39%] w-[1px] bg-slate-400 z-20"/>

            {/* Circular Image Container */}
            <div className="absolute left-[2%] top-[50%] h-48 w-48 overflow-hidden z-10">
                <motion.img
                    src={images[currentImage]}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Slideshow"
                />
            </div>

            <div className="absolute left-[21.6%] top-[12%] transform -translate-x-1/2 h-[54%] w-[1px] bg-slate-400 z-20"/>

            <div className="absolute left-[15%] top-[65%] h-48 w-48 overflow-hidden z-10">
                <motion.img
                    src={images[currentImage]}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt="Slideshow"
                />
            </div>     



            {/* Latar belakang halaman */}
            <div className="absolute bg-gradient-to-t from-[#050046] via-[#3D2C8D] to-[#050046]" />
            
            {/* Konten utama */}
            <div className="flex justify-center items-center relative text-white h-[900px] z-10 bottom-20">
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-center text-6xl font-bold">
                        Hackathon 8.0
                    </h1>
                    <p className="text-center text-xl pb-5 pt-2">
                        Empowering Change Through Innovation
                    </p>
                    <button 
                        onClick={() => navigate('/Login')} 
                        className="h-[50px] w-[230px] border b-1 bg-[#3D2C8D] rounded-[8px] shadow-xl 
                    hover:bg-[#050046] hover:shadow-2xl transition-all duration-300">
                        <p className="text-center">
                            Register Here
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HalamanAwal;
