import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import Service from "@/Components/sonsecurity/Service";
import Documentation from "@/Components/sonsecurity/Documentation";
import HeroStats from "@/Components/sonsecurity/HeroStats";
import Footer from "@/Components/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Strength from "@/Components/sonsecurity/Strength";
import Standard from "@/Components/sonsecurity/Standard";
import Meaning from "@/Components/sonsecurity/Meaning";

export default function SonSecurity() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PT. Cahaya Utama",
        url: "https://www.cahayautamapt.com",
        logo: "https://www.cahayautamapt.com/img/cahaya_utama_logo.png",
        sameAs: [
            "https://www.linkedin.com/company/cahayautama",
            "https://www.facebook.com/cahayautamapt",
        ],
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Beranda",
                item: "https://www.cahayautamapt.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Jasa",
                item: "https://www.cahayautamapt.com#services",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Son Security",
                item: "https://www.cahayautamapt.com/sonsecurity",
            },
        ],
    };

    return (
        <MainLayout>
            <Helmet>
                <title>
                    Son Security - Jasa Keamanan Profesional | PT. Cahaya Utama
                </title>
                <meta
                    name="description"
                    content="Menyediakan tenaga kerja profesional di bidang keamanan yang jujur, ulet, tangguh, dan disiplin. Menjamin perlindungan optimal untuk area kerja melalui layanan keamanan yang responsif dan terpercaya."
                />
                <meta
                    name="keywords"
                    content="jasa keamanan, outsourcing security, satpam profesional, tenaga keamanan terpercaya, PT Cahaya Utama, Son Security"
                />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/sonsecurity"
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
                    content="Son Security - Jasa Keamanan Profesional"
                />
                <meta
                    property="og:description"
                    content="Tenaga kerja profesional di bidang keamanan yang jujur, ulet, tangguh, dan disiplin. Keamanan optimal untuk area kerja Anda."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/sonsecurity/Security-008.jpg"
                />
                <meta
                    property="og:image:alt"
                    content="Petugas Keamanan Son Security"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/sonsecurity"
                />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Son Security - Jasa Keamanan Profesional"
                />
                <meta
                    name="twitter:description"
                    content="Tenaga keamanan yang jujur, tangguh dan terpercaya."
                />
                <meta
                    name="twitter:image"
                    content="https://www.cahayautamapt.com/img/sonsecurity/Security-008.jpg"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div className="relative w-full h-screen bg-black">
                <img
                    src="/img/sonsecurity/Security-008.jpg"
                    alt="Petugas Keamanan Son Security"
                    className="absolute inset-0 object-cover w-full h-full"
                    loading="eager"
                    fetchpriority="high"
                    width="1920"
                    height="1080"
                />
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
                            <span className="text-white">Son Security</span>
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Son Security
                        </h1>
                        <p className="text-sm md:text-lg mb-6 leading-relaxed text-gray-200 text-justify">
                            Menyediakan tenaga kerja profesional di bidang
                            keamanan yang jujur, ulet, tangguh, dan disiplin.
                            Menjamin perlindungan optimal untuk area kerja
                            melalui layanan keamanan yang responsif dan
                            terpercaya.
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

            <Service />
            <Documentation />
            <HeroStats />
            <Strength />
            <Standard />
            <Meaning />
            <Footer />
        </MainLayout>
    );
}
