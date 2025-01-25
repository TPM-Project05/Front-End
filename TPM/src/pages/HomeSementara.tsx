import ContactUs from "@/components/ContactUs";
import Footer from "../components/Footer";
import Mentors from "./Mentors";
import ImageSlider from "@/components/ImageSlider";
import Faq from "./Faq";
import Jury from "./Jury";
import Catatan from "./Catatan";
import Price from "./Prize";
import About from "./About";
import HalamanAwal from "./HalamanAwal";
import Sponsor from "./Sponsor";
import MediaPartner from "./MediaPartner";

export default function HomeSementara(){
    return(
        <div className=" z-[-20]">
            <HalamanAwal/>
            <About/>
            <Price/>
            <Catatan/>
            <Jury/>
            <ImageSlider/>
            {/* <Mentors/> */}  
            <Faq />
            <Sponsor/>
            <MediaPartner/>  
            <ContactUs/>
            <Footer/>
        </div>
    )
}