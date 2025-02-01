import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section1Smartphone = () => {
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
            className="relative min-h-screen max--screen bg-cover bg-center bg-fixed overflow-hidden"
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
            
            <div className="relative mx-auto px-4 py-6 mt-20">
                <div className="flex flex-col items-center gap-4">
                    {/* Top Content */}
                    <motion.div 
                        className="w-full text-center mb-4"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1 
                            className="text-xl font-light text-gray-300 leading-tight"
                        >
                            lebih dari
                            <motion.div 
                                className="text-3xl font-bold text-white my-1"
                                variants={pulseAnimation}
                                animate="animate"
                            >
                                92+ ribu
                            </motion.div>
                            tenaga kerja telah kami tempatkan
                        </motion.h1>
                    </motion.div>

                    {/* Center Content */}
                    <motion.div 
                        className="w-full relative"
                        variants={slideInFromRight}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div className="relative w-full">
                            <img 
                                src="/img/networkss.png" 
                                alt="Network" 
                                className="w-full h-auto"
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
                                        className={`absolute bottom-0 h-16 object-contain ${person.position}`}
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
                            className="absolute z-20 left-1/2 transform -translate-x-1/2"
                            style={{ 
                                bottom: '50px', // Atur jarak dari bawah
                                transition: 'transform 0.3s ease' // Tambahkan transisi smooth
                            }}
                        >
                            <div className="bg-black px-3 py-1 rounded-full">
                                <span className="text-white font-bold text-xs">
                                    Hotline 031 8481201
                                </span>
                            </div>
                        </motion.div>
                        
                        <img 
                            src="/img/people/devider-2.png" 
                            alt="divider" 
                            className="w-full h-auto relative z-10"
                        />
                    </motion.div>

                    {/* Bottom Content */}
                    <motion.div 
                        className="flex justify-around w-full mt-4"
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
                                className="text-center w-1/3"
                                variants={popUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div className="flex justify-center items-center mb-1">
                                    <img src='/img/service/bullet-01.png' alt="bullet" className="h-2 mr-1" />
                                    <img src={service.img} alt={service.title} className="h-4" />
                                </motion.div>
                                <h3 className="text-white font-bold text-xs">{service.title}</h3>
                                <p className="text-gray-400 text-xs">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Section1Smartphone;