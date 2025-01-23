import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import '../index.css';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center">
            <h1 className="text-6xl font-bold text-white text-center text-glow mb-8">FAQs</h1>
            <div className="w-full max-w-5xl mx-auto space-y-4">
                <div className="pb-4">
                    <button
                        className="w-full text-left text-lg font-medium text-white flex justify-between items-center border-b border-white"
                        onClick={() => toggleFaq(0)}
                    >
                        <span className="hover:glow">Apa saja persyaratan untuk berpartisipasi dalam Hackathon?</span>
                        <span className="ml-2">{openIndex === 0 ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    <div className={`overflow-hidden transition-max-height duration-300 ${openIndex === 0 ? 'max-h-screen animate-slide-down' : 'max-h-0 animate-slide-up'}`}>
                        <div className="mt-2 text-white">
                            <p>Peserta hanya dapat bergabung dalam 1 tim, baik secara individu maupun tim. Setiap tim dapat beranggotakan maksimal 4 orang. Peserta adalah warga negara Indonesia berusia 18 hingga 25 tahun. Untuk informasi lebih lanjut, peserta dapat melihat panduan Hackathon 8.0 (Link Guidebook Hackathon 8.0).</p>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <button
                        className="w-full text-left text-lg font-medium text-white flex justify-between items-center border-b border-white"
                        onClick={() => toggleFaq(1)}
                    >
                        <span className="hover:glow">Apakah Hackathon 8.0 gratis?</span>
                        <span className="ml-2">{openIndex === 1 ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    <div className={`overflow-hidden transition-max-height duration-300 ${openIndex === 1 ? 'max-h-screen animate-slide-down' : 'max-h-0 animate-slide-up'}`}>
                        <div className="mt-2 text-white">
                            <p>Hackathon 8.0 berbayar. Setiap tim dapat melakukan pembayaran sesuai periode:</p>
                            <ul>
                                <li>1. Gelombang 1 (14 Mei - 27 Mei 2025)
                                    <ul>
                                        <li>Binusian: Rp190.000</li>
                                        <li>Non-Binusian: Rp210.000</li>
                                    </ul>
                                </li>
                                <li>2. Gelombang 2 (28 Mei - 11 Juni 2025)
                                    <ul>
                                        <li>Binusian: Rp200.000</li>
                                        <li>Non-Binusian: Rp225.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pb-4">
                    <button
                        className="w-full text-left text-lg font-medium text-white flex justify-between items-center border-b border-white"
                        onClick={() => toggleFaq(2)}
                    >
                        <span className="hover:glow">Bolehkah berpartisipasi sekalipun tidak ada dasar pemrograman?</span>
                        <span className="ml-2">{openIndex === 2 ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    <div className={`overflow-hidden transition-max-height duration-300 ${openIndex === 2 ? 'max-h-screen animate-slide-down' : 'max-h-0 animate-slide-up'}`}>
                        <div className="mt-2 text-white">
                            <p>Peserta tanpa latar belakang pemrograman atau dasar-dasar coding dan desain masih diperbolehkan untuk berpartisipasi pada acara hackathon. Namun, perlu diingat bahwa akan ada seleksi untuk menentukan tim yang lolos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
