import React, { useMemo } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/Layouts/MainLayout";
import Client from "@/Components/Company/Client";
import Cooperation from "@/Components/Cooperation";
import Commitment from "@/Components/Company/Commitment";
import { Helmet } from "react-helmet";
import AboutUs from "@/Components/Company/About";
import Benefit from "@/Components/Company/Benefit";
import CompanyAdvantage from "@/Components/Company/CompanyAdvantage";
import SmartOffice from "@/Components/Company/SmartOffice";
import Experience from "@/Components/Company/Experience";
import Faq from "@/Components/Company/Faq";

export default function Company() {
    return (
        <MainLayout>
            <Helmet>
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
                <meta
                    property="og:title"
                    content="Tentang PT. Cahaya Utama - Solusi Outsourcing Terpercaya"
                />
                <meta
                    property="og:description"
                    content="Pelajui lebih lanjut tentang PT. Cahaya Utama, penyedia solusi outsourcing profesional untuk bisnis Anda."
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
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                        fetchpriority="high"
                        width="1920"
                        height="1080"
                    />
                </picture>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                {/* Hero Content */}
                <div className="container relative z-20 px-6 pb-16 text-white max-w-5xl ml-6">
                    <p className="uppercase text-sm tracking-widest text-white font-semibold mb-2">
                        Selamat Datang di PT Cahaya Utama
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Layanan Outsourcing Profesional,
                        <br />
                        Berintegritas, Handal & Terpercaya
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                        PT Cahaya Utama adalah penyedia tenaga kerja resmi
                        bersertifikat ISO 9001 & 45001 dengan pengalaman lebih
                        dari 20 tahun. Didukung tim profesional dan legalitas
                        lengkap, kami siap menjadi mitra outsourcing untuk
                        satpam, cleaning service, sales, admin, hingga tenaga
                        pabrik.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
                        <div>
                            <h3 className="font-bold text-white mb-1">
                                ● SON SECURITY
                            </h3>
                            <p className="text-white/80">
                                Menyediakan tenaga kerja profesional di bidang
                                keamanan yang jujur, ulet, tangguh, dan
                                disiplin.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">
                                ● BRILLIANT CLEAN
                            </h3>
                            <p className="text-white/80">
                                Tenaga layanan kebersihan yang kompeten &
                                terlatih serta berpengalaman di bidangnya.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">
                                ● TOR (TRUST OUR RESOURCES)
                            </h3>
                            <p className="text-white/80">
                                PT Cahaya Utama juga memiliki sumber daya
                                manusia yang terampil di berbagai bidang
                                lainnya.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Commitment />
            <AboutUs />
            <Benefit />
            <CompanyAdvantage />
            <SmartOffice />
            <Experience />
            <Cooperation />
            <Client />
            <Faq />
        </MainLayout>
    );
}
