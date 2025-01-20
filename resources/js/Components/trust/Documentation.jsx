import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Trophy, Binoculars, MonitorSmartphone, Award, LightbulbIcon, Phone } from 'lucide-react';
import { FaTshirt } from 'react-icons/fa';

export default function Documentation() {
    const imageVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const images = [
        "img/trust/smiling-call-center-working_63253-7813.jpg",
        "img/trust/cheerful-asian-plumber-standing-near-kitchen-sink-showing-thumb-up_1098-17826.jpg",
        "img/trust/cleaningtile09.jpg",
        "img/trust/metal-workers-industrial-workshop-grinding_79405-12508.jpg",
        "img/trust/news01.jpg"
    ];

    return (
        <div className="relative">
            <img 
                src="img/background/Security-0030dsa.jpg" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative bg-black/50">
                {/* Responsive image grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
                    {images.map((src, index) => (
                        <motion.img 
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            custom={index % 2 === 0 ? 1 : -1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={imageVariants}
                            className="w-full h-48 md:h-64 lg:h-96 object-cover"
                        />
                    ))}
                </div>

                {/* Responsive container */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kompetensi Section */}
                        <div className="md:col-span-1 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4">Kompetensi</h1>
                            <p className="text-base text-white">
                                PT. Cahaya Utama menyediakan tenaga profesional dalam jasa layanan keamanan.
                                Berpengalaman, berkeahlian, berkepribadian baik dan loyal kepada profesinya.
                            </p>
                        </div>

                        {/* Responsive Columns for Features */}
                        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                            {/* First Column */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaTshirt className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Atribut Kepegawaian</h2>
                                        <p className="text-sm text-gray-300">Berseragam, ID Card, Kelengkapan Safety</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ClipboardCheck className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Prosedur Standar Operasional</h2>
                                        <p className="text-sm text-gray-300">Visibilitas, Kerapian, Kepatuhan, Loyalitas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Trophy className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Reward & Punishment</h2>
                                        <p className="text-sm text-gray-300">Budaya kerja kompetitif dan sehat</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <LightbulbIcon className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Teknologi</h2>
                                        <p className="text-sm text-gray-300">Dukungan teknologi untuk operasional</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Binoculars className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Kontrol dan Pengawasan</h2>
                                        <p className="text-sm text-gray-300">Pengawas di setiap group</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MonitorSmartphone className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Administrasi Kepegawaian</h2>
                                        <p className="text-sm text-gray-300">Rekrutmen, Laporan, Asuransi, Penggajian</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Award className="w-8 h-8 flex-shrink-0 text-white" />
                                    <div>
                                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Standar Nasional</h2>
                                        <p className="text-sm text-gray-300">Sesuai Undang-undang ketenagakerjaan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}