import nathasa from "../assets/nathasa.jpg";
import nathasa2 from "../assets/nathasa2.jpg";
import nathasa3 from "../assets/nathasa3.jpg";
import { motion } from "framer-motion";
import starBg from "../assets/Star Background.png";
import AuroraLeft from "../assets/Aurora Left.png"

const Jury = () => {
  // Array of objects that combines name, image, and position
  const data = [
    { name: "Nathasa", position: "Cloud Specialist", image: nathasa },
    { name: "Nathasa 2", position: "CTO", image: nathasa2 },
    { name: "Nathasa 3", position: "CFO", image: nathasa3 },
  ];

  const positions = ["center", "left1", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 0.90, zIndex: 5, opacity: 1 },
    left1: { x: "-120%", scale: 0.90, zIndex: 4, opacity: 1 },
    right1: { x: "120%", scale: 0.90, zIndex: 4, opacity: 1 },
  };

  const hoverVariants = {
    scale: 1.10, // scale the image to 1 when hovered
    zIndex: 6, // bring it on top of other images
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    
    <div className="bg-[#17116B] z-[-10] overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute w-full" 
                alt="Moon"
            />
            <motion.img
                src={AuroraLeft}
                className="absolute left-[-160px] w-full h-[490px]" 
                alt="Aurora Left"
            />
            <motion.img
                src={AuroraLeft}
                className="absolute right-[-160px] w-full h-[490px]
                transform -scale-x-100" 
                alt="Mirror Aurora Left"
            />
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="items-center justify-center h-[500px] z-[-20]"
            >
              <div className="font-poppins leading-tight flex justify-center">
                <div className="text-[56px] text-glow text-white font-poppins">Meet Our Jury</div>
              </div>
              <div className="relative flex justify-center top-[14%]">
              {data.map((item, index) => {
                const position = positions[index % data.length];
                return (
                  <motion.div
                  key={index}
                  className="h-[310px] w-[210px] rounded-[15px] shadow-lg p-4 bg-[#3D2C8D]"
                  initial="center"
                  animate={position}
                    variants={imageVariants}
                    whileHover={hoverVariants} // Apply hover effects
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
                </div>
            </motion.div>
        </div>
  );
};

export default Jury;

