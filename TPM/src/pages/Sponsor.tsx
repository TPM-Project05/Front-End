import LINE from '../assets/LINE.png';
import GOKS from '../assets/GOKS.png';
import Mekari from '../assets/Mekari.png';
import CloudHost from '../assets/cloudhost.png';
import Cakap from '../assets/Cakap.png';
import Teleperformance from '../assets/Teleperformance.png';

const Sponsor = () => {
    return (
        <section className="bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center text-white py-10">
            <h1 className="text-5xl text-center mb-8 text-glow">Our Sponsors</h1>
            
            <div className="max-w-4xl mx-auto flex flex-col space-y-1">
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold vertical-text">Platinum</h2>
                    <form className="flex-1 p-5 border rounded-xl shadow-lg bg-white bg-opacity-15 mb-7">
                        <div className="flex items-center justify-center">
                            <img src={Teleperformance} alt="Teleperformance" className="h-32 mx-4" />
                        </div>
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold vertical-text">Gold</h2>
                    <form className="flex-1 p-5 border rounded-xl shadow-lg bg-white bg-opacity-15 mb-7">
                        <div className="flex items-center justify-center">
                            <img src={LINE} alt="LINE" className="h-20 mx-4 pr-10" />
                            <img src={GOKS} alt="GOKS!" className="h-16 mx-4 pl-10" />
                        </div>
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold vertical-text">Silver</h2>
                    <form className="flex-1 p-5 border rounded-xl shadow-lg bg-white bg-opacity-15 mb-7">
                        <div className="flex items-center justify-center">
                            <img src={Mekari} alt="Mekari" className="h-16 mx-4" />
                            <img src={CloudHost} alt="CloudHost" className="h-16 mx-4" />
                            <img src={Cakap} alt="Cakap" className="h-16 mx-4" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
