import { Link } from "react-router-dom";
import BNCC from "../assets/BNCC.png";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = () => {
    return (
        <header className="border-2 bg-[rgba(128,128,128,0.5)] text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-5 flex-wrap">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-auto">
                        <img 
                            src={BNCC}
                            alt="BNCC Logo" 
                            className="h-12 w-auto"
                        />
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex-1 flex justify-center items-center flex-wrap">
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('halamanAwal')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('about')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            About
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('prize')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Prizes
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('imageslider')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Mentors & Jury
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('timeline')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Timeline
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('faqs')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            FAQ
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('sponsor')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Sponsor
                        </Link>
                        <Link 
                            to="/" 
                            onClick={() => scrollToSection('contactUs')}
                            className="text-sm font-medium mx-6 hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Contact
                        </Link>
                    </nav>
                    {/* Login Button */}
                    <div className="flex-shrink-0">
                        <Link 
                            to="/Login" 
                            className="text-sm font-medium border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 768px) {
                        nav {
                            justify-content: space-around;
                        }
                        .mx-6 {
                            margin-left: 1.5rem;
                            margin-right: 1.5rem;
                        }
                    }
                `}
            </style>
        </header>
    );
}

export default Navbar;
