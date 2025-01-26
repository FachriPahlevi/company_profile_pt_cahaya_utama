import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/Layouts/MainLayout";
import Section1 from "@/Components/Index/Section1";
import Section2 from "@/Components/Index/Section2";
import Section1Smartphone from "@/Components/Index/section1smarthphone";

const Home = () => {
    const [currentSection, setCurrentSection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Atur batas lebar untuk smartphone
        };

        handleResize(); // Panggil fungsi saat komponen pertama kali dimuat
        window.addEventListener("resize", handleResize); // Tambahkan event listener untuk resize

        const timer = setInterval(() => {
            setCurrentSection((prev) => (prev === 2 ? 1 : prev + 1));
        }, 7000); // 7000 ms = 7 detik

        return () => {
            clearInterval(timer); // Membersihkan interval saat komponen unmount
            window.removeEventListener("resize", handleResize); // Hapus event listener saat komponen unmount
        };
    }, []);

    return (
        <MainLayout>
            <div className="relative h-full"> {/* Tambahkan relative untuk membungkus animasi */}
                <AnimatePresence>
                    {currentSection === 1 && (
                        <motion.div
                            key="section1"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Tambahkan easing
                            className="absolute inset-0" // Mengatur posisi absolute
                        >
                            {isMobile ? <Section1Smartphone /> : <Section1 />}
                        </motion.div>
                    )}
                    {currentSection === 2 && (
                        <motion.div
                            key="section2"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Tambahkan easing
                            className="absolute inset-0" // Mengatur posisi absolute
                        >
                            <Section2 />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MainLayout>
    );
};

export default Home;