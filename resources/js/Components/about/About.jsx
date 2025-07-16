import React, { useMemo } from "react";
import CountUp from "react-countup";

const About = () => {
    const stats = useMemo(
        () => [
            { label: "Tenaga kerja kami", value: 31600 },
            { label: "Klien", value: 37 },
            { label: "Bidang", value: 8 },
        ],
        []
    );

    const descriptions = useMemo(
        () => [
            `PT Cahaya Utama adalah salah satu perusahaan swasta nasional yang didirikan pada tahun 2004. Perusahaan ini berbentuk perseroan terbatas yang bergerak di bidang jasa outsourcing atau alih daya manajemen sumber daya manusia.`,
            ` PT. Cahaya Utama telah memiliki sertifikasi ISO 9001 (Sistem Management Mutu) dan sertifikasi ISO 45001 (Sistem Management K3). Dan akan selalu kami tingkatkan sesuai dengan kebutuhan perkembangan zaman.`,
        ],
        []
    );

    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20 w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Images */}
                <div className="relative w-full h-full flex justify-center md:justify-start">
                    <div className="relative z-10 w-2/3 sm:w-3/4 md:w-[70%] lg:w-3/5 rounded-xl overflow-hidden shadow-xl">
                        <picture>
                            <source
                                srcSet="/img/about/HeroAboutV2.webp"
                                type="image/webp"
                            />
                            <img
                                src="/img/about/HeroAboutV2.png"
                                alt="Petugas kebersihan profesional 1"
                                className="rounded-xl w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div className="absolute -bottom-8 left-20 sm:left-28 md:left-64 w-2/3 sm:w-3/4 md:w-[70%] lg:w-3/5 z-0 rounded-xl overflow-hidden shadow-xl">
                        <picture>
                            <source
                                srcSet="/img/about/HeroAboutV3.webp"
                                type="image/webp"
                            />
                            <img
                                src="/img/about/HeroAboutV3.png"
                                alt="Petugas kebersihan profesional 2"
                                className="rounded-xl w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-10 md:pt-0">
                    <p className="text-blue-600 font-semibold uppercase text-sm mb-2 tracking-wider">
                        Tentang Kami
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Sekilas Cahaya Utama
                    </h2>
                    {descriptions.map((text, index) => (
                        <p
                            key={index}
                            className="text-gray-700 text-base text-justify leading-relaxed mb-4"
                        >
                            {text}
                        </p>
                    ))}

                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {stats.map((item, i) => (
                            <div key={i} className="text-center">
                                <h3 className="text-blue-600 text-2xl md:text-3xl font-bold">
                                    <CountUp
                                        end={item.value}
                                        duration={2}
                                        separator=","
                                    />
                                </h3>
                                <p className="text-sm mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
