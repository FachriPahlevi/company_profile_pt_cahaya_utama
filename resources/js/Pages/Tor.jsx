import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import About from "@/Components/tor/About";
import Documentation from "@/Components/tor/Documentation";
import Footer from "@/Components/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Service from "@/Components/tor/Service";
import Meaning from "@/Components/tor/Meaning";
import Standard from "@/Components/tor/Standard";

export default function Tor() {
    return (
        <MainLayout>
            <Helmet>
                <title>
                    Trust Our Resource (TOR) - Solusi Alih Daya Profesional |
                    PT. Cahaya Utama
                </title>
                <meta
                    name="description"
                    content="Trust Our Resource (TOR) adalah bagian dari PT. Cahaya Utama yang menyediakan alih daya jasa dan pekerjaan lainnya untuk perusahaan dengan lingkup tugas menyeluruh dan terpercaya."
                />
                <meta
                    name="keywords"
                    content="alih daya, outsourcing Indonesia, jasa profesional, PT Cahaya Utama, TOR Cahaya Utama, Trust Our Resource"
                />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/tor"
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Trust Our Resource (TOR) - Solusi Alih Daya Profesional"
                />
                <meta
                    property="og:description"
                    content="TOR dari PT. Cahaya Utama menyediakan tenaga profesional untuk berbagai kebutuhan kerja perusahaan dengan kualitas terbaik."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/tor/HeroTorV1.webp"
                />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/tor"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Trust Our Resource (TOR) - PT. Cahaya Utama"
                />
                <meta
                    name="twitter:description"
                    content="Solusi alih daya terpercaya untuk berbagai kebutuhan kerja profesional perusahaan Anda."
                />
                <meta
                    name="twitter:image"
                    content="https://www.cahayautamapt.com/img/tor/HeroTorV1.webp"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "PT. Cahaya Utama",
                            "url": "https://www.cahayautamapt.com",
                            "logo": "https://www.cahayautamapt.com/img/cahaya_utama_logo.png",
                            "sameAs": [
                                "https://www.linkedin.com/company/cahayautama",
                                "https://www.facebook.com/cahayautamapt"
                            ]
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section
                className="relative w-full h-screen bg-black"
                aria-label="Hero TOR"
            >
                <picture>
                    <source
                        srcSet="/img/tor/HeroTorV1.webp"
                        type="image/webp"
                    />
                    <img
                        src="/img/tor/HeroTorV1.png"
                        alt="Trust Our Resource PT Cahaya Utama"
                        className="absolute inset-0 object-cover w-full h-full"
                        loading="eager"
                        fetchPriority="high"
                        width="1920"
                        height="1080"
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
                        <nav className="text-sm md:text-base text-gray-300 mb-1">
                            <span>Home</span> / <span>Jasa</span> /{" "}
                            <strong className="text-white">
                                Trust our Resource
                            </strong>
                        </nav>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Trust Our Resource (TOR)
                        </h1>
                        <p className="text-sm md:text-lg mb-6 leading-relaxed text-gray-200 text-justify">
                            TOR atau Trust Our Resources adalah bagian dari PT.
                            Cahaya Utama yang menyediakan alih daya jasa dan
                            pekerjaan lainnya untuk perusahaan yang membutuhkan
                            dengan lingkup tugas yang menyeluruh.
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
            </section>

            {/* Content Sections */}
            <About />
            <Documentation />
            <Standard />
            <Meaning />
            <Footer />
        </MainLayout>
    );
}
