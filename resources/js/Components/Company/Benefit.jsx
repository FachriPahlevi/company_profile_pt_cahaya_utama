import React from "react";
import {
    LucideBolt,
    LucideBriefcase,
    LucideHandCoins,
    LucideSettings,
    LucideUmbrella,
    LucideBarChart4,
} from "lucide-react";

const benefits = [
    {
        icon: (
            <LucideBolt
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Kinerja Maksimal",
        desc: "Tenaga alih daya membantu operasional perusahaan lebih maksimal.",
    },
    {
        icon: (
            <LucideBriefcase
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Solusi Cerdas Atasi Birokrasi",
        desc: "Alihkan tugas yang terhambat birokrasi agar tetap efisien.",
    },
    {
        icon: (
            <LucideHandCoins
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Optimalkan Anggaran Belanja",
        desc: "Optimalkan anggaran dengan alihkan modal jadi biaya sewa alat kantor.",
    },
    {
        icon: (
            <LucideSettings
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Kesempatan Re-Engineering",
        desc: "Perusahaan memiliki kesempatan untuk me-re-engineering bisnis proses.",
    },
    {
        icon: (
            <LucideUmbrella
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Mengurangi Resiko Operasional",
        desc: "Beban dan resiko operasional perusahaan dapat terbagi dengan lebih terukur.",
    },
    {
        icon: (
            <LucideBarChart4
                className="text-primary-500 w-6 h-6 mb-2"
                aria-hidden="true"
            />
        ),
        title: "Tingkatkan Tercapainya ROI",
        desc: "Kerja perusahaan lebih efektif dalam mencapai Return of Investment (ROI).",
    },
];

export default function Benefit() {
    return (
        <section
            className="bg-white py-20 px-4"
            aria-labelledby="benefit-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase mb-2">
                    Mengapa Kami
                </p>
                <h2
                    id="benefit-heading"
                    className="text-h2 font-semibold text-gray-900 mb-4"
                >
                    Benefit Bergabung dengan Cahaya Utama
                </h2>
                <p className="text-body-md text-gray-600 max-w-2xl mx-auto mb-12">
                    Layanan outsourcing terpercaya dengan tenaga profesional,
                    legalitas lengkap dan dukungan maksimal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
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
        </section>
    );
}
