import React, { memo } from "react";

const Documentation = () => {
    return (
        <section
            className="relative w-full"
            aria-labelledby="dokumentasi-security"
        >
            <figure className="relative w-full">
                <img
                    src="/img/sonsecurity/HeroSonV3.png"
                    alt="Personil keamanan Son Security sedang bertugas"
                    className="w-full h-64 md:h-96 object-cover object-center"
                    loading="lazy"
                />
                <figcaption id="dokumentasi-security" className="sr-only">
                    Dokumentasi personil keamanan Son Security dalam menjalankan
                    tugas
                </figcaption>
            </figure>
        </section>
    );
};

export default memo(Documentation);
