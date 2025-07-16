import React, { memo, useMemo } from "react";
import {
    FaTshirt,
    FaBinoculars,
    FaFolderOpen,
    FaBalanceScale,
    FaTrophy,
    FaMicrochip,
} from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const Strength = () => {
    const items = useMemo(
        () => [
            {
                icon: <FaTshirt className="text-blue-600 w-6 h-6" />,
                title: "Atribut Kepegawaian",
                desc: "Atribut kepegawaian meliputi seragam, ID card, dan kelengkapan safety lainnya.",
            },
            {
                icon: <FaBinoculars className="text-blue-600 w-6 h-6" />,
                title: "Kontrol dan Pengawasan",
                desc: "Pengawasan disetiap grup untuk melakukan fungsi kontrol, pengawasan dan koordinasi.",
            },
            {
                icon: <FaFolderOpen className="text-blue-600 w-6 h-6" />,
                title: "Administrasi Kepegawaian",
                desc: "Rekrutmen, laporan, asuransi, penggajian, presensi, absensi, lembur, penjadwalan.",
            },
            {
                icon: <PiCertificateFill className="text-blue-600 w-6 h-6" />,
                title: "Standar Nasional",
                desc: "Penerapan peraturan sesuai Undang-Undang Ketenagakerjaan Republik Indonesia.",
            },
            {
                icon: <FaTrophy className="text-blue-600 w-6 h-6" />,
                title: "Reward & Punishment",
                desc: "Gamix untuk menciptakan budaya kerja kompetitif dan sehat.",
            },
            {
                icon: <FaMicrochip className="text-blue-600 w-6 h-6" />,
                title: "Teknologi Operasional",
                desc: "Dalam beberapa hal kami telah menggunakan teknologi untuk mendukung operasional kerja.",
            },
        ],
        []
    );

    return (
        <section className="bg-white py-20 px-4 md:px-12 lg:px-24 text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-blue-600 font-semibold uppercase text-sm tracking-widest mb-2">
                    Kompetensi
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Keunggulan SON Security
                </h2>
                <p className="text-gray-500 mb-12 text-base md:text-lg">
                    Keamanan profesional, terpercaya, dan siap memberikan
                    perlindungan maksimal sesuai kebutuhan.
                </p>

                {/* Grid Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1">{item.icon}</div>
                            <div>
                                <h4 className="font-semibold text-base md:text-lg mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
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

export default memo(Strength);
