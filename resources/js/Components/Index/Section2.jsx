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
            <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-900"
                style={{
                    backgroundImage: "url('/img/bg-3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            />
            
            <div className="relative container mx-auto h-screen flex flex-col px-4 lg:px-8 py-12">
                <div className="flex-1 flex items-center py-8 md:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                        <motion.div 
                            className="w-full lg:w-1/2"
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="flex flex-row items-center gap-4 sm:gap-8"> 
                                <motion.img 
                                    src="/img/cu-uniform.png"
                                    alt="Uniform"
                                    className="w-20 sm:w-32 lg:w-40 h-auto"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="flex flex-col gap-1 sm:gap-2 text-left"> 
                                    <motion.p 
                                        className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-medium" 
                                        variants={fadeInUp}
                                    >
                                        untuk ...
                                    </motion.p>
                                    <motion.h1 
                                        className="text-3xl sm:text-4xl lg:text-6   xl font-bold text-white leading-tight" 
                                        variants={fadeInUp}
                                    >
                                        Dunia Industri
                                    </motion.h1>
                                    <motion.h2 
                                        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
                                        variants={fadeInUp}
                                    >
                                        & Sektor Usaha
                                    </motion.h2>
                                    <motion.p 
                                        className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-medium"
                                        variants={fadeInUp}
                                    >
                                        di Tanah Air
                                    </motion.p>
                                    <motion.div 
                                        className="mt-2 sm:mt-4" 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button 
                                            className="bg-black/70 text-white px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm flex items-center justify-center gap-2" 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-xs sm:text-sm">Hotline 031 8481201</span>
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>


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

                <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black/50 via-black/70 to-black/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4"
                       style={{
                        backgroundImage: "url('/img/people/devider-2.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}>
                        <div className="grid grid-cols-4 lg:flex lg:flex-row justify-between lg:justify-center items-center py-4 gap-2 lg:gap-24 mb-4">
                            <motion.div 
                                className="flex flex-col items-center lg:flex-row gap-2 text-white cursor-pointer text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaCog className="text-2xl sm:text-3xl lg:text-4xl" />
                                <div className="text-center lg:text-left">
                                    <p className="text-xs lg:text-lg font-medium">Manufaktur</p>
                                    <p className="text-xs text-gray-300 hidden lg:block">Industri Proses dan Pabrik</p>
                                </div>
                            </motion.div>
            
                            <motion.div 
                                className="flex flex-col items-center lg:flex-row gap-2 text-white cursor-pointer text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaFlag className="text-2xl sm:text-3xl lg:text-4xl" />
                                <div className="text-center lg:text-left">
                                    <p className="text-xs lg:text-lg font-medium">BUMN</p>
                                    <p className="text-xs text-gray-300 hidden lg:block">Badan Usaha Milik Negara</p>
                                </div>
                            </motion.div>
            
                            <motion.div 
                                className="flex flex-col items-center lg:flex-row gap-2 text-white cursor-pointer text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaCube className="text-2xl sm:text-3xl lg:text-4xl" />
                                <div className="text-center lg:text-left">
                                    <p className="text-xs lg:text-lg font-medium">Bank</p>
                                    <p className="text-xs text-gray-300 hidden lg:block">Pelaku Usaha Jasa Keuangan</p>
                                </div>
                            </motion.div>
            
                            <motion.div 
                                className="text-white cursor-pointer text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-xs lg:text-lg font-bold">dan</p>
                                <p className="text-xs lg:text-lg font-bold">lain</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;