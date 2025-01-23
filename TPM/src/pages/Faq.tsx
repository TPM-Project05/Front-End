import Accordion, { AccordionItem } from "@/components/Accordion";

export default function faq() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            {/* Heading utama untuk halaman FAQ */}
            <div className="font-poppins leading-tight flex justify-center">
                <div className="text-[56px] text-glow text-white font-poppins">FAQs</div>
            </div>

            {/* Accordion dengan beberapa item */}
            <Accordion className="max-w-[1000px] py-10" value={null}>
                <AccordionItem value="1" trigger="Apa saja persyaratan untuk berpartisipasi dalam Hackathon?">
                    <p className="text-white text-lg mt-4">
                        Peserta hanya dapat bergabung dalam 1 tim, baik secara individu maupun tim. Setiap tim
                        dapat beranggotakan maksimal 4 orang. Peserta adalah warga negara Indonesia berusia 18
                        hingga 25 tahun. Untuk informasi lebih lanjut, peserta dapat melihat panduan Hackathon 8.0
                        (Link Guidebook Hackathon 8.0).
                    </p>
                </AccordionItem>
                <AccordionItem value="2" trigger="Apakah Hackathon 8.0 gratis?">
                    <p className="text-white text-lg mt-4">
                        Hackathon 8.0 berbayar. Setiap tim dapat melakukan pembayaran sesuai periode:
                    </p>
                    <ul className="text-white text-lg pl-3">
                        <li className="">
                            <div>1. Gelombang 1 (14 Mei - 27 Mei 2025)</div>
                            <div className="pl-5">
                                Binusian: Rp190.000 <br />
                                Non-Binusian: Rp210.000
                            </div>
                        </li>
                        <li className="">
                            <div>2. Gelombang 2 (28 Mei - 11 Juni 2025)</div>
                            <div className="pl-5">
                                Binusian: Rp200.000 <br />
                                Non-Binusian: Rp225.000
                            </div>
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem value="3" trigger="Bolehkah berpartisipasi sekalipun tidak ada dasar pemrograman?">
                    <p className="text-white text-lg mt-4">
                        Peserta tanpa latar belakang pemrogram atau dasar dasar coding dan desain masih
                        diperbolehkan untuk berpartisipasi pada acara Hackathon. Namun, perlu diingat bahwa akan
                        ada seleksi untuk menentukan tim yang lolos.
                    </p>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
