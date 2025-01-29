import { useState } from "react";
import nathasa from "../assets/nathasa.jpg";
import nathasa2 from "../assets/nathasa2.jpg";
import nathasa3 from "../assets/nathasa3.jpg";
import nathasa4 from "../assets/nathasa4.jpg";
import nathasa5 from "../assets/nathasa5.jpg";
import abel1 from "../assets/abel1.jpg";
import abel2 from "../assets/abel2.jpg";
import abel3 from "../assets/abel3.jpg";
import abel4 from "../assets/abel4.jpg";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import starBg from "../assets/Star Background.png";

const ImageSlider = () => {
  // Array of objects that combines name, image, and position
  const data = [
    { name: "Nathasa", position: "Cloud Specialist", image: nathasa },
    { name: "Nathasa 2", position: "CTO", image: nathasa2 },
    { name: "Nathasa 3", position: "CFO", image: nathasa3 },
    { name: "Nathasa 4", position: "COO", image: nathasa4 },
    { name: "Nathasa 5", position: "CMO", image: nathasa5 },
    { name: "Abel 1", position: "Manager", image: abel1 },
    { name: "Abel 2", position: "Developer", image: abel2 },
    { name: "Abel 3", position: "Designer", image: abel3 },
    { name: "Abel 4", position: "Intern", image: abel4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const positions = [
    "center", "left1", "left2", "left3", "left4",
    "right4", "right3", "right2", "right1"
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-85%", scale: 0.75, zIndex: 4, opacity: 0.75 },
    left2: { x: "-150%", scale: 0.6, zIndex: 3, opacity: 0.65 },
    left3: { x: "-200%", scale: 0.5, zIndex: 2, opacity: 0.55 },
    left4: { x: "-240%", scale: 0.4, zIndex: 1, opacity: 0.45 },
    right1: { x: "85%", scale: 0.75, zIndex: 4, opacity: 0.75 },
    right2: { x: "150%", scale: 0.6, zIndex: 3, opacity: 0.65 },
    right3: { x: "200%", scale: 0.5, zIndex: 2, opacity: 0.55 },
    right4: { x: "240%", scale: 0.4, zIndex: 1, opacity: 0.45 },
  };

  return (
    <div className="bg-gradient-to-b from-[#17116B] to-[#050046] overflow-hidden">
      <motion.img
                src={starBg}
                className="absolute w-full" 
                alt="Moon"
            />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className=" items-center justify-center h-[500px]"
        >
          <div className="font-poppins leading-tight flex justify-center">
            <div className="text-[56px] text-glow text-white font-poppins">Meet Our Mentors</div>
          </div>
          <div className="relative flex justify-center top-[14%]">
            {data.map((item, index) => {
              const position = positions[(currentIndex + index) % data.length];
              return (
                <motion.div
                  key={index}
                  className="h-[310px] w-[210px] rounded-[15px] shadow-lg p-4 bg-[#3D2C8D]"
                  initial="center"
                  animate={position}
                  variants={imageVariants}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute' }}
                >
                  <div className="flex justify-center">
                    <div className="rounded-[30px] bg-gradient-to-b from-[#000000] to-[#9747FF] shadow-gray-900 shadow-md">
                      <motion.img
                        src={item.image}
                        alt={`image-${index}`}
                        className="h-[205px] w-[160px] rounded-[30px] m-2"
                      />
                    </div>
                  </div>
                  <div className="text-center text-white mt-2">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm">{item.position}</p>
                  </div>
                </motion.div>
              );
            })}
            <HiArrowCircleLeft
              className="absolute left-5 top-40 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
              onClick={handlePrev}
            />
            <HiArrowCircleRight
              className="absolute right-5 top-40 transform -translate-y-1/2 text-white text-4xl cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </motion.div>
    </div>
  );
};

export default ImageSlider;
