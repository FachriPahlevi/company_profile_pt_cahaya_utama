import React from "react";
import {
    LucideSearchCheck,
    LucideHeartHandshake,
    LucidePresentation,
    LucideUserMinus2,
} from "lucide-react";

const advantages = [
    {
        icon: (
            <LucideSearchCheck
                className="w-6 h-6 text-pink-500 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Seleksi Tepat Sasaran",
        desc: "Berpengalaman dalam proses seleksi SDM dengan standar tinggi dan ketentuan lengkap dari segala aspek.",
    },
    {
        icon: (
            <LucideHeartHandshake
                className="w-6 h-6 text-rose-400 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Layanan Prima",
        desc: "Perusahaan dengan layanan prima berpedoman pada prinsip SMART: Sigap, Menarik, Antusias, Ramah, dan Tanggap.",
    },
    {
        icon: (
            <LucidePresentation
                className="w-6 h-6 text-indigo-500 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Pelatihan SDM",
        desc: "Perusahaan secara rutin melaksanakan pelatihan yang dibutuhkan untuk meningkatkan kompetensi SDM.",
    },
    {
        icon: (
            <LucideUserMinus2
                className="w-6 h-6 text-green-500 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Fleksibilitas",
        desc: "Pengguna bebas meminta penggantian SDM yang belum sesuai dengan harapan perusahaan.",
    },
];

export default function CompanyAdvantage() {
    return (
        <section
            className="bg-gray-50 py-20 px-4"
            aria-labelledby="advantage-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase mb-2">
                    Keunggulan Kami
                </p>
                <h2
                    id="advantage-heading"
                    className="text-h2 font-semibold text-gray-900 mb-4"
                >
                    Kenali 4 Keunggulan Cahaya Utama
                </h2>
                <p className="text-body-md text-gray-600 max-w-2xl mx-auto mb-12">
                    Empat keunggulan utama kami dirancang untuk menjawab
                    kebutuhan bisnis Anda secara tepat dan profesional.
                </p>

                <div className="grid md:grid-cols-3 gap-10 items-center">
                    {/* Left items */}
                    <div className="flex flex-col gap-10 text-left">
                        {advantages.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start max-w-xs mx-auto"
                            >
                                {item.icon}
                                <h3 className="text-h5 font-semibold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-body-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Middle Image */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                srcSet="/img/company/heroV3.webp"
                                type="image/webp"
                            />
                            <img
                                src="/img/company/heroV3.png"
                                alt="Karyawan PT Cahaya Utama mengenakan alat pengaman kerja"
                                loading="lazy"
                                className="rounded-lg shadow-lg w-full max-w-md"
                                width="600"
                                height="600"
                                fetchpriority="low"
                            />
                        </picture>
                    </div>

                    {/* Right items */}
                    <div className="flex flex-col gap-10 text-left">
                        {advantages.slice(2, 4).map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start max-w-xs mx-auto"
                            >
                                {item.icon}
                                <h3 className="text-h5 font-semibold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-body-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
