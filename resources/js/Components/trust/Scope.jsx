import React from "react";
import { motion } from "framer-motion"; // Optional: untuk animasi
import { FaBroom, FaSprayCan, FaTruck } from "react-icons/fa";
import { GiVacuumCleaner, GiMechanicGarage } from "react-icons/gi";
import { RiCustomerService2Fill, RiSpeakFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdAdminPanelSettings, MdFactory } from "react-icons/md";

export default function Scope() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-[#343332] text-white py-8 md:py-12 px-4 md:px-8">
            {/* Header Section */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
                    {/* Logo */}
                    <div className="hidden md:block md:col-span-1 text-center">
                        <motion.img 
                            src="img/logo/Ex03.png" 
                            alt="Logo" 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 md:w-full mx-auto" 
                        />
                    </div>

                    {/* Title and Description */}
                    <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-bold"
                        >
                            Lingkup Pekerjaan <br /> Cleaning Service
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300"
                        >
                            Pekerjaan pembersihan, pemeliharaan ruangan kerja, area kerja, peralatan kerja serta perabot 
                            di wilayah operasional perusahaan baik dalam maupun luar ruang, serta pengelolaan sampah yang 
                            dilakukan secara berkala selama dan sesudah jam operasional perusahaan.
                        </motion.p>
                    </div>

                    {/* Front Liner Section */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="md:col-span-3 space-y-4 md:space-y-6"
                    >
                        {/* Front Liner */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                        >
                            <RiCustomerService2Fill className="text-4xl md:text-5xl text-white" />
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-semibold">Front Liner</h3>
                                <p className="text-sm md:text-base text-gray-400">
                                    Front liner, Receptionist, Customer Service, Operator, Desk Call, dll.
                                </p>
                            </div>
                        </motion.div>

                        {/* Sales / Marketing */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                        >
                            <RiSpeakFill className="text-4xl md:text-5xl text-white" />
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-semibold">Sales / Marketing</h3>
                                <p className="text-sm md:text-base text-gray-400">
                                    Digital Marketer, Offline Marketer, Motoris, Canvasing, dll.
                                </p>
                            </div>
                        </motion.div>

                        {/* Serviceman */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                        >
                            <GrUserManager className="text-4xl md:text-5xl text-white" />
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-semibold">Serviceman</h3>
                                <p className="text-sm md:text-base text-gray-400">
                                    Office Boy, Room Boy, Housekeeping, Helper, Waiters, dll.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6 md:my-8 container mx-auto"></div>

            {/* Cleaning Services Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4"
            >
                {/* Distribution */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                >
                    <FaTruck className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Distribution</h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Driver, Courier, Porter, Runner, dll.
                        </p>
                    </div>
                </motion.div>

                {/* Technician */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                >
                    <GiMechanicGarage className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Technician</h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Operator Mesin, Listrik, Mekanikal, Otomotif, Agriculture, dll.
                        </p>
                    </div>
                </motion.div>

                {/* Production */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                >
                    <MdFactory className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Production</h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Buruh Pabrik, Packing, dll.
                        </p>
                    </div>
                </motion.div>

                {/* Administrative */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                >
                    <MdAdminPanelSettings className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Administrative</h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Finance, Warehouse, Purchasing, dll.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}