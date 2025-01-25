import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

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
            className="relative max-h-screen min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
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
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
                <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
                    {/* Right Content (akan berada di atas pada smartphone) */}
                    <motion.div 
                        className="w-full lg:w-1/2 order-first lg:order-last mt-6 lg:mt-0 relative"
                        variants={slideInFromRight}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div 
                            className="relative w-full"
                            animate="animate"
                        >
                            <img 
                                src="/img/networkss.png" 
                                alt="Network" 
                                className="w-full max-w-full h-auto mx-auto"
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
                                        className={`absolute bottom-0 h-24 sm:h-32 md:h-40 lg:h-48 object-contain ${person.position}`}
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
                            className="absolute w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                        </motion.div>
                        
                        <motion.div 
                            className="absolute z-20 pt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="bg-black px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-full flex items-center space-x-2">
                                <span className="text-white font-bold text-xs xs:text-sm sm:text-lg">
                                    Hotline 031 8481201
                                </span>
                            </div>
                        </motion.div>
                        
                        <img 
                            src="/img/people/devider-2.png" 
                            alt="divider" 
                            className="w-full h-full object-cover relative z-10"
                        />
                    </motion.div>

                    {/* Left Content (akan berada di bawah pada smartphone) */}
                    <motion.div 
                        className="w-full lg:w-1/2 order-last lg:order-first space-y-6 md:space-y-8 px-0 sm:px-2 lg:px-8"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div className="text-center lg:text-left">
                            <motion.div className="flex flex-row md:flex-col items-center justify-center lg:justify-start">
                                <motion.h1 
                                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-tight"
                                    variants={fadeInUp}
                                >
                                    lebih dari
                                    <motion.div 
                                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white my-1 xs:my-2 sm:my-3"
                                        variants={pulseAnimation}
                                        animate="animate"
                                    >
                                        92+ ribu
                                    </motion.div>
                                    tenaga kerja telah kami tempatkan
                                </motion.h1>
                                
                                <motion.div 
                                    className="flex flex-row mt-4 md:mt-8 justify-center lg:justify-start space-x-24"
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
                                            className="text-center space-y-2 p-2 sm:p-3"
                                            variants={popUp}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div 
                                                className="flex justify-center items-center h-8 sm:h-10"
                                                animate="animate"
                                            >
                                                <img src='/img/service/bullet-01.png' alt={service.title} className="h-2.5 sm:h-3 mr-1 sm:mr-2" />
                                                <img src={service.img} alt={service.title} className="h-5 sm:h-12" />
                                            </motion.div>
                                            <h3 className="text-white font-bold text-sm sm:text-base">{service.title}</h3>
                                            <p className="text-gray-400 text-xs">{service.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Section1;