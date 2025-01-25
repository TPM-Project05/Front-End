import '../index.css';
import '../components/HeroAnimations.css';
import '../components/PageStyles.css';
import Navbar from './Navbar';
import Timeline from './Timeline';
import Sponsor from './Sponsor';
import ContactUs from '@/components/ContactUs';
import Footer from "../components/Footer";
import ImageSlider from '@/components/ImageSlider';
import Faqs from "./Faqs";
import Jury from "./Jury";
import Catatan from "./Catatan";
import Price from "./Prize";
import About from "./About";
import HalamanAwal from "./HalamanAwal";

export default function NewHome() {
    return (
        <div className="bg-[#050046]">
            <Navbar/>
            <div id="halamanAwal"><HalamanAwal/></div>
            <div id="about"><About/></div>
            <div id="prize"><Price/></div>
            <div id="catatan"><Catatan/></div>
            <div id="imageslider"><ImageSlider/></div>
            <div id="jury"><Jury/></div>
            <div id="timeline"><Timeline/></div>
            <div id="faqs"><Faqs/></div>
            <div id="sponsor"><Sponsor/></div>
            <div id="contactUs"><ContactUs/></div>
            <Footer/>
        </div>

import Media from './Media'; 
import ContactUs from './ContactUs';

export default function NewHome() {
    return (
        <> 
            <header>
                <Navbar />
            </header>
            <section id="home">
                <Page />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="prizes">
                <Prize />
            </section>
            <section id="mentors">
                <Mentor />
                <Jury />
            </section>
            <section id="timeline">
                <Timeline />
            </section>
            <section id="faq">
                <Faqs />
            </section>
            <section id="sponsor">
                <Sponsor />
            </section>
            <section id="media">
                <Media />
            </section>
            <section id="contact">
                <ContactUs />
            </section>           
        </>
    );
}
