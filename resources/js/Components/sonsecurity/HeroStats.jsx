import React, { memo, useMemo } from "react";
import CountUp from "react-countup";

const HeroStats = () => {
    const stats = useMemo(
        () => [
            { label: "Tenaga kerja kami", value: 31600 },
            { label: "Klien", value: 37 },
            { label: "Bidang", value: 8 },
        ],
        []
    );

    return (
        <section className="bg-blue-600 text-white py-12 px-4 md:px-16">
            <div className="max-w-full px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Deskripsi */}
                <div className="text-left">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        <strong>SON SECURITY</strong> adalah bagian dari{" "}
                        <strong>PT. CAHAYA UTAMA</strong> yang menyediakan alih
                        daya jasa keamanan (outsourcing for security service),
                        untuk perusahaan yang membutuhkan dengan 24 jam waktu
                        pengamanan.
                    </p>
                </div>

                {/* Statistik */}
                <div className="grid grid-cols-3 text-center md:text-right gap-6 md:gap-10">
                    {stats.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center md:items-end"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold">
                                <CountUp
                                    end={item.value}
                                    duration={2}
                                    separator="."
                                />
                            </h3>
                            <p className="text-sm md:text-base mt-1 text-justify">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(HeroStats);
