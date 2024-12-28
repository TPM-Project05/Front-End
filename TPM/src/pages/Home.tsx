import '../index.css';
import '../components/HeroAnimations.css';
import '../components/PageStyles.css';

export default function NewHome() {
    return (
        <>
            <header className="border-2 bg-opacity-50 text-white shadow-lg fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img 
                                src="./images/BNCC.png" 
                                alt="BNCC Logo" 
                                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
                            />
                        </div>
                            <nav className="flex space-x-8 items-center">
                            <a 
                                href="#home" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                Home
                            </a>
                            <a 
                                href="#prizes" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                Prizes
                            </a>
                            <a 
                                href="#mentors" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                Mentors & Jurys
                            </a>
                            <a 
                                href="#about" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                About
                            </a>
                            <a 
                                href="#faq" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                FAQ
                            </a>
                            <a 
                                href="#timeline" 
                                className="text-sm font-medium hover:text-blue-300 transition-colors duration-200"
                            >
                                Timeline
                            </a>
                            
                            </nav>        
                            <a 
                                href="#login" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 transition-colors duration-200"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </a>
                    </div>
                </div>
            </header>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden item-right">
                            <button 
                                type="button" 
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
                                aria-label="Open menu"
                                aria-expanded="false"
                            >
                                <svg 
                                    className="h-8 w-8" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
            
            <main className="bg-gray-50 w-full font-sans">
                <section className="bg-cover bg-center h-96 relative overflow-hidden" style={{ backgroundImage: "url('./images/hero-banner.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50">
                        {/* Stars */}
                        <div className="star" style={{ top: '10%', left: '15%', width: '30px', height: '30px' }}>
                            <img src="/src/assets/images/star.png" alt="Star" className="w-full h-full" />
                        </div>
                        <div className="star" style={{ top: '20%', right: '10%', width: '20px', height: '20px' }}>
                            <img src="/src/assets/images/star.png" alt="Star" className="w-full h-full" />
                        </div>
                        
                        {/* Moon */}
                        <div className="moon" style={{ top: '5%', right: '20%', width: '50px', height: '50px' }}>
                            <img src="/src/assets/images/moon.png" alt="Moon" className="w-full h-full" />
                        </div>

                        {/* Circular Carousel */}
                        <div className="carousel-container">
                            <img 
                                src="/src/assets/images/properti1/image1.jpg" 
                                alt="Property 1" 
                                className="carousel-image active"
                            />
                            <img 
                                src="/src/assets/images/properti2/image1.jpg" 
                                alt="Property 2" 
                                className="carousel-image inactive"
                            />
                        </div>

                        {/* Title */}
                        <div className="flex items-center justify-center h-full">
                            <h1 className="text-5xl font-bold text-white">Join the Excitement!</h1>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="mt-16 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">About the Hackathon</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card p-6">
                                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                                <p>Create groundbreaking solutions that push the boundaries of technology.</p>
                            </div>
                            <div className="card p-6">
                                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                                <p>Work with talented individuals from diverse backgrounds and skill sets.</p>
                            </div>
                            <div className="card p-6">
                                <h3 className="text-xl font-semibold mb-4">Learning</h3>
                                <p>Gain valuable experience and knowledge from industry experts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prizes Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Featured Prizes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="prize-item">
                                <div className="text-4xl">🥇</div>
                                <div>
                                    <h3 className="font-semibold">1st Place</h3>
                                    <p>$500 Cash Prize</p>
                                </div>
                            </div>
                            <div className="prize-item">
                                <div className="text-4xl">🥈</div>
                                <div>
                                    <h3 className="font-semibold">2nd Place</h3>
                                    <p>$300 Cash Prize</p>
                                </div>
                            </div>
                            <div className="prize-item">
                                <div className="text-4xl">🥉</div>
                                <div>
                                    <h3 className="font-semibold">3rd Place</h3>
                                    <p>$200 Cash Prize</p>
                                </div>
                            </div>
                            <div className="prize-item">
                                <div className="text-4xl">🎁</div>
                                <div>
                                    <h3 className="font-semibold">Special Mentions</h3>
                                    <p>Gift Cards & Swag</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mentors Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Mentors</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card p-6 hover:bg-gray-50 transition-colors duration-200">
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-gray-600">Senior Developer at TechCorp</p>
                            </div>
                            <div className="card p-6 hover:bg-gray-50 transition-colors duration-200">
                                <h3 className="text-xl font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">UX Designer at Creative Agency</p>
                            </div>
                            <div className="card p-6 hover:bg-gray-50 transition-colors duration-200">
                                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">Data Scientist at Data Solutions</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h3 className="text-xl font-semibold">Registration Opens</h3>
                                <p className="text-gray-600">January 1, 2023</p>
                            </div>
                            <div className="timeline-item">
                                <h3 className="text-xl font-semibold">Hackathon Date</h3>
                                <p className="text-gray-600">March 15-16, 2023</p>
                            </div>
                            <div className="timeline-item">
                                <h3 className="text-xl font-semibold">Submission Deadline</h3>
                                <p className="text-gray-600">March 16, 2023</p>
                            </div>
                            <div className="timeline-item">
                                <h3 className="text-xl font-semibold">Award Ceremony</h3>
                                <p className="text-gray-600">March 17, 2023</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card p-6">
                                <blockquote className="italic">"An amazing experience!"</blockquote>
                                <p className="mt-2 text-right">- Alex</p>
                            </div>
                            <div className="card p-6">
                                <blockquote className="italic">"I learned so much!"</blockquote>
                                <p className="mt-2 text-right">- Jamie</p>
                            </div>
                            <div className="card p-6">
                                <blockquote className="italic">"Can't wait for the next one!"</blockquote>
                                <p className="mt-2 text-right">- Taylor</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
                        <div className="max-w-2xl mx-auto">
                            <div className="accordion">
                                <div className="accordion-header">
                                    <h3>What is a hackathon?</h3>
                                    <span>+</span>
                                </div>
                                <div className="accordion-content">
                                    <p className="pt-2">A hackathon is an event where people come together to collaborate on software projects.</p>
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="accordion-header">
                                    <h3>Do I need to have a team?</h3>
                                    <span>+</span>
                                </div>
                                <div className="accordion-content">
                                    <p className="pt-2">No, you can join as an individual or as part of a team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
                        <p className="mt-2">Follow us on social media!</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
