import React, { useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/Layouts/MainLayout";
import Client from "@/Components/Company/Client";
import Cooperation from "@/Components/Cooperation";
import Commitment from "@/Components/Company/Commitment";
import { Helmet } from "react-helmet";
import About from "@/Components/Company/AboutUs";
import Benefit from "@/Components/Company/Benefit";
import CompanyAdvantage from "@/Components/Company/CompanyAdvantage";
import SmartOffice from "@/Components/Company/SmartOffice";
import Experience from "@/Components/Company/Experience";
import Faq from "@/Components/Company/Faq";

const Footer = lazy(() => import("@/Components/Footer")); // lazy load Footer

export default function Company() {
    const serviceList = useMemo(
        () => [
            {
                title: "● SON SECURITY",
                description:
                    "Menyediakan tenaga kerja profesional di bidang keamanan yang jujur, ulet, tangguh, dan disiplin.",
            },
            {
                title: "● BRILLIANT CLEAN",
                description:
                    "Tenaga layanan kebersihan yang kompeten & terlatih serta berpengalaman di bidangnya.",
            },
            {
                title: "● TOR (TRUST OUR RESOURCES)",
                description:
                    "PT Cahaya Utama juga memiliki sumber daya manusia yang terampil di berbagai bidang lainnya.",
            },
        ],
        []
    );

    return (
        <MainLayout>
            <Helmet>
                <html lang="id" />
                <title>
                    Tentang PT. Cahaya Utama - Perusahaan Jasa Outsourcing
                    Profesional
                </title>
                <meta
                    name="description"
                    content="PT. Cahaya Utama adalah perusahaan terkemuka yang menyediakan solusi outsourcing manajemen sumber daya manusia. Kami menawarkan layanan kebersihan, keamanan, dan tenaga kerja terampil dengan standar kualitas tinggi."
                />
                <meta
                    name="keywords"
                    content="outsourcing, jasa keamanan, kebersihan, tenaga kerja, PT Cahaya Utama"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="PT Cahaya Utama" />
                <meta name="language" content="id" />
                <meta name="theme-color" content="#004aad" />
                <link
                    rel="canonical"
                    href="https://www.cahayautamapt.com/perusahaan"
                />

                {/* OpenGraph */}
                <meta
                    property="og:title"
                    content="Tentang PT. Cahaya Utama - Solusi Outsourcing Terpercaya"
                />
                <meta
                    property="og:description"
                    content="Pelajari lebih lanjut tentang PT. Cahaya Utama, penyedia solusi outsourcing profesional untuk bisnis Anda."
                />
                <meta
                    property="og:image"
                    content="https://www.cahayautamapt.com/img/company/hero.png"
                />
                <meta
                    property="og:url"
                    content="https://www.cahayautamapt.com/perusahaan"
                />
                <meta property="og:type" content="website" />
            </Helmet>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative min-h-screen flex items-end justify-start"
            >
                {/* Background Image */}
                <picture className="absolute inset-0 w-full h-full z-0">
                    <source
                        srcSet="/img/company/heroV1.webp"
                        type="image/webp"
                    />
                    <img
                        src="/img/company/heroV1.png"
                        alt="Gedung kantor PT Cahaya Utama"
                        loading="eager"
                        fetchPriority="high"
                        width="1920"
                        height="1080"
                        className="w-full h-full object-cover object-center"
                    />
                </picture>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                {/* Hero Content */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 pb-12 text-white max-w-5xl text-center sm:text-left sm:ml-6">
                    <p className="uppercase text-[12px] sm:text-xl tracking-widest font-semibold mb-2 text-white">
                        Selamat Datang di PT Cahaya Utama
                    </p>

                    <h1 className="text-[22px] leading-snug sm:text-h2 font-bold mb-4">
                        Layanan Outsourcing Profesional,
                        <br className="hidden sm:block" />
                        Berintegritas, Handal & Terpercaya
                    </h1>

                    <p className="text-body-xs sm:text-body-md leading-relaxed text-white/90 mb-6 max-w-[90%] sm:max-w-3xl mx-auto sm:mx-0">
                        PT Cahaya Utama adalah penyedia tenaga kerja resmi
                        bersertifikat ISO 9001 & 45001 dengan pengalaman lebih
                        dari 20 tahun. Didukung tim profesional dan legalitas
                        lengkap, kami siap menjadi mitra outsourcing untuk
                        satpam, cleaning service, sales, admin, hingga tenaga
                        pabrik.
                    </p>

                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-body-xs sm:text-body-md text-left sm:text-left">
                        {serviceList.map((item, idx) => (
                            <div key={idx}>
                                <h3 className="font-semibold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <About />
            <Benefit />
            <CompanyAdvantage />
            <SmartOffice />
            <Experience />
            <Cooperation />
            <Client />
            <Faq />

            <Suspense
                fallback={
                    <div className="text-center py-10">Memuat footer...</div>
                }
            >
                <Footer />
            </Suspense>
        </MainLayout>
    );
}
