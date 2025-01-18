import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCog, FaFlag, FaCube } from "react-icons/fa";

const Section = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background with gradient overlay */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-900"
                style={{
                    backgroundImage: "url('/img/bg-3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            />
            
            <div className="relative container mx-auto h-screen flex flex-col px-4 lg:px-8">
                {/* Main Content Section */}
                <div className="flex-1 flex items-center py-8 md:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                        {/* Left Content */}
                        <motion.div 
                            className="w-full lg:w-1/2"
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-8">
                                <motion.img 
                                    src="/img/cu-uniform.png"
                                    alt="Uniform"
                                    className="w-32 sm:w-40 lg:w-48 h-auto"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="flex flex-col gap-2 text-center sm:text-left">
                                    <motion.p 
                                        className="text-xl sm:text-2xl text-gray-300 font-light"
                                        variants={fadeInUp}
                                    >
                                        untuk ...
                                    </motion.p>
                                    <motion.h1 
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                                        variants={fadeInUp}
                                    >
                                        Dunia Industri
                                    </motion.h1>
                                    <motion.h2 
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                                        variants={fadeInUp}
                                    >
                                        & Sektor Usaha
                                    </motion.h2>
                                    <motion.p 
                                        className="text-xl sm:text-2xl text-gray-300 font-light"
                                        variants={fadeInUp}
                                    >
                                        di Tanah Air
                                    </motion.p>
                                    <motion.div 
                                        className="mt-4 sm:mt-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button 
                                            className="bg-black/70 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full backdrop-blur-sm flex items-center justify-center gap-2 mx-auto sm:mx-0"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-sm sm:text-base">Hotline 031 8481201</span>
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content - Map */}
                        <motion.div 
                            className="w-full lg:w-1/2 relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div className="relative max-w-xl mx-auto lg:mx-0">
                                <motion.img 
                                    src="/img/indonesia-map.png"
                                    alt="Indonesia Map"
                                    className="w-full h-auto opacity-80"
                                    animate={{ 
                                        y: [-5, 5, -5],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                {/* Building icons positioned absolutely over map */}
                                <div className="absolute inset-0">
                                    <img src="/img/building/building-1.png" alt="Building" className="w-4 sm:w-6 absolute top-1/4 left-1/4" />
                                    <img src="/img/building/building-2.png" alt="Building" className="w-4 sm:w-6 absolute top-1/3 right-1/3" />
                                    <img src="/img/building/building-3.png" alt="Building" className="w-4 sm:w-6 absolute bottom-1/3 left-1/3" />
                                    <img src="/img/building/building-4.png" alt="Building" className="w-4 sm:w-6 absolute bottom-1/4 right-1/4" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="py-4 sm:py-6 bg-gradient-to-r from-transparent via-black/40 to-transparent backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                        {/* Chat Button */}
                        <motion.div 
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="bg-green-500 rounded-full p-2 sm:p-3">
                                <FaPhoneAlt className="text-lg sm:text-xl text-white" />
                            </div>
                            <div className="bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                                <p className="font-medium text-sm sm:text-base">Bantuan? Chat kami!</p>
                            </div>
                        </motion.div>

                        {/* Category Items */}
                        <div className="flex items-start gap-4 sm:gap-8 lg:gap-12 overflow-x-auto pb-2 w-full sm:w-auto">
                            <div className="flex flex-col items-center text-white min-w-[100px] sm:min-w-0">
                                <FaCog className="text-xl sm:text-2xl mb-1 sm:mb-2" />
                                <p className="font-medium text-sm sm:text-base">Manufaktur</p>
                                <p className="text-xs text-gray-300 text-center">Industri Proses dan Pabrik</p>
                            </div>
                            <div className="flex flex-col items-center text-white min-w-[100px] sm:min-w-0">
                                <FaFlag className="text-xl sm:text-2xl mb-1 sm:mb-2" />
                                <p className="font-medium text-sm sm:text-base">BUMN</p>
                                <p className="text-xs text-gray-300 text-center">Badan Usaha Milik Negara</p>
                            </div>
                            <div className="flex flex-col items-center text-white min-w-[100px] sm:min-w-0">
                                <FaCube className="text-xl sm:text-2xl mb-1 sm:mb-2" />
                                <p className="font-medium text-sm sm:text-base">Perbankan</p>
                                <p className="text-xs text-gray-300 text-center">Pelaku Usaha Jasa Keuangan</p>
                            </div>
                            <div className="flex flex-col items-center text-white min-w-[80px] sm:min-w-0">
                                <p className="font-bold text-base sm:text-lg">dan</p>
                                <p className="font-bold text-base sm:text-lg">lain-lain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;