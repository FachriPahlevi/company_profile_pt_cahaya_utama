import React, { useMemo } from "react";

const Service = () => {
    const layananList = useMemo(
        () => [
            {
                title: "Pekerjaan Rutin Dalam Ruang",
                label: "LAYANAN",
                image: "/img/brilliant/HeroBrilliantV8.png",
                alt: "Petugas kebersihan sedang membersihkan meja di dalam ruangan",
            },
            {
                title: "Pekerjaan Rutin Luar Ruang",
                label: "LAYANAN",
                image: "/img/brilliant/HeroBrilliantV9.png",
                alt: "Petugas kebersihan sedang bertugas di area luar ruangan",
            },
            {
                title: "Layanan Khusus",
                label: "LAYANAN",
                image: "/img/brilliant/HeroBrilliantV10.png",
                alt: "Petugas kebersihan menyiapkan perlengkapan pembersih",
            },
        ],
        []
    );

    return (
        <section
            className="bg-white py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="judul-layanan"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-blue-600 font-semibold uppercase text-sm mb-2 tracking-wide">
                    Layanan Kami
                </p>
                <h2
                    id="judul-layanan"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                    <span className="font-bold">3 Layanan </span>
                    <span className="font-normal">Briliant Clean</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Briliant Clean menyediakan berbagai layanan cleaning untuk
                    menjaga kebersihan ruang kerja secara menyeluruh dan
                    konsisten.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {layananList.map((layanan, index) => (
                    <article
                        key={index}
                        className="relative rounded-xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src={layanan.image}
                            alt={layanan.alt}
                            className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                            <p className="text-xs uppercase tracking-wide opacity-75">
                                {layanan.label}
                            </p>
                            <h3 className="text-lg font-semibold leading-tight">
                                {layanan.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default React.memo(Service);
