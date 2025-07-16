import React, { memo, useMemo } from "react";
import {
    FaTshirt,
    FaBinoculars,
    FaFolderOpen,
    FaBalanceScale,
    FaTrophy,
    FaMicrochip,
} from "react-icons/fa";

const Standard = () => {
    const items = useMemo(
        () => [
            {
                icon: <FaTshirt className="text-blue-600 w-5 h-5" />,
                title: "Atribut Kepegawaian",
                desc: "Atribut kepegawaian meliputi seragam, ID card, dan kelengkapan safety lainnya.",
            },
            {
                icon: <FaBinoculars className="text-blue-600 w-5 h-5" />,
                title: "Kontrol dan Pengawasan",
                desc: "Pengawasan disetiap grup untuk melakukan fungsi kontrol, pengawasan dan koordinasi.",
            },
            {
                icon: <FaFolderOpen className="text-blue-600 w-5 h-5" />,
                title: "Administrasi Kepegawaian",
                desc: "Rekrutmen, laporan, asuransi, penggajian, presensi, absensi, lembur, penjadwalan.",
            },
            {
                icon: <FaBalanceScale className="text-blue-600 w-5 h-5" />,
                title: "Standar Nasional",
                desc: "Penerapan peraturan sesuai Undang-Undang Ketenagakerjaan Republik Indonesia.",
            },
            {
                icon: <FaTrophy className="text-blue-600 w-5 h-5" />,
                title: "Reward & Punishment",
                desc: "Gamix untuk menciptakan budaya kerja kompetitif dan sehat.",
            },
            {
                icon: <FaMicrochip className="text-blue-600 w-5 h-5" />,
                title: "Teknologi Operasional",
                desc: "Dalam beberapa hal kami telah menggunakan teknologi untuk mendukung operasional kerja.",
            },
        ],
        []
    );

    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-medium uppercase text-sm tracking-wider mb-2">
                        Kompetensi
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                        Standar Kompetensi SDM
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        PT. Cahaya Utama menyediakan tenaga profesional dalam
                        jasa layanan keamanan. Berpengalaman, berkeahlian,
                        berkepribadian baik dan loyal kepada profesinya.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm md:text-base">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="pt-1">{item.icon}</div>
                            <div>
                                <h4 className="font-semibold mb-1 text-gray-800">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Standard);
