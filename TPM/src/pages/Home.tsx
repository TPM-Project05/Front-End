import '../index.css';
import '../components/HeroAnimations.css';
import '../components/PageStyles.css';
import Navbar from './Navbar';
import Page from './Page';
import About from './About';
import Prize from './Prize';
import Jury from './Jury';
import Mentor from './Mentor';
import Timeline from './Timeline';
import Faqs from './Faqs';
import Sponsor from './Sponsor';
import Media from './Media'; 
import ContactUs from './ContactUs';
import Footer from "./Footer";

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
            <footer className="bg-[#1C0C5B]">
                <Footer />
            </footer>
        </>
    );
}