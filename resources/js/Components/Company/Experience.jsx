import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section className="bg-primary-500 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading + Paragraph */}
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                        Rekam Jejak Lebih dari 20 Tahun Cahaya Utama
                    </h2>
                    <p className="text-white/90 text-base leading-relaxed">
                        PT. Cahaya Utama selalu berinovasi dalam pelayanan,
                        memperkuat komunikasi dengan perusahaan yang bergabung
                        serta menjaga kualitas jasa yang diberikan. Kami
                        berpegang teguh pada prinsip profesional, berintegritas,
                        handal, dan terpercaya untuk menjadi partner utama
                        perusahaan Anda.
                    </p>
                </div>

                {/* Garis Pembatas */}
                <hr className="border-white/30 mb-10" ref={ref} />

                {/* Statistik */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <StatItem
                        end={92000}
                        suffix="+"
                        label="Tenaga kerja telah kami tempatkan"
                        inView={inView}
                    />
                    <StatItem
                        end={10}
                        label="Representatif Kantor & Cabang"
                        inView={inView}
                    />
                    <StatItem
                        end={134}
                        label="Manajemen Profesional"
                        inView={inView}
                    />
                    <StatItem
                        end={116}
                        label="Klien Perusahaan di Tanah Air"
                        inView={inView}
                    />
                </div>
            </div>
        </section>
    );
}

function StatItem({ end, suffix = "", label, inView }) {
    return (
        <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {inView && (
                    <CountUp
                        start={0}
                        end={end}
                        duration={2.5}
                        separator=","
                        suffix={` ${suffix}`}
                    />
                )}
            </h3>
            <p className="text-sm md:text-base text-white/80">{label}</p>
        </div>
    );
}
