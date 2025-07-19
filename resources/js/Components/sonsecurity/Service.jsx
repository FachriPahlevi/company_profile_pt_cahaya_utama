import React, { memo, useMemo } from "react";

const Service = () => {
    const points = useMemo(
        () => [
            {
                title: "Sekilas Son Security",
                description: `SON SECURITY adalah bagian dari PT. Cahaya Utama yang menyediakan alih daya jasa keamanan (outsourcing for security service), 
        untuk perusahaan yang membutuhkan dengan 24 jam waktu pengamanan. Tenaga kerja yang disiapkan oleh SON SECURITY adalah tenaga keamanan 
        yang terintegritas, berkepribadian baik dan bertanggung jawab, menjaga rahasia yang dipercayakan perusahaan.`,
            },
            {
                title: null,
                description: `Semua tenaga keamanan dari SON SECURITY sudah memiliki kompetensi Gada Pratama, Madya maupun Utama, sehingga dalam menjalankan 
        tugas memiliki kewenangan kepolisian terbatas di wilayah kerjanya. Kami juga melengkapi sistem alat keamanan yang berkualitas seperti: 
        Metal Detector, Mirror detector, RFID Guard Patrol, Camera CCTV dan senjata pertahanan lainnya yang disesuaikan dengan tugas dan kebutuhan kerja perusahaan.`,
            },
        ],
        []
    );

    return (
        <section className="bg-white pt-8 pb-2 px-4 md:px-8 lg:px-24">
            <div className="grid md:grid-rows-2 items-center">
                {/* Gambar & Logo */}
                <div className="relative w-full ">
                    <img
                        src="img/sonsecurity/HeroSonV2.png"
                        alt="Logo Son Security dan Petugas"
                        className="w-full h-auto object-cover rounded-xl shadow"
                        loading="lazy"
                    />
                    {/* Jika mau, bisa tambahkan absolute logo di sini */}
                </div>

                {/* Teks Konten */}
                <div className="">
                    <h5 className="text-blue-600 uppercase font-semibold text-sm tracking-wide mb-2">
                        Tentang Kami
                    </h5>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        Sekilas Son Security
                    </h2>

                    {points.map((point, idx) => (
                        <p
                            key={idx}
                            className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-justify"
                        >
                            {point.description}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Service);
