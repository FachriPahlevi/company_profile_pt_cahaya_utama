import React from "react";
import { BsBriefcase, BsUmbrella } from "react-icons/bs";
import { HiBolt, HiBriefcase, HiCog6Tooth } from "react-icons/hi2";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const benefits = [
    {
        icon: (
            <AiOutlineThunderbolt
                className="text-primary-500 w-8 h-8 mb-4"
                aria-hidden="true"
                role="img"
            />
        ),
        title: "Kinerja Maksimal",
        desc: "Tenaga alih daya membantu operasional perusahaan lebih maksimal.",
    },
    {
        icon: (
            <BsBriefcase
                className="text-primary-500 w-8 h-8 mb-4"
                aria-hidden="true"
                role="img"
            />
        ),
        title: "Solusi Cerdas Atasi Birokrasi",
        desc: "Alihkan tugas yang terhambat birokrasi agar tetap efisien.",
    },
    {
        icon: (
            <HiOutlineCog6Tooth
                className="text-primary-500 w-8 h-8 mb-4"
                aria-hidden="true"
                role="img"
            />
        ),
        title: "Kesempatan Re-Engineering",
        desc: "Perusahaan memiliki kesempatan untuk me-re-engineering bisnis proses.",
    },
    {
        icon: (
            <BsUmbrella
                className="text-primary-500 w-8 h-8 mb-4"
                aria-hidden="true"
                role="img"
            />
        ),
        title: "Mengurangi Resiko Operasional",
        desc: "Beban dan resiko operasional perusahaan dapat menjadi lebih terukur.",
    },
];

export default function Benefit() {
    return (
        <section
            className="bg-white py-20 px-4"
            aria-labelledby="benefit-heading"
        >
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase mb-3">
                    Mengapa Kami
                </p>
                <h2
                    id="benefit-heading"
                    className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
                >
                    Benefit Bergabung dengan Cahaya Utama
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto mb-14">
                    Layanan outsourcing terpercaya dengan tenaga profesional,
                    legalitas lengkap dan dukungan maksimal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-4"
                        >
                            {item.icon}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 w-2/3">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
