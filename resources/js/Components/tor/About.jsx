import React, { useMemo } from "react";
import CountUp from "react-countup";

const Service = () => {
    const stats = useMemo(
        () => [
            { label: "Tenaga kerja distribusi", value: 14700 },
            { label: "Klien Perusahaan", value: 13 },
            { label: "Bidang dan Keahlian", value: 7 },
        ],
        []
    );

    const descriptions = useMemo(
        () => [
            `TOR atau Trust Our Resources adalah bagian dari PT. Cahaya Utama yang menyediakan alih daya jasa dan pekerjaan lainnya untuk perusahaan yang membutuhkan dengan lingkup tugas yang menyeluruh dan fleksibel.`,
            `Dengan dukungan tenaga kerja yang kompeten, sistem kerja yang terstruktur serta pengawasan berkala, TOR memastikan setiap tugas dijalankan secara profesional, efisien, dan bertanggung jawab. Kami berkomitmen menjadi mitra terpercaya dalam menghadirkan solusi alih daya yang tepat guna dan berkelanjutan.`,
        ],
        []
    );

    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20 w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Images */}
                <div className="relative w-full h-full flex justify-center md:justify-start">
                    <div className="relative w-2/3 sm:w-3/4 md:w-[70%] lg:w-3/5 rounded-xl overflow-hidden shadow-xl">
                        <picture>
                            <source
                                srcSet="/img/tor/HeroTorV2.png"
                                type="image/webp"
                            />
                            <img
                                src="/img/tor/HeroTorV2.png"
                                alt="Petugas TOR 1"
                                className="rounded-xl w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div className="absolute z-10 -bottom-8 left-24 sm:left-28 md:left-40 w-2/3 sm:w-3/4 md:w-[70%] lg:w-3/5 z-0 rounded-xl overflow-hidden shadow-xl">
                        <picture>
                            <source
                                srcSet="/img/tor/HeroTorV3.png"
                                type="image/webp"
                            />
                            <img
                                src="/img/tor/HeroTorV3.png"
                                alt="Petugas TOR 2"
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
                        Sekilas TOR
                    </h2>
                    {descriptions.map((text, index) => (
                        <p
                            key={index}
                            className="text-gray-700 text-base leading-relaxed mb-4"
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
                                        separator="."
                                        suffix={i === 0 ? "+" : ""}
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

export default Service;
