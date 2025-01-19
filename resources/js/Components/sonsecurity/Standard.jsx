import React from "react";
import { FaFileAlt, FaHands, FaUserSecret, FaBullhorn, FaFire, FaShieldAlt } from "react-icons/fa";

export default function Standard() {
    return (
        <div className="bg-gray-800 text-white py-8 px-12">
            <h1 className="text-yellow-400 text-3xl font-bold text-center mb-12">
                Standar Pelatihan Tenaga Keamanan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* PBB & PPM */}
                <div className="flex items-start space-x-4 px-12">
                    <FaFileAlt className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">PBB & PPM</h2>
                        <p className="text-gray-400">
                            Peraturan baris berbaris & peraturan penghormatan militer.
                        </p>
                    </div>
                </div>

                 {/* Kriminalitas */}
                 <div className="flex items-start space-x-4 px-12">
                    <FaUserSecret className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">Kriminalitas</h2>
                        <p className="text-gray-400">
                            Pelatihan dasar penanganan tindak kejahatan seperti pencurian, tindak kekerasan,
                            sabotase, dll.
                        </p>
                    </div>
                </div>

                   {/* Kebakaran */}
                   <div className="flex items-start space-x-4 px-12">
                    <FaFire className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">Kebakaran</h2>
                        <p className="text-gray-400">
                            Pelatihan dasar pencegahan & penanggulangan bahaya kebakaran.
                        </p>
                    </div>
                </div>

                {/* Bela Diri */}
                <div className="flex items-start space-x-4 px-12">
                    <FaHands className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">Bela Diri</h2>
                        <p className="text-gray-400">
                            Pelatihan teknik bela diri, ketangkasan, pelemahan dan penguncian.
                        </p>
                    </div>
                </div>

                {/* Gangguan Keamanan */}
                <div className="flex items-start space-x-4 px-12">
                    <FaBullhorn className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">Gangguan Keamanan</h2>
                        <p className="text-gray-400">
                            Pelatihan dasar pengendalian gangguan keamanan seperti mabuk, demonstrasi dll.
                        </p>
                    </div>
                </div>

                {/* Turlalin & Turjawali */}
                <div className="flex items-start space-x-4 px-12">
                    <FaShieldAlt className="text-4xl text-white" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">Turlalin & Turjawali</h2>
                        <p className="text-gray-400">
                            Pelatihan pengaturan lalu lintas & pelatihan pengaturan, penjadwalan dan patroli.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
