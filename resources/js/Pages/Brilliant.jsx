import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Scope from "@/Components/cleaningservice/Scope";
import Footer from "@/Components/Footer";
import Office from "@/Components/Office";
import Documentation from "@/Components/cleaningservice/Documentation";
import Equipment from "@/Components/cleaningservice/Equipment";
import MainLayout from "@/Layouts/MainLayout";
import { Helmet } from "react-helmet";

export default function SonSecurity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsData = [
    { value: 31600, label: "Tenaga Kerja Distribusi" },
    { value: 37, label: "Klien Perusahaan" },
    { value: 8, label: "Bidang dan Keahlian" }
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
      <Helmet>
        <title>Brilliant Cleaning Service - Layanan Kebersihan Profesional PT. Cahaya Utama</title>
        <meta name="description" content="Brilliant Cleaning Service dari PT. Cahaya Utama menawarkan layanan kebersihan terbaik untuk kantor, rumah, dan fasilitas komersial. Kami memastikan kebersihan menyeluruh, kualitas tinggi, dan hasil memuaskan dengan tenaga kerja terlatih dan berpengalaman." />
        <meta name="keywords" content="Brilliant Cleaning Service, layanan kebersihan profesional, jasa kebersihan kantor, kebersihan rumah, kebersihan fasilitas komersial, PT. Cahaya Utama, kebersihan berkualitas, jasa kebersihan terlatih" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Brilliant Cleaning Service - Layanan Kebersihan Profesional PT. Cahaya Utama" />
        <meta property="og:description" content="Temukan layanan kebersihan profesional terbaik di Brilliant Cleaning Service PT. Cahaya Utama. Kami melayani kebersihan untuk kantor, rumah, dan berbagai fasilitas komersial dengan hasil yang tak tertandingi." />
        <meta property="og:url" content="https://www.cahayautamapt.com/brilliant-cleaning" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(img/background/As.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 pt-32">
          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* left column - Security guard image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Header logo */}
              <div className="mb-8">
                <img
                  src="img/service/logo-brilliant-clean.png"
                  alt="Son Security Logo"
                  className="h-16 object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="img/brilliant/cleaning-crop-1.png"
                  alt="Security Personnel"
                  className="max-h-[480px] w-auto max-w-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* right column - Logo and content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white space-y-6"
            >
              {/* Text content */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
                  <span className="text-3xl lg:text-4xl font-bold leading-tight">Hal Positif </span>berawal dari
                  <br />
                  <span className="text-3xl lg:text-4xl font-medium leading-tight">Aktifitas Lingkungan</span>
                  <br />
                  <span className="text-3xl lg:text-4xl font-bold leading-tight">Sehat, Nyaman & Higienis...</span>
                </h1>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full flex items-center space-x-3 transition duration-300"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1ej2clopKgz-ml_WG5Il34eDxEOz2LLMD/view?usp=drivesdk",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="text-lg">Download e-Paper</span>
                  </button>
                </motion.div>

                <p className="text-xl mt-8">
                  <span className="font-bold">Brilliant Clean</span>, layanan penyedia alih daya jasa kebersihan
                  <br />
                  (Outsourcing for Cleaning Service) dari Cahaya Utama, untuk Anda...
                </p>
              </div>

              {/* Animated Stats Grid */}
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-8 mt-16"
              >
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center text-white"
                  >
                    <h2 className="text-4xl font-bold">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2}
                          separator="."
                        />
                      ) : (
                        0
                      )}
                    </h2>
                    <p className="text-gray-200 text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Scope />
      <Documentation />
      <Equipment />
      <Office />
      <Footer />
    </MainLayout>
  );
}