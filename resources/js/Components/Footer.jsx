import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white pt-16">
            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-primary-500 text-white rounded-2xl px-8 py-12 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden">
                    {/* Background Patterns */}
                    <div className="absolute inset-0 opacity-80 bg-[url('/img/footer/MaskGroup.png')] bg-cover bg-center rounded-2xl" />

                    {/* Content */}
                    <div className="relative z-10 text-center lg:text-left mb-6 lg:mb-0">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            Jadi Partner Cahaya Utama Sekarang!
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base max-w-xl">
                            Kami siap menjadi partner dalam penyediaan SDM yang
                            terlatih, disiplin, dan bertanggung jawab, demi
                            menunjang kesuksesan perusahaan Anda.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="relative z-10">
                        <a
                            href="#kontak"
                            className="inline-block bg-white text-primary-500 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-10 pb-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Left Logo and Sosmed */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/img/cahaya_utama.png"
                            alt="Cahaya Utama Logo"
                            className="h-10 object-contain"
                        />
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                            >
                                <FaFacebookF size={14} />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                            >
                                <FaInstagram size={14} />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                            >
                                <FaLinkedinIn size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium">
                        <li>
                            <a href="/">Beranda</a>
                        </li>
                        <li>
                            <a href="/tentang">Tentang kami</a>
                        </li>
                        <li>
                            <a href="/tor">Trust our Resource</a>
                        </li>
                        <li>
                            <a href="/security">Son Security</a>
                        </li>
                        <li>
                            <a href="/cleaning">Briliant Clean</a>
                        </li>
                        <li>
                            <a href="/elearning">E-Learning</a>
                        </li>
                        <li>
                            <a href="/karir">Rekrutmen</a>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    Copyright © {new Date().getFullYear()} Cahaya Utama | All
                    Rights Reserved
                </div>
            </div>
        </footer>
    );
}
