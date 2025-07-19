import React, { memo } from "react";

const Meaning = () => {
    return (
        <section className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Logo di tengah */}
                <div className="w-full flex justify-center mb-12">
                    <picture>
                        <source
                            srcSet="/img/logo/logo-only-tor-trans-150x60.png"
                            type="image/webp"
                        />
                        <img
                            src="/img/logo/logo-only-tor-trans-150x60.png"
                            alt="Logo Brilliant Clean"
                            width="300"
                            height="300"
                            className="w-full max-w-xs object-contain"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>

                {/* Bagian bawah 2 kolom */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Kolom Kiri: Judul */}
                    <div>
                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">
                            Logo
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Makna Logo
                        </h1>
                    </div>

                    {/* Kolom Kanan: Paragraf */}
                    <div>
                        <p className="text-justify text-gray-600 mb-4 leading-relaxed text-sm md:text-base text-justify">
                            Berbentuk huruf T, O, dan R yang disatukan,
                            merupakan lambang dari kekuatan setiap sumber daya
                            yang ada. Menggunakan warna biru tua sebagai lambang
                            kekuatan, dan dipadukan dengan warna hijau sebagai
                            lambang kemurnian atau ketulusan.
                        </p>
                        <p className="text-justify text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                            Sehingga arti logo TOR adalah setiap sumber daya
                            yang ada adalah merupakan kekuatan yang benar-benar
                            diberikan kepada pelanggan dengan profesional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Meaning);
