'use client'
import { Input } from "@/components/ui/input";
import ShimmerButton from "@/components/ui/shimmer-button";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import BNCC from "../assets/BNCC.png";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import starBg from "../assets/Star Background.png";
import React, { useState } from "react";
import axios from "../config/instance"; // Import axios untuk API call

const footerNavigation = {
  Explore: [
    { name: '12321 In Your Dream, LV 98789', href: '#' },
    { name: '207 - 9999 - 888', href: '#' },
    { name: '0813 - 1133 - 4455', href: '#' },
    { name: 'bncc@gmail.com', href: '#' },
  ],
  Products: [
    { name: 'Filemagz', href: '#' },
    { name: 'FAVE Solution', href: '#' },
    { name: 'Learning & Training', href: '#' },
  ],
  Works: [
    { name: 'Contact Us', href: '#' },
    { name: 'Subscribe', href: '#' },
  ],
  medsos: [
    { name: 'Bina Nusantara Computer Club', logo: 'Logo Fb', href: '#' },
    { name: '@bnccbinus', logo: 'Logo Ig', href: '#' },
    { name: 'Bina Nusantara Computer Club', logo: 'Logo Linkedin', href: '#' }
  ]
};

export default function Footer() {
  const [email, setEmail] = useState(""); // State untuk menyimpan email
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk menangani loading
  const [isSuccess, setIsSuccess] = useState(false); // State untuk menangani animasi sukses

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setIsSubmitting(true); // Mulai loading

    try {
      // Kirim data ke API
      const response = await axios.post("/subscribe", { email });
      if (response.status === 200) {
        setIsSuccess(true); // Tampilkan animasi sukses
        setTimeout(() => setIsSuccess(false), 2000); // Reset animasi setelah 2 detik
      }
      
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsSubmitting(false); // Selesai loading
    }
  };

  return (
    <div className="bg-[#17116B] overflow-hidden">
      <motion.img
        src={starBg}
        className="absolute opacity-90 z-10 w-full pointer-events-none h-[620px]"
        alt="Moon"
      />
      <footer aria-labelledby="footer-heading" className="h-[640px]">
        <div className="mx-[40px]">
          <div className="mx-10 flex justify-between h-[350px]">
            <div className="flex flex-col">
              <div className="mt-10">
                <div className="flex justify-between items-start">
                  <div className="text-black text-shadow-lg font-poppins text-6xl font-semibold leading-tight w-[590px] h-[250px]">
                    <div className="text-[56px] text-glow text-white font-poppins">Follow for</div>
                    <div className="text-[56px] text-glow text-white font-poppins">Amazing Content &</div>
                    <div className="text-[56px] text-glow text-white font-poppins">Collaboration</div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex justify-between items-start">
                    <div className="text-black text-shadow-lg text-6xl font-semibold leading-tight w-[550px] h-[250px] pl-10">
                      <div className="text-[18px] text-white pb-5">Organized & Empowered by</div>
                      <img src={BNCC} alt="BNCC Logo" className="h-[54px] w-[185px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-10">
                <div className="flex flex-col">
                  <div className="text-black text-shadow-lg font-poppins text-2xl font-semibold leading-tight">
                    <div>
                      <div className="text-white text-[20px]">Subscribe to Technoscape</div>
                      <div className="flex justify-between items-center mt-4">
                        {/* Input field on the left */}
                        <div>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="rounded-[20px] w-[340px] h-[40px] text-black placeholder-white border border-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/* Subscribe button on the right */}
                        <div className="flex items-center pl-2">
                          <ShimmerButton
                            className="shadow-2xl"
                            onClick={handleSubscribe}
                            disabled={isSubmitting || isSuccess}
                          >
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
                            </span>
                          </ShimmerButton>
                        </div>
                      </div>
                      <div className="flex space-x-[101px] pt-[113px]">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5B2B99] to-[#9747FF] flex items-center justify-center">
                          <FaInstagram className="text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5B2B99] to-[#9747FF] flex items-center justify-center">
                          <FaXTwitter className="text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5B2B99] to-[#9747FF] flex items-center justify-center">
                          <FaFacebookF className="text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5B2B99] to-[#9747FF] flex items-center justify-center">
                          <FaLinkedinIn className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start gap-[75px]">
                    <div className="mt-10">
                      <div className="text-black text-shadow-lg font-poppins text-2xl font-semibold leading-tight">
                        <div>
                          <h3 className="text-[24px] text-white">Work With Us</h3>
                          <ul className="mt-6 space-y-3">
                            {footerNavigation.Works.map((item) => (
                              <li key={item.name} className="text-sm">
                                <a
                                  href={item.href}
                                  className="text-gray-200 hover:text-white text-[16px] font-poppins font-light"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="text-black text-shadow-lg font-poppins text-2xl font-semibold leading-tight">
                        <div>
                          <h3 className="text-[24px] text-white">Get In Touch</h3>
                          <ul className="mt-6 space-y-3">
                            {footerNavigation.Explore.map((item, index) => (
                              <li key={item.name} className="flex items-center">
                                {/* Conditional rendering of icons based on index */}
                                {index === 0 && <IoLocationOutline className="mr-3 text-white" />}
                                {index === 1 && <IoCallOutline className="mr-3 text-white" />}
                                {index === 2 && <FaWhatsapp className="mr-3 text-white" />}
                                {index === 3 && <MdOutlineEmail className="mr-3 text-white" />}
                                <a
                                  href={item.href}
                                  className="text-gray-200 hover:text-white text-[16px] font-poppins font-light"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-[230px]">
            <div className="text-center">
              <p className="text-sm text-white">Terms and Privacy</p>
              <p className="text-sm text-white">All Rights Reserved BNCC 2025 © Bina Nusantara Computer Club</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}