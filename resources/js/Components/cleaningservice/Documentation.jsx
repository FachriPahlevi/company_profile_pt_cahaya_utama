import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Trophy, Binoculars, MonitorSmartphone, Award, LightbulbIcon } from 'lucide-react';
import { FaTshirt, FaUserShield, FaRegCheckCircle } from 'react-icons/fa';

export default function Documentation() {
    return (
        <div className="relative">
            <img 
                src="img/background/Security-0030dsa.jpg" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-black/50">
                {/* Two images section dengan responsive dan animasi */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                    <motion.img 
                        src="img/brilliant/cleaningtile02.jpg" 
                        alt="Security personnel" 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-auto md:h-96 object-cover"
                    />
                    <img 
                        src="img/brilliant/cleaningtile03.jpg" 
                        alt="Security personnel" 
                        className="w-full h-auto md:h-96 object-cover"
                    />
                    <motion.img 
                        src="img/brilliant/cleaningtile09.jpg" 
                        alt="Security personnel" 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-auto md:h-96 object-cover"
                    />
                </div>

                {/* Container responsif */}
                <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto px-4 py-12 gap-8">
                    {/* Kolom pertama */}
                    <div className="max-w-3xl md:col-span-1 px-4">
                        <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-4">Kompetensi</h1>
                        <p className="text-base md:text-lg text-white">
                            PT. Cahaya Utama menyediakan tenaga profesional dalam jasa layanan kebersihan.
                            Berpengalaman, berkeahlian, berkepribadian baik dan loyal kepada profesinya.
                        </p>
                    </div>

                    {/* Kolom kedua dan ketiga dengan layout responsif */}
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaTshirt className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Atribut Kepegawaian</h2>
                                    <p className="text-sm md:text-base text-gray-300">Berseragam, ID Card, Kelengkapan Safety</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaRegCheckCircle className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Prosedur Standar Operasional</h2>
                                    <p className="text-sm md:text-base text-gray-300">Visibilitas, Kerapian, Kepatuhan, Loyalitas, Kepantasan, Etika, Sopan Santun, dan 3S (Sapa, Salam dan Senyum)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Trophy className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Reward & Punishment</h2>
                                    <p className="text-sm md:text-base text-gray-300">Gamix untuk menciptakan budaya kerja kompetitif dan sehat</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <LightbulbIcon className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Teknologi</h2>
                                    <p className="text-sm md:text-base text-gray-300">Dalam beberapa hal kami telah menerapkan teknologi yang dikembangkan terus-menerus sebagai perangkat kerja nyata</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Binoculars className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Kontrol dan Pengawasan</h2>
                                    <p className="text-sm md:text-base text-gray-300">Penempatan pengawas/kordinator disetiap group untuk melakukan fungsi kontrol, pengawasan dan koordinasi</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaUserShield className="w-8 h-8 flex-shrink-0 text-white" />
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Administrasi Kepegawaian</h2>
                                    <p className="text-sm md:text-base text-gray-300">Rekrutmen, Laporan, Asuransi, Penggajian, Presensi, Absensi, Lembur, Pergantian, Penjadwalan, dan instrumen administrasi lainnya</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Award className="w-8 h-8 flex-shrink-0 text-white" />
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