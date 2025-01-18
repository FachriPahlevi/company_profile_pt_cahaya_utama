import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const Section1 = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const staggerChildren = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1
            }
        }
    };

    const popUp = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { 
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 12
            }
        }
    };

    const slideInFromRight = {
        initial: { x: 100, opacity: 0 },
        animate: { 
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseAnimation = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div 
            className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
            style={{
                backgroundImage: "url('/img/school-8955552-scaled.jpg')"
            }}
        >
            <motion.div 
                className="absolute inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-8 md:space-y-12 px-0 sm:px-4 lg:px-12"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div className="text-center lg:text-left">
                            <motion.h1 
                                className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300"
                                variants={fadeInUp}
                            >
                                lebih dari
                                <motion.div 
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white my-4"
                                    variants={pulseAnimation}
                                    animate="animate"
                                >
                                    92+ ribu
                                </motion.div>
                                tenaga kerja telah
                                <br className="hidden sm:block" />
                                kami tempatkan ...
                            </motion.h1>
                        </motion.div>
                        
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8"
                            variants={staggerChildren}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { img: "/img/service/logo-son-security-h.png", title: "Security", desc: "Service Provider" },
                                { img: "/img/service/logo-brilliant-clean.png", title: "Cleaning", desc: "Service Provider" },
                                { img: "/img/service/logo-only-tor-trans.png", title: "Labor", desc: "Service Provider" }
                            ].map((service, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center space-y-2 p-4"
                                    variants={popUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div 
                                        className="flex justify-center items-center h-12"
                                        animate="animate"
                                    >
                                        <img src='/img/service/bullet-01.png' alt={service.title} className="h-4 mr-2" />
                                        <img src={service.img} alt={service.title} className="h-8" />
                                    </motion.div>
                                    <h3 className="text-white font-bold text-lg sm:text-xl">{service.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div 
                        className="w-full lg:w-1/2 mt-8 lg:mt-0"
                        variants={slideInFromRight}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div 
                            className="relative w-full"
                            variants={floatingAnimation}
                            animate="animate"
                        >
                            <img 
                                src="/img/networkss.png" 
                                alt="Network" 
                                className="w-full max-w-2xl mx-auto"
                            />
                            <AnimatePresence>
                                {[
                                    { src: "img/people/hr-1.png", position: "right-[30%]", zIndex: 20 },
                                    { src: "img/people/hr-4.png", position: "right-[60%]", zIndex: 10 },
                                    { src: "img/people/hr-2.png", position: "right-[45%]", zIndex: 10 },
                                    { src: "img/people/hr-3.png", position: "right-[20%]", zIndex: 10 }
                                ].map((person, index) => (
                                    <motion.img 
                                        key={index}
                                        src={person.src}
                                        alt="Person"
                                        className={`absolute bottom-0 h-32 sm:h-40 md:h-48 object-contain ${person.position}`}
                                        style={{ zIndex: person.zIndex }}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ 
                                            y: 0, 
                                            opacity: 1,
                                            transition: {
                                                delay: index * 0.2,
                                                duration: 0.8,
                                                ease: "easeOut"
                                            }
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div 
                            className="flex justify-center items-center mt-8"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >                                
                            <motion.div 
                                className="font-bold text-sm sm:text-base bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl z-20 flex items-center backdrop-blur-sm bg-opacity-90"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Hotline 031 8481201
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Fixed Contact Button */}
            <motion.div 
                className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 flex items-center space-x-2 sm:space-x-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.button 
                    className="bg-green-600 text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl rounded-full hover:bg-green-700 transition-colors duration-200"
                    whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    variants={pulseAnimation}
                    animate="animate"
                >
                    <FaPhoneAlt className="text-lg sm:text-xl" />
                </motion.button>

                <motion.div 
                    className="bg-white text-black rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-md text-sm sm:text-base"
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                    }}
                >
                    <p className="font-semibold">Bantuan? Chat Kami!</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Section1;