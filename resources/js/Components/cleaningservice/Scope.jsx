import React from "react";
import { motion } from "framer-motion";
import { FaBroom, FaSprayCan } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";

export default function Scope() {
    const servicesData = [
        {
            Icon: FaSprayCan,
            title: "Daily Cleaning",
            description: "Pekerjaan kebersihan rutin harian dalam jam operasional kantor."
        },
        {
            Icon: FaBroom,
            title: "Weekly Cleaning",
            description: "Pekerjaan kebersihan rutin mingguan dalam jam operasional kantor."
        },
        {
            Icon: GiVacuumCleaner,
            title: "General Cleaning",
            description: "Pekerjaan kebersihan menyeluruh pada obyek kerja perusahaan."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <div className="bg-gray-800 text-white py-12 px-4 md:px-8">
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-12 mb-12"
            >
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 justify-center">
                    <FaBroom className="text-4xl md:text-6xl text-white" />
                    <h1 className="text-yellow-400 text-3xl md:text-6xl font-bold text-center md:text-left">
                        Lingkup Pekerjaan <br /> Cleaning Service
                    </h1>
                </div>
                <div>
                    <p className="text-base md:text-xl text-gray-300 text-center md:text-left">
                        Pekerjaan pembersihan, pemeliharaan ruangan kerja, area kerja, peralatan kerja serta perabot 
                        di wilayah operasional perusahaan baik dalam maupun luar ruang, serta pengelolaan sampah yang 
                        dilakukan secara berkala selama dan sesudah jam operasional perusahaan.
                    </p>
                </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Cleaning Services Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-32"
            >
                {servicesData.map((service, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-700"
                    >
                        <service.Icon className="text-4xl md:text-5xl text-yellow-400 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm md:text-base text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}