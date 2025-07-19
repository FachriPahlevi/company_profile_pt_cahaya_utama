import React, { memo } from "react";

const AboutUs = memo(() => {
    return (
        <section
            className="relative w-full h-[600px] overflow-hidden"
            aria-labelledby="about-us-title"
        >
            {/* Responsive Background Image */}
            <picture>
                <source srcSet="/img/company/heroV2.webp" type="image/webp" />
                <img
                    src="/img/company/heroV2.png"
                    alt="Tampilan gedung kantor PT Cahaya Utama"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    fetchpriority="low"
                    width="1920"
                    height="1080"
                />
            </picture>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 flex items-center px-6 md:px-10">
                <div className="max-w-xl text-white space-y-4">
                    <h2
                        id="about-us-title"
                        className="text-2xl md:text-4xl font-bold"
                    >
                        Tentang Kami
                    </h2>
                    <h3 className="text-lg md:text-2xl font-semibold">
                        Sekilas Cahaya Utama
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        PT Cahaya Utama adalah salah satu perusahaan swasta
                        nasional yang berdiri sejak tahun 2004. Kami bergerak di
                        bidang jasa outsourcing manajemen SDM dengan legalitas
                        lengkap dan pengalaman lebih dari dua dekade.
                    </p>
                    <a
                        href="/selengkapnya"
                        className="inline-block bg-primary-500 text-white text-sm font-semibold py-2 px-6 rounded hover:bg-primary-600 transition-colors"
                        aria-label="Baca selengkapnya tentang perusahaan"
                    >
                        Selengkapnya ➔
                    </a>
                </div>
            </div>
        </section>
    );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
