import React from "react";

const Meaning = () => {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-24 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Logo Image */}
                <div className="w-full flex justify-center md:justify-start">
                    <img
                        src="img/sonsecurity/logo-son-security-h.png"
                        alt="Logo Son Security"
                        className="w-full max-w-sm object-contain"
                    />
                </div>

                {/* Deskripsi Makna */}
                <div>
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">
                        Logo
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Makna Logo
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base text-justify">
                        Makna dari Nama SON Security adalah berasal dari kata
                        <strong> Son of Nation </strong> (English) yang memiliki
                        makna “Anak laki-laki Bangsa”, yang bisa diartikan anak
                        laki-laki sebagai penjaga bangsa atau negara.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                        Berbentuk huruf S yang dilipat tegas, melambangkan
                        kekuatan dan ketegasan. Menggunakan 3 warna, biru tua
                        sebagai lambang kekuatan, biru muda mewakili makna
                        kebaikan, dan oranye sebagai lambang keamanan.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Meaning;
