// file: AboutPage.jsx
import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import About from "@/Components/about/About";
import Documentation from "@/Components/about/Documentation";
import Service from "@/Components/about/Service";
import Meaning from "@/Components/about/Meaning";
import Footer from "@/Components/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Commitment from "@/Components/about/Commitment";
import Vision from "@/Components/about/Vision";

export default function AboutPage() {
    return (
        <MainLayout>
            <Helmet>
                <title>Tentang Kami - PT Cahaya Utama</title>
                <meta
                    name="description"
                    content="PT Cahaya Utama adalah perusahaan swasta nasional yang bergerak di bidang jasa outsourcing SDM sejak 2004."
                />
                <meta
                    name="keywords"
                    content="tentang kami, PT Cahaya Utama, jasa outsourcing, alih daya SDM, perusahaan outsourcing Indonesia"
                />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/about"
                />
                <meta name="robots" content="index, follow" />

                {/* Favicon */}
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/img/favicon/favicon.svg"
                />
                <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/favicon/apple-touch-icon.png"
                />
                <link rel="manifest" href="/img/favicon/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="PT Cahaya Utama"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Tentang Kami - PT Cahaya Utama"
                />
                <meta
                    property="og:description"
                    content="Perusahaan swasta nasional yang berfokus pada penyediaan tenaga kerja profesional untuk berbagai sektor."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/about/HeroAboutV1.webp"
                />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/about"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Tentang Kami - PT Cahaya Utama"
                />
                <meta
                    name="twitter:description"
                    content="PT Cahaya Utama menyediakan layanan tenaga kerja outsourcing yang andal dan profesional sejak tahun 2004."
                />
                <meta
                    name="twitter:image"
                    content="https://www.cahayautamapt.com/img/about/HeroAboutV1.webp"
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
            <div className="relative w-full h-screen bg-black">
                <picture>
                    <source
                        srcSet="/img/about/HeroAboutV1.webp"
                        type="image/webp"
                    />
                    <img
                        src="/img/about/HeroAboutV1.png"
                        alt="Karyawan PT Cahaya Utama"
                        className="absolute inset-0 object-cover w-full h-full"
                        width="1920"
                        loading="eager"
                        fetchpriority="high"
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
                            Home /{" "}
                            <span className="text-white">Tentang Kami</span>
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Tentang Kami
                        </h1>
                        <p className="text-sm md:text-lg mb-6 leading-relaxed text-gray-200">
                            PT Cahaya Utama adalah salah satu perusahaan swasta
                            nasional yang didirikan pada tahun 2004. Perusahaan
                            ini berbentuk perseroan terbatas yang bergerak di
                            bidang jasa outsourcing atau alih daya manajemen
                            sumber daya manusia.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Content Sections */}
            <About />
            <Commitment />
            <Vision />
            <Meaning />
            <Footer />
        </MainLayout>
    );
}
