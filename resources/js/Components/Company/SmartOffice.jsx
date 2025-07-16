import React from "react";
import { Building2, BadgeCheck, CalendarDays, Banknote } from "lucide-react";

const features = [
    {
        icon: <BadgeCheck className="w-5 h-5 text-white" />,
        title: "Base employment system",
    },
    {
        icon: <Building2 className="w-5 h-5 text-white" />,
        title: "Corporate social networking",
    },
    {
        icon: <CalendarDays className="w-5 h-5 text-white" />,
        title: "Attendance system",
    },
    {
        icon: <Banknote className="w-5 h-5 text-white" />,
        title: "Payroll system",
    },
];

export default function SmartOffice() {
    return (
        <section
            className="bg-white py-20 px-4"
            aria-labelledby="cusoft-heading"
        >
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase mb-2">
                    CU Soft
                </p>
                <h2
                    id="cusoft-heading"
                    className="text-h2 font-bold text-gray-900 mb-6"
                >
                    CU Smart Office Technology (CuSoft)
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                    {/* Gambar */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                srcSet="/img/company/heroCUSoft.webp"
                                type="image/webp"
                            />
                            <img
                                src="/img/company/heroCUSoft.png"
                                alt="Tampilan aplikasi CuSoft pada smartphone"
                                loading="lazy"
                                width="600"
                                height="400"
                                className="rounded-lg shadow-md object-cover w-full max-w-md"
                            />
                        </picture>
                    </div>

                    {/* Konten */}
                    <div className="text-left max-w-lg mx-auto md:mx-0">
                        <p className="text-body-md text-gray-600 mb-6">
                            CuSoft adalah aplikasi Smart Office PT. Cahaya Utama
                            yang didesain user-friendly, komunikatif,
                            interaktif, akurat, dan realtime. Aplikasi ini
                            mendukung efisiensi operasional dengan 4 fitur
                            berikut :
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="p-2 bg-primary-500 rounded-md shadow">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
