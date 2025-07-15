import React, { memo } from "react";

const AboutUs = memo(() => {
    return (
        <section
            className="relative w-full h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/img/about-us-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start pl-10">
                <div>
                    <h2 className="text-h2 font-semibold text-white mb-4">
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
