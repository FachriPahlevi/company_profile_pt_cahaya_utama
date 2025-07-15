import React, { memo } from "react";

const Commitment = memo(() => {
    return (
        <section
            className="text-center py-12 bg-white text-primary-700"
            aria-label="CEO Commitment Speech"
        >
            <h4 className="text-h4 text-primary-500 font-semibold mb-4">
                SPEECH CEO
            </h4>
            <h1 className="text-h1 text-black font-semibold mb-6">
                Komitmen Kami untuk Anda
            </h1>

            <p className="text-body-md text-gray-700 mx-auto mb-6 max-w-6xl px-4 sm:px-6 lg:px-8 text-justify leading-relaxed">
                Kami memahami bahwa peran Sumber Daya Manusia sangat vital dalam
                menjalankan sebuah organisasi dalam perusahaan, baik Sumber Daya
                Manusia inti maupun pendukung. Karenanya, kami hadir sebagai
                perusahaan penyedia jasa tenaga kerja untuk menunjang keperluan
                perusahaan Anda. Dengan pelatihan terbaik dan pendekatan yang
                tepat, kami memberikan tenaga kerja yang profesional, terlatih,
                disiplin, dan bertanggung jawab dalam setiap tugasnya. Kami
                percaya bahwa orang-orang yang berintegritas akan memberikan
                dedikasi terbaik dalam menjalankan pekerjaannya, dan kami siap
                memenuhi setiap kebutuhan Anda dalam perusahaan.
            </p>

            <p className="text-body-lg text-black font-semibold">
                Imam Murtadho
            </p>
            <p className="text-body-sm text-[#57575C]">CEO // Cahaya Utama</p>
        </section>
    );
});

Commitment.displayName = "Commitment";

export default Commitment;
