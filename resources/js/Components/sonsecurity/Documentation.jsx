import React from 'react';
import { ClipboardCheck, Trophy, Binoculars, MonitorSmartphone, Award, LightbulbIcon } from 'lucide-react';
import { FaTshirt } from 'react-icons/fa';

export default function Documentation() {
    return (
        <div className="relative w-full">
            <img 
                src="img/background/Security-0030dsa.jpg" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-black/50">
                {/* Two images section - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <img 
                        src="img/sonsecurity/Security-008.jpg" 
                        alt="Security personnel" 
                        className="w-full h-48 md:h-96 object-cover"
                    />
                    <img 
                        src="img/sonsecurity/securitytile05.jpg" 
                        alt="Security personnel" 
                        className="w-full h-48 md:h-96 object-cover"
                    />
                </div>

                {/* Responsive Container and Grid */}
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kompetensi Header */}
                        <div className="md:col-span-1 max-w-full md:max-w-3xl mb-6 md:mb-12 md:px-8">
                            <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-4">Kompetensi</h1>
                            <p className="text-base md:text-lg text-white">
                                PT. Cahaya Utama menyediakan tenaga profesional dalam jasa layanan keamanan.
                                Berpengalaman, berkeahlian, berkepribadian baik dan loyal kepada profesinya.
                            </p>
                        </div>

                        {/* First Column of Competencies - Responsive Stacking */}
                        <div className="md:col-span-1 space-y-6 md:space-y-8">
                            <div className="flex items-start gap-4">
                                <FaTshirt className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Atribut Kepegawaian</h2>
                                    <p className="text-sm md:text-base text-gray-300">Berseragam, ID Card, Kelengkapan Safety</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ClipboardCheck className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Prosedur Standar Operasional</h2>
                                    <p className="text-sm md:text-base text-gray-300">Visibilitas, Kerapian, Kepatuhan, Loyalitas, Kepantasan, Etika, Sopan Santun, dan 3S</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Trophy className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Reward & Punishment</h2>
                                    <p className="text-sm md:text-base text-gray-300">Gamix untuk menciptakan budaya kerja kompetitif dan sehat</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <LightbulbIcon className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Teknologi</h2>
                                    <p className="text-sm md:text-base text-gray-300">Dalam beberapa hal kami telah menggunakan teknologi untuk mendukung operasional kerja</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Column of Competencies - Responsive Stacking */}
                        <div className="md:col-span-1 space-y-6 md:space-y-8">
                            <div className="flex items-start gap-4">
                                <Binoculars className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Kontrol dan Pengawasan</h2>
                                    <p className="text-sm md:text-base text-gray-300">Penempatan pengawas/kordinator disetiap group untuk melakukan fungsi kontrol, pengawasan dan kordinasi</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MonitorSmartphone className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Administrasi Kepegawaian</h2>
                                    <p className="text-sm md:text-base text-gray-300">Rekrutmen, Laporan, Asuransi, Penggajian, Presensi, Absensi, Lembur, Pergantian, Penjadwalan</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Award className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Standar Nasional</h2>
                                    <p className="text-sm md:text-base text-gray-300">Penerapan peraturan sesuai Undang-undang ketenagakerjaan Republik Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}