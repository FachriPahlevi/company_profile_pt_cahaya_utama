import React, { memo, useMemo } from "react";

const Documentation = () => {
    const services = useMemo(
        () => [
            {
                title: "Daily Cleaning",
                description:
                    "Layanan kebersihan rutin harian untuk menjaga kebersihan area kerja setiap hari.",
            },
            {
                title: "Weekly Cleaning",
                description:
                    "Solusi pembersihan rutin mingguan untuk menjaga kebersihan dan kerapian area kerja.",
            },
            {
                title: "General Cleaning",
                description:
                    "Pembersihan menyeluruh untuk area indoor maupun outdoor untuk hasil bersih maksimal.",
            },
        ],
        []
    );

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="dokumentasi-security"
        >
            {/* Hero Image Full Width */}
            <figure className="relative w-full">
                <img
                    src="/img/brilliant/HeroBrilliantV4.png"
                    alt="Personil keamanan sedang bertugas"
                    className="w-full h-64 md:h-[28rem] object-cover object-center shadow"
                    loading="lazy"
                />
                <figcaption id="dokumentasi-security" className="sr-only">
                    Dokumentasi personil keamanan dalam menjalankan tugas
                </figcaption>
            </figure>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {["HeroBrilliantV5", "HeroBrilliantV6", "HeroBrilliantV7"].map(
                    (imgName, index) => (
                        <figure
                            key={index}
                            className="relative w-full overflow-hidden shadow"
                        >
                            <img
                                src={`/img/brilliant/${imgName}.png`}
                                alt={`Dokumentasi ${imgName}`}
                                className="w-full h-64 md:h-80 object-cover object-center"
                                loading="lazy"
                            />
                        </figure>
                    )
                )}
            </div>

            {/* Service Description */}
            <div className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-16">
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left"
                        >
                            <div className="flex items-start gap-2">
                                <span className="mt-1 w-2 h-2 rounded-full bg-white shrink-0" />
                                <h4 className="text-base md:text-lg font-semibold">
                                    {service.title}
                                </h4>
                            </div>
                            <p className="text-sm md:text-base mt-2 leading-relaxed text-white/90">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Documentation);
