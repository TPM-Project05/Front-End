import ShimmerButton from "./ui/shimmer-button";
import { Marquee } from "@/components/eldoraui/marquee";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Nocturnailed from "../assets/MP/Nocturnalized.png"
import YUKCODING from "../assets/MP/yukcoding.png"
import CodingStudio from "../assets/MP/CodingStudio.png"
import KuatBaca from "../assets/MP/kuatbaca.png"
import Kerja from "../assets/MP/kerja.png"
import DigitalSekolah from "../assets/MP/digitalskola.png"
import FileMag from "../assets/MP/filemagz.png"
import Dolab from "../assets/MP/dolab.png"
import Atds from "../assets/MP/ATDS.png"
import Loker from "../assets/MP/loker_id.png"


export default function ContactUs() {
    const companies = [
        {
          name: "Nocturnailed",
          url: Nocturnailed,
          width: 221,
          height: 100
        },
        {
          name: "YUKCODING",
          url: YUKCODING,
          width: 313,
          height: null
        },
        {
          name: "CodingStudio",
          url: CodingStudio,
          width: 335,
          height: null
        },
        {
          name: "kuatbaca.com",
          url: KuatBaca,
          width: 285,
          height: null
        },
        
        
        {
          name: "DigitalSkola",
          url: DigitalSekolah,
          width: 340,
          height: null
        },
        {
          name: "Kerja",
          url: Kerja,
          width: 173,
          height: null
        },
        {
          name: "FileMagz",
          url: FileMag,
          width: 240,
          height: null
        },
        {
          name: "Dolab",
          url: Dolab,
          width: 170,
          height: null
        },
        {
          name: "Atds",
          url: Atds,
          width: 175,
          height: null
        },
        {
          name: "Loker",
          url: Loker,
          width: 220,
          height: null
        },
      ];

    return (
      <div className="">
        <div className="font-poppins leading-tight flex justify-center">
            <div className="text-[56px] text-glow text-white font-poppins">Media Partners</div>
        </div>
      <section id="logos">
          <div className="relative mt-6 bg-white h-[150px] flex justify-center items-center">
            <Marquee className="[--duration:40s]">
            {companies.map((company, idx) => (
                <img
                  key={idx}
                  width={company.width || 200}
                  height={company.height || 60} // Default height 65 jika tidak didefinisikan
                  src={company.url}
                  alt={company.name}
                />
              ))}
            </Marquee>
          </div>
      </section>

        {/* Contact Us */}
        <div className="flex flex-col items-center justify-center mb-10 mt-10">
          <div className="font-poppins leading-tight flex justify-center">
            <div className="text-[56px] pb-5 text-glow text-white font-poppins">Contact Us</div>
          </div>
          <div className="rounded-[5px] border shadow-lg border-white">
            <div className="w-[650px] bg-gray-800 p-6 rounded-[5px]">
              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-3">

                {/* Form Fields */}
                <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                        type="text"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Name"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-white">Email</label>
                    <input
                        type="email"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white">Subject</label>
                    <input
                        type="text"
                        className="bg-gray-700 text-gray-200 rounded-[14px] p-6 w-[268px] focus:bg-gray-600 focus:outline-none 
                        focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-[50px] mt-2"
                        placeholder="Subject"
                    />
                </div>
    
                {/* Message (aligned to the right) */}
                <textarea
                  name="Your Message"
                  className="col-span-2 row-span-3 col-start-2 row-start-1 bg-gray-700 mt-8
                 text-gray-200 rounded-md p-3 w-full h-[238px] focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Message"
                ></textarea>
              <div className="flex items-center">
                <ShimmerButton className="shadow-2xl w-[200px] h-[50px]">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium 
                    leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                    Submit
                    </span>
                </ShimmerButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  