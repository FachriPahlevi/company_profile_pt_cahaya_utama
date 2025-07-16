import React from "react";
import { FileBadge2 } from "lucide-react"; // Atau ganti dengan icon yang kamu pakai di project

const Commitment = () => {
    return (
        <section
            className="bg-[#F5F7FA] py-16 px-4 md:px-16"
            aria-label="Sertifikasi Kami"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Sertifikasi Kami
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Komitmen Kami terhadap Standar Resmi
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-justify">
                        Kami memastikan seluruh layanan dijalankan sesuai dengan
                        regulasi dan standar yang berlaku. Dibuktikan melalui
                        kepemilikan sertifikasi resmi sebagai wujud komitmen
                        kami terhadap kualitas, keamanan, dan profesionalisme.
                    </p>

                    {/* ISO Boxes */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* ISO 9001 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <FileBadge2 size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    ISO 9001
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Sistem Management Mutu
                                </p>
                            </div>
                        </div>

                        {/* ISO 45001 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <FileBadge2 size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    ISO 45001
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Sistem Management K3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="/img/about/HeroAboutV4.png"
                        alt="Sertifikat ISO PT Cahaya Utama"
                        className="rounded-xl shadow-md max-w-full h-auto"
                        width={600}
                        height={400}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Commitment;
