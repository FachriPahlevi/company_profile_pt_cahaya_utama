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
                {/* Basic Meta */}
                <title>
                    Brilliant Cleaning - Tenaga Kebersihan Profesional | PT.
                    Cahaya Utama
                </title>
                <meta
                    name="description"
                    content="Brilliant Cleaning dari PT. Cahaya Utama adalah layanan kebersihan profesional yang kompeten, terlatih, dan berpengalaman. Menjamin kebersihan menyeluruh, efisien, dan terpercaya untuk lingkungan kerja yang sehat dan produktif."
                />
                <meta
                    name="keywords"
                    content="Brilliant Cleaning, PT Cahaya Utama, jasa kebersihan profesional, tenaga kebersihan terlatih, layanan cleaning service kantor, outsourcing kebersihan"
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/brilliant-cleaning"
                />
                <meta name="theme-color" content="#0A0A0A" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Brilliant Cleaning - Tenaga Kebersihan Profesional"
                />
                <meta
                    property="og:description"
                    content="Brilliant Cleaning dari PT Cahaya Utama menawarkan tenaga kebersihan yang terlatih dan terpercaya. Layanan efisien untuk kebersihan lingkungan kerja Anda."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/brilliant/HeroBrilliantV1.webp"
                />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/brilliant-cleaning"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="PT. Cahaya Utama" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Brilliant Cleaning - Tenaga Kebersihan Profesional"
                />
                <meta
                    name="twitter:description"
                    content="Layanan kebersihan profesional dari PT Cahaya Utama untuk lingkungan kerja yang sehat dan efisien."
                />
                <meta
                    name="twitter:image"
                    content="https://www.cahayautamapt.com/img/brilliant/HeroBrilliantV1.webp"
                />
                <meta name="twitter:site" content="@cahayautamapt" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Brilliant Cleaning",
            "provider": {
                "@type": "Organization",
                "name": "PT. Cahaya Utama",
                "url": "https://www.cahayautamapt.com",
                "logo": "https://www.cahayautamapt.com/img/cahaya_utama_logo.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+62-318-481-201",
                    "contactType": "Customer Service",
                    "areaServed": "ID"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/cahayautama",
                    "https://www.facebook.com/cahayautamapt"
                ]
            },
            "description": "Brilliant Cleaning adalah layanan kebersihan profesional dari PT Cahaya Utama. Menyediakan tenaga kerja kebersihan yang kompeten dan terpercaya untuk lingkungan kerja yang lebih bersih dan produktif.",
            "areaServed": {
                "@type": "Country",
                "name": "Indonesia"
            }
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
                        loading="eager"
                        fetchpriority="high"
                        width={1920}
                        height={1080}
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
                        <p className="text-sm md:text-lg mb-6 leading-relaxed text-gray-200 text-justify">
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
