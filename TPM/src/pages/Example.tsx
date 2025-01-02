/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'
import { Input } from "@/components/ui/input"
import ShimmerButton from "@/components/ui/shimmer-button";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BNCC from "../assets/BNCC.png"
import Swal from 'sweetalert2'
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp} from 'react-icons/fa';
import Button from "@/components/Button";


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
    {name: 'Bina Nusantara Computer Club', logo: 'Logo Fb', href: '#'},
    {name: '@bnccbinus', logo: 'Logo Ig', href: '#'},
    {name: 'Bina Nusantara Computer Club', logo: 'Logo Linkedin', href: '#'}
  ]
}


export default function Example() {

  const handleButtonClick = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You have successfully subscribed.',
      icon: 'success',
      confirmButtonText: 'Okay',
    });
  };

  return (
    <div className="">
  <div>
  <footer aria-labelledby="footer-heading" className="bg-[#1C0C5B]">
  <div className="mx-[40px]">
    <div className="mx-10 flex justify-between h-[350px]">
      <div className="grid grid-cols-1">
      <div className="col-span-6 mt-10">
        <div className="flex justify-between items-start col-span-2">
          <div className="text-black text-shadow-lg font-poppins text-6xl font-semibold leading-tight w-[590px] h-[250px]">
            <div className="text-[56px] text-glow text-white font-poppins">Follow for</div>
            <div className="text-[56px] text-glow text-white font-poppins">Amazing Content &</div>
            <div className="text-[56px] text-glow text-white font-poppins">Collaboration</div>
          </div>
        </div>
      </div>
      </div>

      <div className='grid grid-cols-1'>
        <div className="col-span-6 mt-10">
          <div className="flex justify-between items-start col-span-2">
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
                    />
                  </div>

                  {/* Subscribe button on the right */}
                  <div className="flex items-center pl-2 ">
                    <ShimmerButton className="shadow-2xl" onClick={handleButtonClick}>
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                        Subscribe
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
                    {/* <Button /> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bawah */}
    <div className="mx-10 flex justify-start h-[255px]">
      <div className="grid grid-cols-1">
      <div className="col-span-6 mt-10">
        <div className="flex justify-between items-start col-span-2">
          <div className="text-black text-shadow-lg text-6xl font-semibold leading-tight w-[550px] h-[250px] pl-10">
            <div className="text-[18px] text-white pb-5">Organized & Empowered by</div>
            <img src={BNCC} alt="" className="h-[54px] w-[185px]"/>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-start gap-[75px] pl-10 ">
      <div className=''>
        <div className="col-span-6 mt-10">
          <div className="flex justify-between items-start col-span-2">
            <div className="text-black text-shadow-lg font-poppins text-2xl font-semibold leading-tight">
            <div>
            <h3 className="text-[24px] text-white">Work With Us</h3>
            <ul role="" className="mt-6 space-y-3">
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
        </div>
      </div>
      <div className=''>
  <div className="col-span-6 mt-10">
    <div className="flex justify-between items-start col-span-2">
      <div className="text-black text-shadow-lg font-poppins text-2xl font-semibold leading-tight">
        <div>
          <h3 className="text-[24px] text-white">Get In Touch</h3>
          <ul role="" className="mt-6 space-y-3">
            {footerNavigation.Explore.map((item, index) => (
              <li key={item.name} className="flex items-center">
                {/* Conditional rendering of icons based on index */}
                {index === 0 && <IoLocationOutline  className="mr-3 text-white" />}
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
    <div className="pb-10 text-center">
      <p className="text-sm text-white">Terms and Privacy</p>
      <p className="text-sm text-white">All Right Reserved BNCC 2025 © Bina Nusantara Computer Club</p>
    </div>

  </div>
</footer>



  </div>
</div>

  )
}
