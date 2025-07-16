import React, { memo, useMemo } from "react";
import {
    FaFileAlt, // PBB & PPM
    FaPen, // Kriminalitas
    FaFireAlt, // Kebakaran
    FaUserShield, // Turlalin & Turjawali
    FaUserFriends, // Gangguan Keamanan
    FaHandRock, // Bela Diri
} from "react-icons/fa";

const Standard = () => {
    const trainingItems = useMemo(
        () => [
            {
                icon: <FaFileAlt className="text-white w-5 h-5" />,
                title: "PBB & PPM",
                desc: "Peraturan baris berbaris & peraturan penghormatan militer.",
            },
            {
                icon: <FaPen className="text-white w-5 h-5" />,
                title: "Kriminalitas",
                desc: "Pelatihan dasar penanganan tindak kejahatan seperti pencurian, kekerasan, sabotase, dll.",
            },
            {
                icon: <FaFireAlt className="text-white w-5 h-5" />,
                title: "Kebakaran",
                desc: "Pelatihan dasar pencegahan & penanggulangan bahaya kebakaran.",
            },
            {
                icon: <FaHandRock className="text-white w-5 h-5" />,
                title: "Bela Diri",
                desc: "Pelatihan teknik bela diri, ketangkasan, pelemahan dan penguncian.",
            },
            {
                icon: <FaUserFriends className="text-white w-5 h-5" />,
                title: "Gangguan Keamanan",
                desc: "Pelatihan dasar pengendalian gangguan keamanan seperti mabuk, demonstrasi dll.",
            },
            {
                icon: <FaUserShield className="text-white w-5 h-5" />,
                title: "Turlalin & Turjawali",
                desc: "Pelatihan pengaturan lalu lintas, penjadwalan, dan patroli.",
            },
        ],
        []
    );

    return (
        <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-24 text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-blue-600 font-semibold uppercase text-sm tracking-widest mb-2">
                    Standar Pelatihan
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Kompetensi Melalui Pelatihan Terstruktur
                </h2>
                <p className="text-gray-500 mb-12 text-base md:text-lg max-w-3xl mx-auto">
                    Setiap personel SON Security dibekali pelatihan terstruktur
                    dan berstandar tinggi untuk memastikan kesiapan,
                    kedisiplinan serta kemampuan menghadapi berbagai situasi di
                    lapangan.
                </p>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                    {trainingItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <div className="bg-blue-600 rounded-lg p-3">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-base md:text-lg">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Standard);
