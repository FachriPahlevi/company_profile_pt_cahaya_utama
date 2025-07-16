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
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {["HeroTorV4", "HeroTorV5", "HeroTorV6", "HeroTorV7"].map(
                    (imgName, index) => (
                        <figure
                            key={index}
                            className="relative w-full overflow-hidden shadow"
                        >
                            <img
                                src={`/img/tor/${imgName}.png`}
                                alt={`Dokumentasi ${imgName}`}
                                className="w-full h-64 md:h-80 object-cover object-center"
                                loading="lazy"
                            />
                        </figure>
                    )
                )}
            </div>
        </section>
    );
};

export default memo(Documentation);
