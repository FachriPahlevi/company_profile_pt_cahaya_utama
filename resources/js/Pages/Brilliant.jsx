import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import About from "@/Components/brilliant/About";
import Documentation from "@/Components/brilliant/Documentation";
import Footer from "@/Components/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Service from "@/Components/brilliant/Service";
import Meaning from "@/Components/brilliant/Meaning";

export default function Brilliant() {
    return (
        <MainLayout>
            <Helmet>
                <title>
                    Brilliant Cleaning - Jasa Keamanan Profesional | PT. Cahaya
                    Utama
                </title>
                <meta
                    name="description"
                    content="Menyediakan tenaga kerja profesional di bidang keamanan yang jujur, ulet, tangguh, dan disiplin. Menjamin perlindungan optimal untuk area kerja melalui layanan keamanan yang responsif dan terpercaya."
                />
                <meta
                    name="keywords"
                    content="jasa keamanan, outsourcing security, satpam profesional, tenaga keamanan terpercaya, PT Cahaya Utama, Brilliant Cleaning"
                />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/brilliant"
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Brilliant Cleaning - Jasa Keamanan Profesional"
                />
                <meta
                    property="og:description"
                    content="Tenaga kerja profesional di bidang keamanan yang jujur, ulet, tangguh, dan disiplin. Keamanan optimal untuk area kerja Anda."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/brilliant/HeroBrilliantV1.webp"
                />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/brilliant"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Brilliant Cleaning - Jasa Keamanan Profesional"
                />
                <meta
                    name="twitter:description"
                    content="Tenaga keamanan yang jujur, tangguh dan terpercaya."
                />
                <meta
                    name="twitter:image"
                    content="https://www.cahayautamapt.com/img/brilliant/Security-008.jpg"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "PT. Cahaya Utama",
                            "url": "https://www.cahayautamapt.com",
                            "logo": "https://www.cahayautamapt.com/img/logo.png",
                            "sameAs": [
                                "https://www.linkedin.com/company/cahayautama",
                                "https://www.facebook.com/cahayautamapt"
                            ]
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div className="relative w-full h-screen bg-black">
                <picture>
                    <source
                        srcSet="/img/brilliant/HeroBrilliantV1.webp"
                        type="image/webp"
                    />
                    <img
                        src="/img/brilliant/HeroBrilliantV1.png"
                        alt="Petugas Keamanan Brilliant Cleaning"
                        className="absolute inset-0 object-cover w-full h-full"
                        loading="lazy"
                    />
                </picture>

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex items-end justify-start h-full px-4 pb-10 md:px-20 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white max-w-2xl"
                    >
                        <p className="text-sm md:text-base text-gray-300 mb-1">
                            Home / Jasa /{" "}
                            <span className="text-white">
                                Brilliant Cleaning
                            </span>
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Brilliant Cleaning
                        </h1>
                        <p className="text-sm md:text-lg mb-6 leading-relaxed text-gray-200">
                            Tenaga layanan kebersihan yang kompeten & terlatih
                            serta berpengalaman pada profesinya. Memberikan
                            jaminan kebersihan menyeluruh, efisien, dan
                            terpercaya untuk lingkungan kerja yang lebih sehat
                            dan produktif.
                        </p>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1ecAXuOqjcYxCHskuCZp4Vjaplr9lam4t/view?usp=drivesdk",
                                    "_blank"
                                )
                            }
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-md text-white flex items-center space-x-2 text-sm md:text-base"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            <span>Download e-Paper</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            <About />
            <Documentation />
            <Service />
            <Meaning />
            <Footer />
        </MainLayout>
    );
}
