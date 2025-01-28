import '../index.css';
import '../components/HeroAnimations.css';
import '../components/PageStyles.css';
import Navbar from './Navbar';
import Timeline from './Timeline';
import Sponsor from './Sponsor';
import ContactUs from '../components/ContactUs';  // Ensure correct import path
import Footer from "../components/Footer";
import ImageSlider from '@/components/ImageSlider';
import Faqs from "./Faqs";
import Jury from "./Jury";
import Catatan from "./Catatan";
import Price from "./Prize";
import About from "./About";
import HalamanAwal from "./HalamanAwal";

export default function Home() {
    return (
        <> 
            <header>
                <Navbar />
            </header>
            <section id="home">
                <HalamanAwal />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="prizes">
                <Price />
            </section>
            <section id="catatan">
                <Catatan />
            </section>
            <section id="imageslider">
                <ImageSlider />
            </section>
            <section id="jury">
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
            <section id="contact">
                <ContactUs />
            </section>
            <Footer />
        </>
    );
}
