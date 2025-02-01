import React from "react";
import { Phone } from "lucide-react";

export default function Office() {
    return (
        <div className="bg-[#1e5779] text-white py-12">
            <div className="container mx-auto px-6 lg:px-20">
                {/* First Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">PT. CAHAYA UTAMA</h3>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Kantor Pusat</h4>
                            <div className="flex items-start space-x-2">
                                <div className="text-blue-400 mt-1">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="leading-relaxed">
                                        <span className="font-bold">KP Surabaya</span>
                                        <br />
                                        Komplek Ruko Mangga Dua A6 No. 01-02
                                        <br />
                                        Jl. Jagir Wonokromo No. 100
                                        <br />
                                        Surabaya 60244
                                        <br />
                                        Jawa Timur – Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0b7ba6] rounded-full py-3 px-6 inline-flex items-center space-x-2">
                            <Phone className="text-xl" />
                            <span className="font-bold">Hotline +62318481201</span>
                        </div>
                    </div>

                    {/* Java Offices */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold">Kantor Perwakilan Pulau Jawa</h4>
                        
                        {/* Jakarta Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Jakarta – Tangerang</p>
                                <p className="leading-relaxed">
                                    Jl. Bintaro Utara Raya Blok AP No. 59
                                    <br />
                                    Bintaro Sektor 3 Bintaro Jaya
                                    <br />
                                    Tangerang Selatan 15221
                                    <br />
                                    Banten – Indonesia
                                    <br />
                                    Telp. <span className="text-blue-400">+62 21 73884719</span>, <span className="text-blue-400">+62 21 93393088</span>
                                </p>
                            </div>
                        </div>

                        {/* Yogyakarta Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Yogyakarta</p>
                                <p className="leading-relaxed">
                                    Perum MBS (Mataram Bumi Sejahtera) D-83
                                    <br />
                                    Condong Catur, Depok, Sleman
                                    <br />
                                    Yogyakarta 55281
                                    <br />
                                    Jawa Tengah – Indonesia
                                    <br />
                                    Telp. <span className="text-blue-400">+62 274 881330</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Java Offices */}
                    <div className="space-y-6">
                        {/* Semarang Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Semarang</p>
                                <p className="leading-relaxed">
                                    Ruko New York E-15 Citra Grand Boulevard
                                    <br />
                                    Jl. Kompol R. Soekanto Mangunharjo
                                    <br />
                                    Semarang 50276
                                    <br />
                                    Jawa Tengah – Indonesia
                                    <br />
                                    Telp. <span className="text-blue-400">+62 246 417981</span>
                                </p>
                            </div>
                        </div>

                        {/* Malang Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Malang</p>
                                <p className="leading-relaxed">
                                    Jalan Cakalang 102 A
                                    <br />
                                    Polowijen, Malang
                                    <br />
                                    Malang – 65126
                                    <br />
                                    Jawa Timur – Indonesia
                                    <br />
                                    Telp. <span className="text-blue-400">+62 341 403949</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="space-y-8">
                    <h4 className="text-lg font-semibold">Kantor Perwakilan Pulau Sulawesi</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Makassar Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Makassar</p>
                                <p className="leading-relaxed">
                                    Ruko Citraland Hertasning Blok L 22-23
                                    <br />
                                    Gowa Makassar 90233
                                    <br />
                                    Sulawesi Selatan – Indonesia
                                    <br />
                                    Telp. <span className="text-blue-400">+62 411 428553</span>
                                </p>
                            </div>
                        </div>

                        {/* Bali Office Section */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Kantor Perwakilan Pulau Bali & Nusra</h4>
                            <div className="flex items-start space-x-2">
                                <div className="text-blue-400 mt-1">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="font-bold">KC Bali</p>
                                    <p className="leading-relaxed">
                                        Jl. Malioboro No. 12
                                        <br />
                                        Denpasar
                                        <br />
                                        Bali – Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Nusa Tenggara Office */}
                        <div className="flex items-start space-x-2">
                            <div className="text-blue-400 mt-1">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="font-bold">KC Nusa Tenggara Timur</p>
                                <p className="leading-relaxed">
                                    Jl. Achmad Jais No. 27
                                    <br />
                                    Kupang
                                    <br />
                                    Nusa Tenggara Timur – Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}