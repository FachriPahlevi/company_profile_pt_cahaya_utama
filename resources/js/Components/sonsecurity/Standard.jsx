import React from "react";
import { FaFileAlt, FaHands, FaUserSecret, FaBullhorn, FaFire, FaShieldAlt } from "react-icons/fa";

export default function Standard() {
    const trainingData = [
        {
            Icon: FaFileAlt,
            title: "PBB & PPM",
            description: "Peraturan baris berbaris & peraturan penghormatan militer."
        },
        {
            Icon: FaUserSecret,
            title: "Kriminalitas",
            description: "Pelatihan dasar penanganan tindak kejahatan seperti pencurian, tindak kekerasan, sabotase, dll."
        },
        {
            Icon: FaFire,
            title: "Kebakaran",
            description: "Pelatihan dasar pencegahan & penanggulangan bahaya kebakaran."
        },
        {
            Icon: FaHands,
            title: "Bela Diri",
            description: "Pelatihan teknik bela diri, ketangkasan, pelemahan dan penguncian."
        },
        {
            Icon: FaBullhorn,
            title: "Gangguan Keamanan",
            description: "Pelatihan dasar pengendalian gangguan keamanan seperti mabuk, demonstrasi dll."
        },
        {
            Icon: FaShieldAlt,
            title: "Turlalin & Turjawali",
            description: "Pelatihan pengaturan lalu lintas & pelatihan pengaturan, penjadwalan dan patroli."
        }
    ];

    return (
        <div className="bg-gray-800 text-white py-8 px-4 sm:px-6 md:px-12">
            <h1 className="text-yellow-400 text-3xl font-bold text-center mb-12">
                Standar Pelatihan Tenaga Keamanan
            </h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingData.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-start space-x-4 px-4 sm:px-6 md:px-12 transform transition-transform duration-300 hover:scale-105"
                    >
                        <item.Icon className="text-4xl text-white flex-shrink-0" />
                        <div className="flex-grow">
                            <h2 className="text-lg font-semibold text-white mb-2">{item.title}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}