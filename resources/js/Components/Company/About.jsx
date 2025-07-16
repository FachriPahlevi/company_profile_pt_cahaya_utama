import React, { memo } from "react";

const AboutUs = memo(() => {
    return (
        <section
            className="relative w-full h-[600px] overflow-hidden"
            aria-labelledby="about-us-title"
        >
            {/* Optimized responsive image */}
            <picture>
                <source srcSet="/img/company/heroV2.webp" type="image/webp" />
                <img
                    src="/img/company/heroV1.png"
                    alt="Gedung kantor PT Cahaya Utama"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    fetchpriority="low"
                    width="1920"
                    height="1080"
                />
            </picture>

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start pl-10">
                <div>
                    <h2
                        id="about-us-title"
                        className="text-h2 font-semibold text-white mb-4"
                    >
                        TENTANG KAMI
                    </h2>
                    <h3 className="text-h3 font-semibold text-white mb-6">
                        Sekilas Cahaya Utama
                    </h3>
                    <p className="text-body-md text-white max-w-md mb-6">
                        PT Cahaya Utama adalah salah satu perusahaan swasta
                        nasional yang didirikan pada tahun 2004. Perusahaan ini
                        berbentuk perseorangan terbatas yang bergerak di bidang
                        jasa outsourcing atau alih daya manajemen sumber daya
                        manusia.
                    </p>
                    <a
                        href="/selengkapnya"
                        className="inline-block bg-primary-500 text-white text-body-sm font-semibold py-2 px-6 rounded hover:bg-primary-600 transition-colors"
                    >
                        Selengkapnya  ➔
                    </a>
                </div>
            </div>
        </section>
    );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
