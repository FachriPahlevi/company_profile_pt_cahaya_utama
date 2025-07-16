import React, { memo } from "react";

const Meaning = () => {
    return (
        <section className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Logo di tengah */}
                <div className="w-full flex justify-center mb-12">
                    <picture>
                        <source
                            srcSet="/img/cahaya_utama.png"
                            type="image/webp"
                        />
                        <img
                            src="/img/cahaya_utama.png"
                            alt="Logo Cahaya Utama"
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
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base text-justify">
                            Makna dari nama <strong>Cahaya Utama</strong> adalah
                            diambil dari kata <strong>"Cahaya"</strong> yang
                            berarti sinar atau penerangan dan{" "}
                            <strong>"Utama"</strong> yang berarti terbaik.
                            Dimana kami yakin Cahaya Utama dapat menjadi
                            perusahaan yang dapat memberikan pengaruh dan
                            manfaat bagi banyak orang, serta menjadi perusahaan
                            terbaik dalam bidangnya.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Logo Cahaya Utama merupakan proyeksi dari 2 (dua)
                            orang yang terhubung satu sama lain. Dengan warna
                            biru melambangkan <strong>Kepercayaan</strong> dan
                            Hijau melambangkan <strong>Inovatif</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Meaning);
