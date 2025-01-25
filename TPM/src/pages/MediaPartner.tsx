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

export default function MediaPartner() {
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
    return(
        <div className="">
            <div className="bg-gradient-to-b from-[#4339B2] to-[#17116B] h-[370px] py-8">
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
                </div>
        </div>
    )
}