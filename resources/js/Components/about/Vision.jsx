import React from "react";

const Vision = () => {
    return (
        <section
            className="py-16 px-4 md:px-20 bg-white"
            aria-label="Visi dan Misi"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Gambar */}
                <div>
                    <img
                        src="/img/about/HeroAboutV5.png"
                        alt="Visi dan Misi PT Cahaya Utama"
                        className="rounded-xl w-full h-auto object-cover shadow"
                        loading="lazy"
                    />
                </div>

                {/* Teks */}
                <div className="text-gray-800">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        VISI
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed mb-8 text-justify">
                        Dengan visi menjadi perusahaan yang selalu mengerti dan
                        memahami kemauan dari para pelanggannya, maka PT. Cahaya
                        Utama memperkuat komunikasi dengan pelanggan dan selalu
                        menjaga kualitas jasa yang diberikan.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        MISI
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-justify">
                        Misi dari PT. Cahaya Utama adalah melakukan komunikasi
                        yang baik dan berkesinambungan pada customer atau
                        pemakai jasa untuk memperoleh hasil yang sesuai dengan
                        apa yang mereka harapkan sehingga tercipta kepuasan
                        pelanggan. Hal tersebut yang memotivasi PT. Cahaya Utama
                        untuk selalu menjaga kualitas yang diberikan kepada
                        klien.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
