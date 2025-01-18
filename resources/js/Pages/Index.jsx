import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import MainLayout from "@/Layouts/MainLayout";
import Section1 from "@/Components/Index/Section1";
import Section2 from "@/Components/Index/Section2";

const Home = () => {
    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSection((prev) => (prev === 2 ? 1 : prev + 1));
        }, 7000); // 5000 ms = 5 detik

        return () => clearInterval(timer); // Membersihkan interval saat komponen unmount
    }, []);

    return (
        <MainLayout>
            <AnimatePresence>
                {currentSection === 1 && (
                    <motion.div
                        key="section1"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Section1 />
                    </motion.div>
                )}
                {currentSection === 2 && (
                    <motion.div
                        key="section2"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Section2 />
                    </motion.div>
                )}
            </AnimatePresence>
        </MainLayout>
    );
};

export default Home;
