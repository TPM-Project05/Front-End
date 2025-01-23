import { Link } from "react-router-dom";
import BNCC from "../assets/BNCC.png"
const Navbar = () => {
    return (
        <header className="border-2 bg-opacity-100 text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-auto">
                        <img 
                            src={BNCC}
                            alt="BNCC Logo" 
                            className="h-12 w-auto"
                        />
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex-1 flex justify-center space-x-20 items-center ">
                        <a 
                            href="#home" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Home
                        </a>

                        <a 
                            href="#about" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            About
                        </a>

                        <a 
                            href="#prizes" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Prizes
                        </a>
                        <a 
                            href="#mentors" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Mentors & Jury
                        </a>
                        
                        <a 
                            href="#timeline" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Timeline
                        </a>
                        
                        <a 
                            href="#faq" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            FAQ
                        </a>
                        <a 
                            href="#contact" 
                            className="text-sm font-medium hover:text-white hover:underline hover:underline-offset-4 hover:glow transition-all duration-200"
                        >
                            Contact
                        </a>
                    </nav>
                    {/* Login Button */}
                    <div className="flex-shrink-0">
                        <Link 
                            to="/login" 
                            className="text-sm font-medium border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;