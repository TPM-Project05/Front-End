import { Input } from "./ui/input";
import ShimmerButton from "./ui/shimmer-button";
import { motion } from "framer-motion";
import starBg from "../assets/Star Background.png";
import Moon from "../assets/Moon ContactUs.png";
import axios from "../config/instance";
import Swal from "sweetalert2";
import { useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/contact-us", formData,
        {
          headers: {
            "Content-Type" : "application/json"
          }
        }
      );
      
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    
    <div className="bg-[#17116B] h-[750px] overflow-hidden">
            <motion.img
                src={starBg}
                className="absolute opacity-90 z-10 w-full pointer-events-none h-[800px]" 
                alt="Moon"
            />
            <motion.img
                src={Moon}
                className="absolute ml-7 opacity-50 z-10 pointer-events-none" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={Moon}
                className="absolute ml-[930px] mt-[400px] opacity-50 z-10 pointer-events-none" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
            <motion.img
                src={Moon}
                className="absolute ml-[350px] mt-[500px] opacity-50 z-20 h-[200px] pointer-events-none" 
                alt="Moon"
                animate={{ rotate: 360 }} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear", 
                }}
            />
      {/* Contact Us */}
      <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="1156" height="686" viewBox="0 0 1156 686" fill="none"
      className="pointer-events-none absolute z-10">
  <g filter="url(#filter0_d_1173_2530)">
    <path d="M159.99 6.00054C159.99 6.00054 1016.57 6.00095 1045.54 6.00054C1074.5 6.00012 1068.96 38.3726 1068.96 38.3726H1126.04C1158.41 38.3726 1157.56 87.7828 1126.04 87.7828H976.958C940.326 87.7828 939.048 141.452 976.958 141.452H1096.65C1126.04 141.452 1126.04 210.03 1096.65 210.03H1077.91C1066.83 210.03 1068.96 213.011 1068.96 246.662V255.606V472.84C1068.96 492.008 1075.78 502.23 1045.54 502.23H1007.63C988.458 502.23 988.032 541.418 1007.63 541.418H1045.54H1109.85C1134.98 541.418 1135.84 595.513 1109.85 595.513H1077.91C1077.91 595.513 1068.96 592.105 1068.96 632.145V645.775C1068.96 663.665 1072.37 680.277 1045.54 680.277H159.99C141.248 680.277 127.192 680.277 127.192 645.775V397.021C127.192 385.095 128.896 374.446 116.543 374.446H57.7624H33.4883C-1.43876 374.446 -4.84719 325.462 33.4883 325.462H57.7624H159.99C191.937 325.462 194.067 271.792 159.99 271.792H139.97H82.8941C52.6518 271.792 48.3923 225.791 82.8941 225.791H116.543C120.093 226.217 127.192 223.406 127.192 208.753V128.248C127.192 123.136 127.192 106.95 139.97 106.95H203.436C222.605 106.95 226.439 73.3006 203.436 73.3006H139.97C108.451 73.3006 105.895 6.00175 139.97 6.00054C174.045 5.99933 159.99 6.00054 159.99 6.00054Z" fill="white" fill-opacity="0.2" shape-rendering="crispEdges"/>
    <path d="M1126.04 37.5207H1069.94C1069.96 37.384 1069.97 37.2343 1069.99 37.0724C1070.09 36.1672 1070.19 34.8783 1070.23 33.3331C1070.29 30.2488 1070.08 26.1129 1068.93 21.9595C1067.78 17.8048 1065.69 13.5883 1061.97 10.4107C1058.24 7.22318 1052.94 5.14854 1045.54 5.14864C1031.05 5.14885 809.667 5.14885 591.901 5.1488L294.283 5.1487L196.853 5.14866L169.617 5.14865L162.873 5.14864C162.873 5.14843 162.872 5.14831 162.872 5.14829L162.858 5.14824L162.858 5.14825L162.852 5.14825L162.85 5.14822L162.758 5.14819C162.013 5.14804 157.007 5.14804 139.97 5.14864C131.121 5.14896 124.639 9.5385 120.446 16.0557C116.272 22.5424 114.359 31.1332 114.521 39.6672C114.683 48.2026 116.923 56.7806 121.169 63.2524C125.427 69.7427 131.739 74.1525 139.97 74.1525H203.436C208.961 74.1525 212.78 76.1623 215.176 79.0972C217.591 82.054 218.63 86.0371 218.4 90.0771C217.937 98.2143 212.412 106.099 203.436 106.099H139.97C136.578 106.099 133.978 107.18 132.017 108.923C130.073 110.65 128.81 112.98 127.983 115.407C126.34 120.227 126.34 125.664 126.34 128.219V128.248V208.753C126.34 215.953 124.595 220.086 122.564 222.359C120.535 224.628 118.15 225.126 116.645 224.945L116.594 224.939H116.543H82.8941C74.0696 224.939 67.6256 227.887 63.4598 232.401C59.3043 236.904 57.4889 242.887 57.7641 248.831C58.3141 260.711 67.2461 272.644 82.8941 272.644H139.97H159.99C168.261 272.644 174.272 275.89 178.198 280.716C182.142 285.564 184.027 292.065 183.897 298.61C183.767 305.155 181.623 311.671 177.603 316.533C173.598 321.377 167.712 324.61 159.99 324.61H57.7624H33.4883C23.7167 324.61 16.5091 327.736 11.7971 332.518C7.09154 337.293 4.94311 343.65 5.16347 349.984C5.60476 362.668 15.5453 375.298 33.4883 375.298H57.7624H116.543C119.514 375.298 121.523 375.938 122.907 376.977C124.286 378.013 125.15 379.525 125.677 381.483C126.207 383.453 126.38 385.814 126.413 388.473C126.432 389.968 126.407 391.501 126.381 393.09C126.361 394.361 126.34 395.668 126.34 397.021V645.775C126.34 663.082 129.854 672.082 136.057 676.65C139.143 678.922 142.812 680.032 146.843 680.582C150.854 681.129 155.294 681.129 159.951 681.129H159.99H1045.54C1052.32 681.129 1057.29 680.081 1060.92 678.154C1064.57 676.212 1066.79 673.411 1068.1 670.045C1069.41 666.71 1069.83 662.836 1069.93 658.734C1069.99 656.33 1069.94 653.78 1069.89 651.189C1069.85 649.393 1069.81 647.576 1069.81 645.775V632.145C1069.81 612.141 1072.06 603.17 1074.18 599.218C1075.24 597.265 1076.21 596.621 1076.8 596.406C1077.1 596.297 1077.33 596.287 1077.47 596.295C1077.54 596.299 1077.59 596.309 1077.61 596.313C1077.62 596.315 1077.62 596.315 1077.62 596.316C1077.63 596.317 1077.63 596.319 1077.63 596.318L1077.75 596.365H1077.91H1109.85C1116.7 596.365 1121.77 592.782 1125.07 587.513C1128.36 582.271 1129.93 575.338 1129.87 568.459C1129.82 561.579 1128.14 554.651 1124.83 549.415C1121.5 544.157 1116.49 540.566 1109.85 540.566H1045.54H1007.63C1003.06 540.566 999.661 538.301 997.376 534.827C995.074 531.325 993.916 526.603 993.942 521.829C993.968 517.055 995.177 512.329 997.495 508.823C999.797 505.341 1003.17 503.082 1007.63 503.082H1045.54C1053.12 503.082 1058.48 502.444 1062.23 501.138C1066.03 499.817 1068.23 497.794 1069.38 495.053C1070.49 492.383 1070.57 489.135 1070.41 485.48C1070.35 484.265 1070.27 483.003 1070.18 481.689C1070.01 478.983 1069.81 476.052 1069.81 472.84V255.606V246.662C1069.81 241.308 1069.76 236.717 1069.71 232.8C1069.69 230.565 1069.66 228.549 1069.65 226.737C1069.63 221.713 1069.71 218.261 1070.12 215.871C1070.53 213.497 1071.23 212.373 1072.27 211.754C1073.4 211.084 1075.12 210.882 1077.91 210.882H1096.65C1104.39 210.882 1110.14 206.345 1113.92 199.737C1117.69 193.146 1119.54 184.418 1119.54 175.741C1119.54 167.064 1117.69 158.336 1113.92 151.745C1110.14 145.137 1104.39 140.6 1096.65 140.6H976.958C967.695 140.6 960.902 137.329 956.44 132.489C951.965 127.636 949.779 121.145 949.857 114.628C949.934 108.11 952.275 101.611 956.796 96.7488C961.305 91.8999 968.023 88.6347 976.958 88.6347H1126.04C1134.16 88.6347 1140.36 85.4417 1144.53 80.6198C1148.69 75.815 1150.8 69.4359 1150.85 63.0851C1150.91 56.7342 1148.91 50.3489 1144.78 45.5378C1140.63 40.7088 1134.37 37.5207 1126.04 37.5207Z" stroke="white" stroke-width="1.70379" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_1173_2530" x="0.296143" y="0.296387" width="1155.41" height="685.684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1173_2530"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1173_2530" result="shape"/>
    </filter>
  </defs>
</svg>
    {/* Form */}
    <div className="flex flex-col absolute ml-[70px] pt-[80px] text-[56px]">
          <div className="text-glow text-white font-poppins">Contact Us</div>
          <p className="text-[16px] w-[630px] py-[32px]">
            For more information or to discuss the hackathon, contact us
            directly or fill out the form, and we will get back to you promptly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-normal">
              <div className="flex flex-col gap-[36px]">
                <div>
                  <p className="pb-[6px] text-[16px]">Name</p>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-[270px] h-[44px] pl-[10px] placeholder:text-[20px] bg-white text-black rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="pb-[6px] text-[16px]">Email</p>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-[270px] h-[44px] pl-[10px] placeholder:text-[20px] bg-white text-black rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="pb-[6px] text-[16px]">Subject</p>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your Subject"
                    className="w-[270px] h-[44px] pl-[10px] placeholder:text-[20px] bg-white text-black rounded-[8px]"
                  />
                </div>
              </div>

              <div className="ml-10 flex flex-col justify-start">
                <p className="text-[16px]">Your Message</p>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[262px] rounded-[8px] border-[1px] w-[320px] mt-[9px]
                    bg-white bg-opacity-20 border-white focus:border-white focus:outline-none text-[16px] p-[10px]"
                />

                <div className="flex justify-end mt-4">
                  <ShimmerButton className="shadow-2xl z-[9999]">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                      Subscribe
                    </span>
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

  