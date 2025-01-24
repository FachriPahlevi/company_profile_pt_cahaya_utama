import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import Service from "@/Components/sonsecurity/Service";
import Documentation from "@/Components/sonsecurity/Documentation";
import Standard from "@/Components/sonsecurity/Standard";
import Office from "@/Components/Office";
import Footer from "@/Components/Footer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SonSecurity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsData = [
    { 
      value: 31600, 
      label: "Tenaga Kerja",
      prefix: "",
      suffix: ""
    },
    { 
      value: 37, 
      label: "Klien",
      prefix: "",
      suffix: ""
    },
    { 
      value: 8, 
      label: "Bidang",
      prefix: "",
      suffix: ""
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
    <MainLayout>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background dengan overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(img/background/securityheader01ww.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Konten utama */}
        <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 lg:py-0 h-full md:h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Kolom kiri - Logo dan Gambar */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center pt-64"
            >
              <img
                src="img/sonsecurity/logo-son-security-h.png"
                alt="Son Security Logo"
                className="h-16 mb-8 object-contain"
              />
              <img
                src="img/sonsecurity/secutiry-crop.png"
                alt="Security Personnel"
                className="max-h-[480px] w-auto max-w-full object-cover object-top"
              />
            </motion.div>

            {/* Kolom kanan - Konten */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-center md:text-left"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-6">
                Pastikan Lingkungan Anda
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold block">
                  Aman, Nyaman, dan Terjaga
                </span>
                <span className="text-2xl md:text-4xl block">Setiap Saat ...</span>
              </h1>

              <div className="flex justify-center md:justify-start mb-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center space-x-3 transition duration-300"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-sm md:text-lg">Download e-Paper</span>
                </motion.button>
              </div>

              <p className="text-base md:text-xl mb-8">
                <span className="font-bold">Son Security</span>, layanan penyedia alih daya jasa keamanan
                <br />
                (Outsourcing for Security) dari Cahaya Utama, untuk Anda...
              </p>

              {/* Statistik dengan Animasi */}
              <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-4 text-center"
              >
                {statsData.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="text-white"
                  >
                    <h2 className="text-2xl md:text-4xl font-bold">
                      {inView ? (
                        <CountUp 
                          start={0}
                          end={stat.value}
                          duration={2}
                          separator="."
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      ) : (
                        0
                      )}
                    </h2>
                    <p className="text-gray-200 text-xs md:text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Komponen tambahan */}
      <Service />
      <Documentation />
      <Standard />
      <Office />
      <Footer />
    </MainLayout>
  );
}