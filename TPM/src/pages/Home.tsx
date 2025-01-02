export default function Home() {
    return (
        <>
            <header className="bg-blue-500 text-white p-4">
                <h1 className="text-2xl">Welcome to Our Website</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="hover:underline">Features</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="p-4">
                <section>
                    <h2 className="text-xl">Welcome!</h2>
                    <p>This is the home page where you can find all the latest updates and features.</p>
                </section>
                <section id="features" className="mt-4">
                    <h2 className="text-xl">Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Feature 1: A brief description of feature 1.</li>
                        <li>Feature 2: A brief description of feature 2.</li>
                        <li>Feature 3: A brief description of feature 3.</li>
                    </ul>
                </section>
            </main>
            <footer id="contact" className="bg-gray-200 text-center p-4">
                <p className="text-xl">Contact us at: info@example.com</p>
                <p>Follow us on social media!</p>
            </footer>
        </>
    );
}